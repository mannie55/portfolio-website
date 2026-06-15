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
    
    expect(overlay).toHaveClass("flex");
    expect(overlay).not.toHaveClass("hidden");
    expect(overlay).toHaveAttribute("aria-hidden", "false");
  });

  test("has fixed positioning, covers the entire viewport, and has top padding", () => {
    render(<NavigationOverlay isOpen={true} />);
    const overlay = screen.getByTestId("navigation-overlay");
    
    expect(overlay).toHaveClass("fixed");
    expect(overlay).toHaveClass("inset-0");
    expect(overlay).toHaveClass("w-[100vw]");
    expect(overlay).toHaveClass("h-[100vh]");
    expect(overlay).toHaveClass("pt-[7.5rem]");
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

  test("renders all menu links inside a centered 1280px container", () => {
    render(<NavigationOverlay isOpen={true} />);
    
    // Check that menu items are rendered
    expect(screen.getByText("HOME")).toBeInTheDocument();
    expect(screen.getByText("ABOUT ME")).toBeInTheDocument();
    expect(screen.getByText("CASE STUDIES")).toBeInTheDocument();
    expect(screen.getByText("CONTACT")).toBeInTheDocument();

    // Check that the container class has the exact requested layout and background
    const container = screen.getByText("HOME").closest(".max-w-\\[1280px\\]");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("mx-auto");
    expect(container).toHaveClass("w-full");
    expect(container).toHaveClass("h-fit");
    expect(container).toHaveClass("px-8");
    expect(container).toHaveClass("py-16");
    expect(container).toHaveClass("bg-surface");
    expect(container).toHaveClass("rounded-[20px]");
  });
});
