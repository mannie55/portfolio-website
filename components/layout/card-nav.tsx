"use client";

import { useLayoutEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";

import { calComUrl, siteConfig } from "@/lib/constants";

/* ─── Nav data ─────────────────────────────────────────────── */
const NAV_CARDS = [
  {
    label: "Work",
    bgColor: "#1a1a2e",
    textColor: "#ffffff",
    links: [
      { label: "Case Studies", href: "/case-studies", ariaLabel: "View case studies" },
      { label: "About me",     href: "/about",         ariaLabel: "About Nnamdi"     },
    ],
  },
  {
    label: "Services",
    bgColor: "#16213e",
    textColor: "#ffffff",
    links: [
      { label: "Next.js Dev",   href: "/contact", ariaLabel: "Next.js development"   },
      { label: "Webflow Build", href: "/contact", ariaLabel: "Webflow development"   },
      { label: "Figma → Code",  href: "/contact", ariaLabel: "Figma to code service" },
    ],
  },
  {
    label: "Connect",
    bgColor: "#0f3460",
    textColor: "#ffffff",
    links: [
      { label: "Book a call",  href: calComUrl,                                    ariaLabel: "Book a discovery call" },
      { label: "LinkedIn",     href: "https://www.linkedin.com/in/nnamdiogbonna/", ariaLabel: "LinkedIn profile"      },
      { label: "GitHub",       href: "https://github.com/mannie55/",               ariaLabel: "GitHub profile"        },
    ],
  },
];

/* ─── Component ────────────────────────────────────────────── */
export function CardNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const navRef   = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef    = useRef<gsap.core.Timeline | null>(null);

  const getExpandedHeight = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return 260;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const content = navEl.querySelector<HTMLElement>(".cnav-content");
      if (content) {
        const prev = { vis: content.style.visibility, pe: content.style.pointerEvents, pos: content.style.position, h: content.style.height };
        content.style.visibility    = "visible";
        content.style.pointerEvents = "auto";
        content.style.position      = "static";
        content.style.height        = "auto";
        void content.offsetHeight;
        const h = 60 + content.scrollHeight + 16;
        content.style.visibility    = prev.vis;
        content.style.pointerEvents = prev.pe;
        content.style.position      = prev.pos;
        content.style.height        = prev.h;
        return h;
      }
    }
    return 260;
  }, []);

  const buildTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;
    const cards = cardsRef.current.filter(Boolean);
    gsap.set(navEl,  { height: 60, overflow: "hidden" });
    gsap.set(cards,  { y: 50, opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.to(navEl,  { height: getExpandedHeight, duration: 0.4, ease: "power3.out" });
    tl.to(cards,  { y: 0, opacity: 1, duration: 0.4, ease: "power3.out", stagger: 0.08 }, "-=0.1");
    return tl;
  }, [getExpandedHeight]);

  useLayoutEffect(() => {
    const tl = buildTimeline();
    tlRef.current = tl;
    return () => { tl?.kill(); tlRef.current = null; };
  }, [buildTimeline]);

  useLayoutEffect(() => {
    const handleResize = () => {
      const tl = tlRef.current;
      if (!tl) return;
      tl.kill();
      const newTl = buildTimeline();
      if (!newTl) return;
      if (isExpanded) newTl.progress(1);
      tlRef.current = newTl;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded, buildTimeline]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  return (
    /* Floating pill wrapper — centred, above everything */
    <div className="fixed left-1/2 top-8 z-[9999] w-[90%] max-w-3xl -translate-x-1/2">
      <nav
        ref={navRef}
        aria-label="Site navigation"
        style={{ height: 60, overflow: "hidden", willChange: "height" }}
        className={`relative rounded-xl border border-white/10 bg-[#111]/80 shadow-lg backdrop-blur-md`}
      >
        {/* ── Top bar ─────────────────────────────────────── */}
        <div className="absolute inset-x-0 top-0 z-10 flex h-[60px] items-center justify-between px-4">
          {/* Hamburger */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            className="flex h-full flex-col items-center justify-center gap-[6px] cursor-pointer"
          >
            <span
              className="block h-[2px] w-[26px] bg-white transition-transform duration-300 origin-center"
              style={{ transform: hamburgerOpen ? "translateY(4px) rotate(45deg)" : undefined }}
            />
            <span
              className="block h-[2px] w-[26px] bg-white transition-transform duration-300 origin-center"
              style={{ transform: hamburgerOpen ? "translateY(-4px) rotate(-45deg)" : undefined }}
            />
          </button>

          {/* Logo — absolute centre */}
          <Link
            href="/"
            aria-label="Home"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-start gap-[1px]"
          >
            {/* Favicon monogram mark */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-8 w-8 md:h-10 md:w-10">
              <rect width="32" height="32" rx="4" fill="#171A22"/>
              <path d="M13.252 6H21.5L19.5 8.5L15.492 25.6H12.804L7.932 9.556H7.792L8.24 25.6H6V6H8.688L13.588 22.072H13.728L13.252 6Z" fill="white"/>
              <path d="M16.8398 11.1321C16.8398 10.2361 16.9705 9.47078 17.2318 8.83612C17.4932 8.20145 17.8385 7.68812 18.2678 7.29612C18.6972 6.88545 19.2012 6.58678 19.7798 6.40012C20.3772 6.21345 21.0118 6 21.6838 6C22.3558 6 22.9905 6.22278 23.5878 6.42812C24.1852 6.61478 24.6985 6.91345 25.1278 7.32412C25.5758 7.71612 25.9212 8.22945 26.1638 8.86412C26.4252 9.49878 26.5558 10.2548 26.5558 11.1321V21.2681C26.5558 22.1455 26.4252 22.9015 26.1638 23.5361C25.9212 24.1708 25.5758 24.6935 25.1278 25.1041C24.6985 25.4961 24.1852 25.7948 23.5878 26.0001C22.9905 26.1868 22.3558 26.2801 21.6838 26.2801C21.0118 26.2801 20.3772 26.1868 19.7798 26.0001C19.2012 25.8135 18.6972 25.5148 18.2678 25.1041C17.8385 24.6935 17.4932 24.1708 17.2318 23.5361C16.9705 22.9015 16.8398 22.1455 16.8398 21.2681V11.1321ZM19.0798 10.9921V21.4081C19.0798 21.9681 19.1545 22.4348 19.3038 22.8081C19.4532 23.1628 19.6492 23.4521 19.8918 23.6761C20.1345 23.9001 20.4145 24.0681 20.7318 24.1801C21.0678 24.2735 21.3945 24.3201 21.7118 24.3201C22.0478 24.3201 22.3652 24.2735 22.6638 24.1801C22.9812 24.0681 23.2612 23.9001 23.5038 23.6761C23.7465 23.4521 23.9425 23.1628 24.0918 22.8081C24.2412 22.4348 24.3158 21.9681 24.3158 21.4081V10.9921C24.3158 10.4321 24.2412 9.97478 24.0918 9.62012C23.9425 9.24678 23.7465 8.94812 23.5038 8.72412C23.2612 8.48145 22.9812 8.31345 22.6638 8.22012C22.3652 8.12678 22.0478 8.08012 21.7118 8.08012C21.3945 8.08012 21.0678 8.12678 20.7318 8.22012C20.4145 8.31345 20.1345 8.48145 19.8918 8.72412C19.6492 8.94812 19.4532 9.24678 19.3038 9.62012C19.1545 9.97478 19.0798 10.4321 19.0798 10.9921Z" fill="white"/>
            </svg>
            {/* ™ superscript */}
            <span className="text-[9px] font-medium text-white/60 leading-none mt-[3px]">™</span>
          </Link>

          {/* CTA button */}
          <Link
            href={calComUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-text-dark transition-opacity hover:opacity-80"
          >
            Book a call
          </Link>
        </div>

        {/* ── Cards area ──────────────────────────────────── */}
        <div
          className="cnav-content absolute inset-x-0 bottom-0 top-[60px] z-[1] flex flex-col items-stretch gap-3 p-2 pointer-events-none invisible md:flex-row md:items-end"
          aria-hidden={!isExpanded}
          style={isExpanded ? { visibility: "visible", pointerEvents: "auto" } : undefined}
        >
          {NAV_CARDS.map((card, idx) => (
            <div
              key={card.label}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="flex h-full min-w-0 flex-1 flex-col gap-2 rounded-[10px] p-3 md:p-4 md:h-full"
              style={{ backgroundColor: card.bgColor, color: card.textColor }}
            >
              <span className="text-lg font-medium tracking-tight md:text-2xl">{card.label}</span>
              <div className="mt-auto flex flex-col gap-1">
                {card.links.map((lnk) => (
                  <Link
                    key={lnk.label}
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    target={lnk.href.startsWith("http") ? "_blank" : undefined}
                    rel={lnk.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={() => { setIsExpanded(false); setHamburgerOpen(false); tlRef.current?.reverse(); }}
                    className="inline-flex items-center gap-1.5 text-sm opacity-90 transition-opacity hover:opacity-60 md:text-base"
                  >
                    <GoArrowUpRight aria-hidden="true" className="shrink-0" />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
