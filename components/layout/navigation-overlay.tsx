import React, { useEffect } from "react";

interface NavigationOverlayProps {
  isOpen?: boolean;
  onClose?: () => void;
}

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
        className="absolute top-6 right-page text-body-sm font-medium text-foreground hover:text-foreground-muted transition-colors cursor-pointer"
        onClick={onClose}
        aria-label="Close menu"
      >
        Close
      </button>
      {/* Navigation overlay container - links and animations to be added later */}
    </div>
  );
}

