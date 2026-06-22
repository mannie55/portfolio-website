import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./header";
import { expect, test, describe, vi } from "vitest";
import { siteConfig } from "@/lib/constants";

// Mock next/navigation
const mockUsePathname = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

// Mock Next.js Image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe("Header Component with NavigationOverlay", () => {
  test("renders the header and navigation overlay (hidden by default)", () => {
    mockUsePathname.mockReturnValue("/");
    render(<Header />);

    // Brand logo should be rendered
    expect(screen.getByAltText(new RegExp(siteConfig.name, "i"))).toBeInTheDocument();

    // Navigation overlay should be hidden by default
    const overlay = screen.getByTestId("navigation-overlay");
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("hidden");
  });

  test("toggles the navigation overlay when the menu button is clicked", () => {
    mockUsePathname.mockReturnValue("/");
    render(<Header />);

    const overlay = screen.getByTestId("navigation-overlay");
    expect(overlay).toHaveClass("hidden");

    // Click desktop menu button
    // The desktop menu button is the first button in the document, we can select it by role
    const menuButtons = screen.getAllByRole("button", { name: /open menu/i });
    expect(menuButtons.length).toBeGreaterThan(0);

    // Click the first menu button (desktop one)
    fireEvent.click(menuButtons[0]);

    // Overlay should now be visible
    expect(overlay).toHaveClass("flex");
    expect(overlay).not.toHaveClass("hidden");

    // Click it again to close
    const closeButtons = screen.getAllByRole("button", { name: /close menu/i });
    fireEvent.click(closeButtons[0]);

    // Overlay should be hidden again
    expect(overlay).toHaveClass("hidden");
  });
});
