import React from "react";

interface NavigationOverlayProps {
  isOpen?: boolean;
}

export function NavigationOverlay({ isOpen = false }: NavigationOverlayProps) {
  return (
    <div
      data-testid="navigation-overlay"
      className={`fixed inset-0 w-[100vw] h-[100vh] bg-background z-[9999] overflow-hidden ${
        isOpen ? "block" : "hidden"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Navigation overlay container - links and animations to be added later */}
    </div>
  );
}
