"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navLinks, siteConfig } from "@/lib/constants";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { NavigationOverlay } from "./navigation-overlay";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <>
      <header className={`fixed w-full top-0 border-b border-border/40 bg-background/60 backdrop-blur-md transition-transform duration-300 ${
        mobileOpen ? "z-[10000]" : "z-50"
      } ${
        scrollDirection === "down" && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      }`}>
        <nav className="mx-auto flex max-w-container-xxlarge items-center justify-between px-page py-6">
          {/* Brand Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Home">
            <Image
              src="/images/components/brand_name.svg"
              alt={siteConfig.name}
              width={140}
              height={24}
              priority
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop: Case Studies Link + Menu Button */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/case-studies"
              className="flex items-center gap-2 text-body-sm font-medium text-foreground-muted"
            >
              Case Studies
              <Image
                src="/images/components/arrow_down_filled.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
                aria-hidden="true"
              />
            </Link>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span className="text-body font-medium text-foreground">
                Menu
              </span>
              <Image
                src="/images/components/menu_icon.svg"
                alt=""
                width={28}
                height={31}
                className="h-8 w-auto"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex items-center gap-2 md:hidden cursor-pointer"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="text-body font-medium text-foreground">
              Menu
            </span>
            <Image
              src="/images/components/menu_icon.svg"
              alt=""
              width={28}
              height={31}
              className="h-8 w-auto"
              aria-hidden="true"
            />
          </button>
        </nav>

      </header>
      <NavigationOverlay isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

