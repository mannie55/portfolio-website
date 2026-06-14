"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuDropdown({ isOpen, onClose }: MenuDropdownProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      data-testid="menu-overlay"
    >
      <div
        ref={cardRef}
        className={`w-full max-w-[1280px] mx-page bg-surface border border-border rounded-[20px] overflow-y-auto max-h-[calc(100vh-4rem)] shadow-2xl transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <nav aria-label="Primary" className="relative flex flex-col items-start w-full p-6">
          <ul className="relative flex w-full flex-col items-start self-stretch">
            {navLinks.map(({ href, label }, index) => {
              const displayLabel = label.toUpperCase() === "ABOUT" ? "ABOUT ME" : label.toUpperCase();

              return (
                <li
                  key={href}
                  className={`relative flex w-full items-center gap-2.5 self-stretch border-b border-border-lighter px-0 py-8 [border-bottom-style:solid] ${
                    index === 0
                      ? "mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] flex-[0_0_auto]"
                      : ""
                  } ${
                    index > 0 && index < navLinks.length - 1
                      ? "ml-[-1.00px] mr-[-1.00px] flex-[0_0_auto]"
                      : ""
                  } ${
                    index === navLinks.length - 1
                      ? "mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] flex-[0_0_auto]"
                      : ""
                  }`}
                >
                  <Link
                    href={href}
                    className="relative flex w-fit items-center text-h2 font-heading font-medium tracking-[0.02em] text-white hover:text-accent transition-colors focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    onClick={onClose}
                  >
                    <span className="mt-[-0.50px]">{displayLabel}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
