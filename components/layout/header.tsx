"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks, siteConfig } from "@/lib/constants";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { NavigationOverlay } from "./navigation-overlay";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.1 }
      );
    },
    { scope: navRef }
  );

  return (
    <>
      <header className={`fixed w-full top-0 bg-background/60 backdrop-blur-md transition-transform duration-300 ${
        mobileOpen ? "z-[10000]" : "z-50"
      } ${
        scrollDirection === "down" && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      }`}>
        <nav ref={navRef} className="mx-auto flex max-w-container-xxlarge items-center justify-between px-page xl:px-0 py-2 opacity-0">
          {/* Brand Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Home">
            <Image
              src="/images/components/brand_name.svg"
              alt={siteConfig.name}
              width={150}
              height={32}
              priority
              className="h-4 md:h-7 w-auto"
            />
          </Link>

          {/* Desktop Menu Button */}
          <div className="hidden items-center gap-6 md:flex">
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <div className={`navbar-toggle-icon ${mobileOpen ? "active" : ""}`} aria-hidden="true">
                <svg viewBox="0 0 100 100" width="48" height="48" className="h-12 w-auto">
                  <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                  <path className="line middle" d="m 30,50 h 40" />
                  <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                </svg>
              </div>
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
            <div className={`navbar-toggle-icon ${mobileOpen ? "active" : ""}`} aria-hidden="true">
              <svg viewBox="0 0 100 100" width="48" height="48" className="h-12 w-auto">
                <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                <path className="line middle" d="m 30,50 h 40" />
                <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
              </svg>
            </div>
          </button>
        </nav>
 
      </header>
      <NavigationOverlay isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

