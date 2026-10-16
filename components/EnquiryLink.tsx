"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

/** Explicitly reveal same-page enquiry targets; retain native cross-page links. */
export function scrollToEnquiry(event: MouseEvent<HTMLAnchorElement>): void {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const url = new URL(event.currentTarget.href, window.location.href);
  if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !["#project-enquiry", "#contact"].includes(url.hash)) return;
  const target = document.getElementById(url.hash.slice(1));
  if (!target) return;
  event.preventDefault();
  if (window.location.hash !== url.hash) window.history.pushState(window.history.state, "", window.location.pathname + window.location.search + url.hash);
  target.scrollIntoView({ behavior: "instant", block: "start" });
  target.tabIndex = -1;
  target.focus({ preventScroll: true });
}

export default function EnquiryLink({ onClick, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} onClick={(event) => { onClick?.(event); scrollToEnquiry(event); }}>{children}</a>;
}
