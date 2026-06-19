import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface NavigationOverlayProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const menuItems = [
  { id: "home", label: "HOME", href: "/" },
  { id: "about-me", label: "ABOUT ME", href: "/about" },
  { id: "case-studies", label: "CASE STUDIES", href: "/case-studies" },
  { id: "contact", label: "CONTACT", href: "/contact" },
];

export const MenuDropdown = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  return (
    <nav
      aria-label="Primary"
      className="flex flex-col justify-center bg-transparent"
    >
      <ul className="flex w-full flex-col">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="border-b border-border-lighter py-6 navigation-overlay-item"
          >
            <Link
              href={item.href}
              onClick={onLinkClick}
              className="inline-flex text-nav-item font-bold text-white leading-none"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export function NavigationOverlay({ isOpen = false, onClose }: NavigationOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && circleRef.current) {
        const getVpdrScale = () => {
          if (!document.documentElement || !circleRef.current) return 0;
          const html = document.documentElement;
          const circleWidth = circleRef.current.clientWidth || 80;
          const vph = Math.pow(html.offsetHeight, 2);
          const vpw = Math.pow(html.offsetWidth, 2);
          const vpd = Math.sqrt(vph + vpw);
          return (vpd * 2) / circleWidth;
        };
        gsap.to(circleRef.current, { scale: getVpdrScale(), duration: 0.1, ease: "expo.out" });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useGSAP(
    () => {
      // Skip running on initial mount when it's closed
      if (isFirstRender.current) {
        isFirstRender.current = false;
        if (!isOpen) {
          gsap.set(containerRef.current, { display: "none" });
          return;
        }
      }

      const getVpdrScale = () => {
        if (typeof window === "undefined" || !document.documentElement || !circleRef.current) return 0;
        const html = document.documentElement;
        const circleWidth = circleRef.current.clientWidth || 80;
        const vph = Math.pow(html.offsetHeight, 2);
        const vpw = Math.pow(html.offsetWidth, 2);
        const vpd = Math.sqrt(vph + vpw);
        return (vpd * 2) / circleWidth;
      };

      if (isOpen) {
        // Lock body scroll and set padding-right to body and header to prevent layout shifts
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollbarWidth > 0) {
          document.body.style.paddingRight = `${scrollbarWidth}px`;
          const header = document.querySelector("header");
          if (header) {
            header.style.paddingRight = `${scrollbarWidth}px`;
          }
        }
        document.body.style.overflow = "hidden";

        // OPENING ANIMATION
        // Make the container itself transparent so the expanding circle is visible
        gsap.set(containerRef.current, { display: "flex", backgroundColor: "transparent" });
        
        const tl = gsap.timeline();
        
        // Set initial states
        tl.set(circleRef.current, { scale: 0 });
        tl.set(contentRef.current, { opacity: 0, y: 30 });
        tl.set(".navigation-overlay-item", { y: 25, opacity: 0 });
        
        // Scale up the circle background (punchy initial start, smooth deceleration)
        tl.to(circleRef.current, {
          scale: getVpdrScale(),
          duration: 0.8,
          ease: "power3.out",
        });

        // Animate content container fade in and items stagger
        tl.to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          0.2
        );

        tl.fromTo(
          ".navigation-overlay-item",
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
          },
          0.3
        );
      } else {
        // Release body scroll lock and restore padding immediately on close
        document.body.style.paddingRight = "";
        document.body.style.overflow = "";
        const header = document.querySelector("header");
        if (header) {
          header.style.paddingRight = "";
        }

        // CLOSING ANIMATION
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(containerRef.current, { display: "none", clearProps: "backgroundColor" });
          }
        });

        // Stagger exit items
        tl.fromTo(
          ".navigation-overlay-item",
          { y: 0, opacity: 1 },
          {
            y: 25,
            opacity: 0,
            duration: 0.3,
            stagger: -0.04,
            ease: "power2.in",
          }
        );

        // Slide/fade out the content container
        tl.to(
          contentRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.3,
            ease: "power2.in",
          },
          0.1
        );

        // Scale down the circle
        tl.to(
          circleRef.current,
          {
            scale: 0,
            duration: 0.6,
            ease: "power3.inOut",
          },
          0.2
        );
      }

      // Cleanup function to restore styles on unmount
      return () => {
        document.body.style.paddingRight = "";
        document.body.style.overflow = "";
        const header = document.querySelector("header");
        if (header) {
          header.style.paddingRight = "";
        }
      };
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      data-testid="navigation-overlay"
      className={`fixed inset-0 w-[100vw] h-[100vh] bg-background z-[9999] overflow-hidden flex flex-col pt-[7.5rem] px-6 md:px-10 lg:px-12 ${
        isOpen ? "flex" : "hidden"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Background Circle */}
      <div
        ref={circleRef}
        id="bg-circle"
        className="fixed top-6 right-page rounded-full w-20 h-20 bg-background z-0 pointer-events-none scale-0 origin-center"
      />

      <button
        type="button"
        data-testid="navigation-overlay-close"
        className="absolute top-6 right-page text-body-sm font-medium text-foreground cursor-pointer z-10"
        onClick={onClose}
        aria-label="Close menu"
      >
        Close
      </button>
      <div
        ref={contentRef}
        className="mx-auto w-full max-w-[1280px] h-fit px-8 py-8 bg-surface rounded-[20px] z-10 relative"
      >
        <MenuDropdown onLinkClick={onClose} />
      </div>
    </div>
  );
}

