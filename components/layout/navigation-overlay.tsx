import React, { useEffect } from "react";

interface NavigationOverlayProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const menuItems = [
  { id: "home", label: "HOME", href: "#home" },
  { id: "about-me", label: "ABOUT ME", href: "#about-me" },
  { id: "case-studies", label: "CASE STUDIES", href: "#case-studies" },
  { id: "contact", label: "CONTACT", href: "#contact" },
];

export const MenuDropdown = () => {
  return (
    <nav
      aria-label="Primary"
      className="flex h-full flex-col justify-center bg-transparent"
    >
      <ul className="flex w-full flex-col">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="border-b border-border-lighter py-8"
          >
            <a
              href={item.href}
              className="inline-flex text-h2 font-bold text-white leading-none"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export function NavigationOverlay({ isOpen = false, onClose }: NavigationOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      data-testid="navigation-overlay"
      className={`fixed inset-0 w-[100vw] h-[100vh] bg-background z-[9999] overflow-hidden ${
        isOpen ? "block" : "hidden"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        data-testid="navigation-overlay-close"
        className="absolute top-6 right-page text-body-sm font-medium text-foreground hover:text-foreground-muted transition-colors cursor-pointer z-[10001]"
        onClick={onClose}
        aria-label="Close menu"
      >
        Close
      </button>
      <div className="mx-auto w-full max-w-[1280px] h-full px-8 bg-surface">
        <MenuDropdown />
      </div>
    </div>
  );
}

