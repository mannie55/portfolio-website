import { render, screen, fireEvent } from "@testing-library/react";
import { NavigationOverlay } from "./navigation-overlay";
import { expect, test, describe, vi, beforeEach } from "vitest";

describe("NavigationOverlay Component", () => {
  beforeEach(() => {
    // Reset body style before each test
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  });

  test("is hidden by default", () => {
    render(<NavigationOverlay />);
    const overlay = screen.getByTestId("navigation-overlay");
    
    expect(overlay).toHaveClass("hidden");
    expect(overlay).not.toHaveClass("block");
    expect(overlay).toHaveAttribute("aria-hidden", "true");
    expect(document.body.style.overflow).toBe("");
    expect(document.body.style.paddingRight).toBe("");
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

  test("disables body scroll when open, applies padding-right if scrollbar is present, and restores them when closed or unmounted", () => {
    // Mock window.innerWidth and document.documentElement.clientWidth to simulate a 16px scrollbar
    const originalInnerWidth = window.innerWidth;
    const originalClientWidth = document.documentElement.clientWidth;

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(document.documentElement, "clientWidth", {
      writable: true,
      configurable: true,
      value: 1008,
    });

    const { rerender, unmount } = render(<NavigationOverlay isOpen={true} />);
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.body.style.paddingRight).toBe("16px");

    rerender(<NavigationOverlay isOpen={false} />);
    expect(document.body.style.overflow).toBe("");
    expect(document.body.style.paddingRight).toBe("");

    rerender(<NavigationOverlay isOpen={true} />);
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.body.style.paddingRight).toBe("16px");

    unmount();
    expect(document.body.style.overflow).toBe("");
    expect(document.body.style.paddingRight).toBe("");

    // Restore original window/document values
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
    Object.defineProperty(document.documentElement, "clientWidth", {
      writable: true,
      configurable: true,
      value: originalClientWidth,
    });
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
    expect(container).toHaveClass("py-8");
    expect(container).toHaveClass("bg-surface");
    expect(container).toHaveClass("rounded-[20px]");
  });

  test("menu links have correct href attributes and trigger onClose when clicked", () => {
    const handleClose = vi.fn();
    render(<NavigationOverlay isOpen={true} onClose={handleClose} />);
    
    const homeLink = screen.getByText("HOME");
    expect(homeLink).toHaveAttribute("href", "/");
    
    const aboutLink = screen.getByText("ABOUT ME");
    expect(aboutLink).toHaveAttribute("href", "/about");

    const caseLink = screen.getByText("CASE STUDIES");
    expect(caseLink).toHaveAttribute("href", "/case-studies");

    const contactLink = screen.getByText("CONTACT");
    expect(contactLink).toHaveAttribute("href", "/contact");

    // Click a link and verify onClose is triggered
    fireEvent.click(homeLink);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
