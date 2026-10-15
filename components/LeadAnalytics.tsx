"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackLeadEvent } from "@/lib/lead-analytics-client";

/** Counts events, not unique visitors; delegates mailto tracking to avoid duplicates. */
export default function LeadAnalytics() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (pathname && previousPath.current !== pathname) {
      previousPath.current = pathname;
      trackLeadEvent("page_view");
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
      const anchor = element?.closest("a[href]");
      const href = anchor?.getAttribute("href")?.trim();
      if (href?.toLowerCase().startsWith("mailto:")) {
        trackLeadEvent("email_click", "email");
      } else if (event.isTrusted && href?.endsWith("#project-enquiry")) {
        trackLeadEvent("enquiry_open", "lead-form");
      } else if (event.isTrusted && href?.endsWith("#contact")) {
        trackLeadEvent("enquiry_open", "contact");
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
