import type { AnchorHTMLAttributes } from "react";

/** Preserve usable mailto links when Cloudflare Email Obfuscation is enabled. */
export default function EmailLink({
  href = "mailto:hello@enkay.dev",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <>
      <span hidden aria-hidden="true" dangerouslySetInnerHTML={{ __html: "<!--email_off-->" }} />
      <a {...props} href={href}>{children}</a>
      <span hidden aria-hidden="true" dangerouslySetInnerHTML={{ __html: "<!--/email_off-->" }} />
    </>
  );
}
