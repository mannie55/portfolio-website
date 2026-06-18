import { render, screen } from "@testing-library/react";
import { GlobalTextReveal } from "./global-text-reveal";
import { expect, test, describe, vi, beforeEach, afterEach } from "vitest";

// Mock next/navigation
const mockUsePathname = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

describe("GlobalTextReveal Component", () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue("/");
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
    document.body.innerHTML = "";
  });

  test("automatically splits h2 text into character spans", () => {
    // Set up document body with h2 elements
    document.body.innerHTML = `
      <div>
        <h2>Test Heading</h2>
        <h2 class="no-reveal">No Reveal Heading</h2>
      </div>
    `;

    render(<GlobalTextReveal />);

    // Fast-forward the transition delay timer
    vi.advanceTimersByTime(200);

    // Verify splitting occurred on the regular h2
    const animatedHeading = document.querySelector("h2:not(.no-reveal)");
    expect(animatedHeading).toBeTruthy();
    expect(animatedHeading?.querySelectorAll(".reveal-char").length).toBe(11); // "Test Heading" = 11 chars
    expect(animatedHeading?.querySelector(".reveal-word")).toBeTruthy();

    // Verify splitting did NOT occur on the no-reveal h2
    const staticHeading = document.querySelector("h2.no-reveal");
    expect(staticHeading).toBeTruthy();
    expect(staticHeading?.querySelectorAll(".reveal-char").length).toBe(0);
    expect(staticHeading?.textContent).toBe("No Reveal Heading");
  });

  test("restores the original DOM structure on unmount", () => {
    document.body.innerHTML = `
      <div>
        <h2>Original Text</h2>
      </div>
    `;

    const { unmount } = render(<GlobalTextReveal />);

    // Fast-forward split timer
    vi.advanceTimersByTime(200);

    const heading = document.querySelector("h2");
    expect(heading?.querySelectorAll(".reveal-char").length).toBe(12); // "Original Text" = 12 chars

    // Unmount component
    unmount();

    // Verify DOM restoration
    expect(heading?.querySelectorAll(".reveal-char").length).toBe(0);
    expect(heading?.textContent).toBe("Original Text");
  });
});
