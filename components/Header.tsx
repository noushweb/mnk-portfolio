"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);
  const pathname = usePathname();

  const navLinkClass = (href: string) =>
    `font-medium text-[13px] uppercase tracking-[1.5px] nav-link relative ${
      pathname === href ? "text-[var(--color-text-primary)] after:!w-full" : "text-[var(--color-text-secondary)]"
    }`;

  return (
    <>
      <div className="sticky top-0 z-50">
      <header
        id="main-nav"
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "scrolled-nav shadow-sm py-4"
            : "bg-[var(--color-bg)] py-6"
        } px-8 md:px-20`}
      >
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
          <Logo onClick={closeMenu} />

          {/* Desktop: nav links + theme toggle together on right */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-10">
              <Link href="/#about" id="nav-link-about" className="font-medium text-[13px] uppercase tracking-[1.5px] text-[var(--color-text-secondary)] nav-link">
                About
              </Link>
              <Link href="/work" id="nav-link-work" className={navLinkClass("/work")}>
                Work
              </Link>
              <Link href="/services" id="nav-link-services" className={navLinkClass("/services")}>
                Services
              </Link>
              <Link href="/articles" id="nav-link-articles" className={navLinkClass("/articles")}>
                Articles
              </Link>
              <a
                href="/casestudy/cv/mohammed_noushad_cv_ats.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Mohammed_Noushad_CV.pdf"
                className="font-medium text-[13px] uppercase tracking-[1.5px] text-[var(--color-text-secondary)] nav-link"
              >
                Download CV
              </a>
              <a
                href="#contact"
                id="nav-cta-talk"
                className="border rounded px-6 py-2.5 font-medium text-[13px] tracking-[0.5px] transition-all"
                style={{
                  borderColor: "var(--color-accent)",
                  color: "var(--color-accent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-accent)";
                  e.currentTarget.style.color =
                    "var(--color-accent-warm)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--color-accent)";
                }}
              >
                LET&apos;S TALK
              </a>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors hover:bg-[var(--color-border)]"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-[var(--color-text-secondary)]" />
              ) : (
                <Sun className="w-5 h-5 text-[var(--color-accent-warm)]" />
              )}
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors hover:bg-[var(--color-border)]"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-[var(--color-text-secondary)]" />
              ) : (
                <Sun className="w-5 h-5 text-[var(--color-accent-warm)]" />
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-[var(--color-text-primary)]" />
              ) : (
                <Menu className="w-6 h-6 text-[var(--color-text-primary)]" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="w-full h-px bg-[var(--color-border)]" />
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onClick={closeMenu}
      />

      {/* Mobile menu panel */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-[var(--color-surface)] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 pt-24 space-y-8">
          <Link
            href="/#about"
            onClick={closeMenu}
            className="text-lg font-medium text-[var(--color-text-primary)] uppercase tracking-[1.5px] py-2 border-b border-[var(--color-border)]"
          >
            About
          </Link>
          <Link
            href="/work"
            onClick={closeMenu}
            className="text-lg font-medium text-[var(--color-text-primary)] uppercase tracking-[1.5px] py-2 border-b border-[var(--color-border)]"
          >
            Work
          </Link>
          <Link
            href="/services"
            onClick={closeMenu}
            className="text-lg font-medium text-[var(--color-text-primary)] uppercase tracking-[1.5px] py-2 border-b border-[var(--color-border)]"
          >
            Services
          </Link>
          <Link
            href="/articles"
            onClick={closeMenu}
            className="text-lg font-medium text-[var(--color-text-primary)] uppercase tracking-[1.5px] py-2 border-b border-[var(--color-border)]"
          >
            Articles
          </Link>
          <a
            href="/casestudy/cv/mohammed_noushad_cv_ats.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Mohammed_Noushad_CV.pdf"
            onClick={closeMenu}
            className="text-lg font-medium text-[var(--color-text-primary)] uppercase tracking-[1.5px] py-2 border-b border-[var(--color-border)]"
          >
            Download CV
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="btn-primary w-full text-center justify-center mt-4"
          >
            LET&apos;S TALK
          </a>
        </div>
      </nav>
    </>
  );
}
