"use client";

import Link from "next/link";
import { useState } from "react";

import { navLinks, siteConfig } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-foreground">
          {siteConfig.name}
        </Link>

        <ul className="hidden gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-muted hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-muted hover:bg-surface-hover md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {mobileOpen ? (
        <ul
          id="mobile-nav"
          className="border-t border-border px-6 py-4 md:hidden"
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-2 text-sm text-muted hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
