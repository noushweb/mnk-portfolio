#!/usr/bin/env python3
"""
SEO Keyword Research — automated keyword discovery for enkay.dev
Combines: DeepSeek AI keywords + Google Suggest autocomplete
Output: ranked keyword list with search intent labels
"""

import json
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import sys
import os

# --- Config ---
LOCATIONS = [
    "dubai", "riyadh", "abu dhabi", "sharjah", "umm al quwain",
    "kerala", "kochi", "bangalore", "india", "uae"
]

SEED_QUERIES = [
    "product designer",
    "ui ux designer",
    "senior product designer",
    "design systems",
    "enterprise ux designer",
    "freelance product designer",
    "fintech designer",
]

DEEPSEEK_API_KEY = os.environ.get("DEEPSEEK_API_KEY", "")
DEEPSEEK_URL = "https://api.deepseek.com/v1/chat/completions"


def get_google_suggest(query: str, country: str = "ae") -> list[str]:
    """Fetch Google autocomplete suggestions."""
    url = f"https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl={country}&q={urllib.parse.quote(query)}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
            return data[1] if len(data) > 1 else []
    except Exception as e:
        print(f"  ⚠ Google suggest failed for '{query}': {e}", file=sys.stderr)
        return []


def get_deepseek_keywords(topic: str, location: str) -> list[dict]:
    """Use DeepSeek to generate location-targeted keywords with intent."""
    if not DEEPSEEK_API_KEY or DEEPSEEK_API_KEY.startswith("sk-79e..."):
        print("  ⚠ No valid DEEPSEEK_API_KEY — skipping DeepSeek keywords", file=sys.stderr)
        return []

    prompt = f"""You are an SEO keyword research specialist. Generate 10 targeted keywords for a Senior Product Designer's portfolio site (enkay.dev) targeting the location: {location}.

Topic seed: {topic}

Rules:
1. Mix of short-tail (2-3 words) and long-tail (4-6 words) keywords
2. Include intent label for each: commercial, informational, or transactional
3. Focus on keywords a potential CLIENT or RECRUITER would search
4. Include at least 3 long-tail, low-competition gems
5. Use natural language — how a real person types into Google

Output ONLY valid JSON array:
[{{"keyword": "...", "intent": "commercial|informational|transactional", "volume_hint": "high|medium|low"}}]"""

    try:
        req = urllib.request.Request(
            DEEPSEEK_URL,
            data=json.dumps({
                "model": "deepseek-chat",
                "messages": [{"role": "user", "content": prompt}],
                "temperature": 0.7,
                "max_tokens": 800,
            }).encode(),
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
            },
        )
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = json.loads(resp.read())
            content = data["choices"][0]["message"]["content"].strip()
            # Extract JSON from markdown code blocks
            if "```" in content:
                content = content.split("```")[1]
                if content.startswith("json"):
                    content = content[4:]
            return json.loads(content)
    except Exception as e:
        print(f"  ⚠ DeepSeek failed for '{topic}' in '{location}': {e}", file=sys.stderr)
        return []


def main():
    all_keywords: dict[str, dict] = {}  # keyword -> {source, intent, volume}

    for location in LOCATIONS:
        print(f"\n📍 {location.upper()}")
        for seed in SEED_QUERIES:
            query = f"{seed} {location}"

            # 1. Google Suggest
            suggestions = get_google_suggest(query)
            for s in suggestions:
                kw = s.strip().lower()
                if kw not in all_keywords:
                    all_keywords[kw] = {"source": "google", "intent": "informational", "volume": "medium"}
                if len(suggestions) > 0:
                    print(f"  G: {len(suggestions)} suggestions from '{query}'")

            # 2. DeepSeek AI keywords
            ai_kws = get_deepseek_keywords(seed, location)
            for kw in ai_kws:
                k = kw["keyword"].strip().lower()
                if k not in all_keywords:
                    all_keywords[k] = {
                        "source": "deepseek",
                        "intent": kw.get("intent", "informational"),
                        "volume": kw.get("volume_hint", "medium"),
                    }
            if ai_kws:
                print(f"  D: {len(ai_kws)} keywords from DeepSeek")

    # Deduplicate & rank
    ranked = sorted(all_keywords.items(), key=lambda x: (
        0 if x[1]["volume"] == "high" else (1 if x[1]["volume"] == "medium" else 2),
        0 if x[1]["source"] == "deepseek" else 1,
    ))

    print(f"\n{'='*60}")
    print(f"TOTAL UNIQUE KEYWORDS: {len(ranked)}")
    print(f"{'='*60}")

    for kw, meta in ranked[:30]:
        tag = f"[{meta['intent'][:4].upper()}]" if meta["intent"] else ""
        src = "🤖" if meta["source"] == "deepseek" else "🔍"
        print(f"  {src} {kw:<50} {tag}")

    # Output JSON for pipeline use
    output = [{"keyword": kw, **meta} for kw, meta in ranked]
    print(f"\n--- JSON OUTPUT ---")
    print(json.dumps(output, indent=2))


if __name__ == "__main__":
    main()
