import { render, screen } from "@testing-library/react";
import { NavigationOverlay } from "./navigation-overlay";
import { expect, test, describe } from "vitest";

describe("NavigationOverlay Component", () => {
  test("is hidden by default", () => {
    render(<NavigationOverlay />);
    const overlay = screen.getByTestId("navigation-overlay");
    
    expect(overlay).toHaveClass("hidden");
    expect(overlay).not.toHaveClass("block");
    expect(overlay).toHaveAttribute("aria-hidden", "true");
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
});
