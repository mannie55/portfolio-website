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
        <nav className="w-full">
          <ul className="flex flex-col w-full">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="border-b border-border last:border-b-0">
                <Link
                  href={href}
                  className="block py-8 text-center text-h2 font-heading uppercase text-white hover:text-accent transition-colors"
                  onClick={onClose}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
