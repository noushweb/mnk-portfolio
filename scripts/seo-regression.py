#!/usr/bin/env python3
"""Read-only SEO regression checks against a running preview or production origin."""
import argparse
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
import json
import re
import urllib.error
import urllib.parse
import urllib.request
import urllib.robotparser
import xml.etree.ElementTree as ET


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.meta = {}
        self.canonicals = []
        self.links = []
        self.scripts = []
        self.jsonld = []
        self.title = ""
        self._title = False
        self._json = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta":
            self.meta[attrs.get("name", attrs.get("property", ""))] = attrs.get("content", "")
        elif tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href"))
        elif tag == "a":
            self.links.append(attrs.get("href", ""))
        elif tag == "title":
            self._title = True
        elif tag == "script":
            if attrs.get("src"):
                self.scripts.append(attrs["src"])
            if attrs.get("type") == "application/ld+json":
                self._json = ""

    def handle_data(self, data):
        if self._title:
            self.title += data
        if self._json is not None:
            self._json += data

    def handle_endtag(self, tag):
        if tag == "title":
            self._title = False
        elif tag == "script" and self._json is not None:
            self.jsonld.append(json.loads(self._json))
            self._json = None


def schema_types(value):
    if isinstance(value, list):
        return [t for child in value for t in schema_types(child)]
    if isinstance(value, dict):
        own = value.get("@type", [])
        return ([own] if isinstance(own, str) else own) + schema_types(value.get("@graph", []))
    return []


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--origin", default="http://localhost:3000")
    parser.add_argument("--output")
    args = parser.parse_args()
    origin = args.origin.rstrip("/")
    checks = []

    def check(name, condition, detail=None):
        checks.append({"check": name, "passed": bool(condition), "detail": detail})

    def fetch(path: str) -> tuple[int, str, dict[str, str], str]:
        request = urllib.request.Request(origin + path, headers={"User-Agent": "Mozilla/5.0 SEORegression/1.0"})
        try:
            with urllib.request.urlopen(request, timeout=40) as response:
                return response.status, response.read().decode("utf-8", "replace"), {key.lower(): value for key, value in response.headers.items()}, response.url
        except urllib.error.HTTPError as error:
            return error.code, error.read().decode("utf-8", "replace"), {key.lower(): value for key, value in error.headers.items()}, error.url

    status, sitemap_body, _, _ = fetch("/sitemap.xml")
    check("sitemap HTTP 200", status == 200)
    entries = ET.fromstring(sitemap_body)
    urls = [node.text for node in entries.findall("{*}url/{*}loc") if node.text is not None]
    check("sitemap URLs unique", len(urls) == len(set(urls)), len(urls))
    check("sitemap has all 54 existing pages", len(urls) >= 54, len(urls))
    paths = [urllib.parse.urlsplit(url).path or "/" for url in urls]

    def inspect(path):
        status, body, headers, final = fetch(path)
        page = Page()
        page.feed(body)
        return path, status, page, headers, body, final

    results = list(ThreadPoolExecutor(max_workers=6).map(inspect, paths))
    for path, status, page, headers, body, final in results:
        expected = "https://enkay.dev" + ("" if path == "/" else path)
        check(f"{path}: HTTP 200", status == 200, status)
        check(f"{path}: self canonical", page.canonicals == [expected], page.canonicals)
        check(f"{path}: title/description/social tags", all([
            page.title, page.meta.get("description"), page.meta.get("og:image"), page.meta.get("twitter:title")
        ]))
        check(f"{path}: description <=180 characters", len(page.meta.get("description", "")) <= 180,
              len(page.meta.get("description", "")))
        check(f"{path}: not noindex", "noindex" not in page.meta.get("robots", "").lower()
              and "noindex" not in headers.get("x-robots-tag", "").lower())
        check(f"{path}: email links not Cloudflare 404", not any("/cdn-cgi/l/email-protection" in link for link in page.links))
        if path.startswith("/articles/") and path != "/articles/archive":
            types = [t for schema in page.jsonld for t in schema_types(schema)]
            check(f"{path}: Article and Breadcrumb schema", "Article" in types and "BreadcrumbList" in types)
            check(f"{path}: article modified metadata", bool(page.meta.get("article:modified_time")))
        elif path.strip("/") in ["dubai", "india", "riyadh", "uae", "kerala", "kochi", "bangalore", "abu-dhabi", "sharjah", "umm-al-quwain"]:
            check(f"{path}: buyer engagement section", "How we can work together" in body)
    titles = Counter(page.title for _, _, page, _, _, _ in results)
    check("all sitemap page titles unique", all(count == 1 for count in titles.values()))
    status, robots, _, _ = fetch("/robots.txt")
    rules = urllib.robotparser.RobotFileParser()
    rules.parse(robots.splitlines())
    check("robots HTTP 200", status == 200)
    homepage = next(page for path, _, page, _, _, _ in results if path == "/")
    assets = [script for script in homepage.scripts if "/_next/" in script]
    check("homepage has public JavaScript assets", bool(assets))
    check("Googlebot allowed Next.js assets", all(rules.can_fetch("Googlebot", script) for script in assets))
    if assets:
        asset_path = urllib.parse.urlsplit(assets[0]).path
        check("sample Next.js asset HTTP 200", fetch(asset_path)[0] == 200)
    status, feed, feed_headers, _ = fetch("/feed.xml")
    feed_root = ET.fromstring(feed)
    feed_items = feed_root.findall("./channel/item")
    articles = [path for path in paths if path.startswith("/articles/") and path != "/articles/archive"]
    check("RSS feed valid and includes all articles", status == 200 and len(feed_items) == len(articles), len(feed_items))
    check("RSS MIME type", "application/rss+xml" in feed_headers.get("content-type", ""))
    status, _, _, final = fetch("/index.xml")
    check("legacy /index.xml resolves to RSS", status == 200 and urllib.parse.urlsplit(final).path == "/feed.xml", final)
    status, llms, _, _ = fetch("/llms.txt")
    check("llms.txt HTTP 200 and covers sitemap", status == 200 and all(url in llms for url in urls))
    check("unknown route remains a real 404", fetch("/nonexistent-seo-regression-test")[0] == 404)
    for path in ["/dubai", "/articles/senior-product-designer-dubai", "/articles/senior-product-designer-riyadh"]:
        body = next(body for p, _, _, _, body, _ in results if p == path)
        check(f"{path}: no contradictory move dates", not re.search(r"moved to Dubai (four|eight) years ago", body, re.I))
        check(f"{path}: confirmed Dubai timeline", bool(re.search(r"(?:11|eleven) years", body, re.I)))
    for path, targets in {
        "/articles/senior-product-designer-dubai": ["/valmont-legacy-redesign"],
        "/articles/senior-product-designer-riyadh": ["/valmont-legacy-redesign", "/voyacher", "/finflow"],
        "/articles/product-designer-india": ["/finflow", "/voyacher"],
    }.items():
        page = next(page for p, _, page, _, _, _ in results if p == path)
        check(f"{path}: contextual case-study links", all(target in page.links for target in targets))
    summary = {"origin": origin, "sitemap_pages": len(urls), "articles": len(articles), "checks": len(checks),
               "passed": sum(item["passed"] for item in checks), "failures": [item for item in checks if not item["passed"]]}
    if args.output:
        with open(args.output, "w") as file:
            json.dump({"summary": summary, "checks": checks}, file, indent=2)
    print(json.dumps(summary, indent=2))
    return 1 if summary["failures"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
