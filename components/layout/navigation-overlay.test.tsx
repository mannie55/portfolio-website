import { render, screen, fireEvent } from "@testing-library/react";
import { NavigationOverlay } from "./navigation-overlay";
import { expect, test, describe, vi, beforeEach } from "vitest";

describe("NavigationOverlay Component", () => {
  beforeEach(() => {
    // Reset body style before each test
    document.body.style.overflow = "";
  });

  test("is hidden by default", () => {
    render(<NavigationOverlay />);
    const overlay = screen.getByTestId("navigation-overlay");
    
    expect(overlay).toHaveClass("hidden");
    expect(overlay).not.toHaveClass("block");
    expect(overlay).toHaveAttribute("aria-hidden", "true");
    expect(document.body.style.overflow).toBe("");
  });

  test("is visible when isOpen is true", () => {
    render(<NavigationOverlay isOpen={true} />);
    const overlay = screen.getByTestId("navigation-overlay");
    
    expect(overlay).toHaveClass("block");
    expect(overlay).not.toHaveClass("hidden");
    expect(overlay).toHaveAttribute("aria-hidden", "false");
  });

  test("has fixed positioning and covers the entire viewport", () => {
    render(<NavigationOverlay isOpen={true} />);
    const overlay = screen.getByTestId("navigation-overlay");
    
    expect(overlay).toHaveClass("fixed");
    expect(overlay).toHaveClass("inset-0");
    expect(overlay).toHaveClass("w-[100vw]");
    expect(overlay).toHaveClass("h-[100vh]");
  });

  test("has high z-index and uses website background color to prevent content underneath from being visible", () => {
    render(<NavigationOverlay isOpen={true} />);
    const overlay = screen.getByTestId("navigation-overlay");
    
    expect(overlay).toHaveClass("bg-background");
    expect(overlay).toHaveClass("z-[9999]");
  });

  test("calls onClose when the close button inside overlay is clicked", () => {
    const handleClose = vi.fn();
    render(<NavigationOverlay isOpen={true} onClose={handleClose} />);
    
    const closeBtn = screen.getByTestId("navigation-overlay-close");
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("disables body scroll when open and restores it when closed or unmounted", () => {
    const { rerender, unmount } = render(<NavigationOverlay isOpen={true} />);
    expect(document.body.style.overflow).toBe("hidden");

    rerender(<NavigationOverlay isOpen={false} />);
    expect(document.body.style.overflow).toBe("");

    rerender(<NavigationOverlay isOpen={true} />);
    expect(document.body.style.overflow).toBe("hidden");

    unmount();
    expect(document.body.style.overflow).toBe("");
  });
});

