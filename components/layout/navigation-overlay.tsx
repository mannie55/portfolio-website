import Link from "next/link";
import React, { useEffect } from "react";

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
            className="border-b border-border-lighter py-8"
          >
            <Link
              href={item.href}
              onClick={onLinkClick}
              className="inline-flex text-h2 font-bold text-white leading-none"
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
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      data-testid="navigation-overlay"
      className={`fixed inset-0 w-[100vw] h-[100vh] bg-background z-[9999] overflow-hidden flex flex-col pt-[7.5rem] ${
        isOpen ? "flex" : "hidden"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        data-testid="navigation-overlay-close"
        className="absolute top-6 right-page text-body-sm font-medium text-foreground cursor-pointer z-[10001]"
        onClick={onClose}
        aria-label="Close menu"
      >
        Close
      </button>
      <div className="mx-auto w-full max-w-[1280px] h-fit px-8 py-16 bg-surface rounded-[20px]">
        <MenuDropdown onLinkClick={onClose} />
      </div>
    </div>
  );
}

