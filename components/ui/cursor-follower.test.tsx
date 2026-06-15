import { render, screen, fireEvent } from "@testing-library/react";
import { CursorFollower } from "./cursor-follower";
import { expect, test, describe, vi, beforeEach } from "vitest";

describe("CursorFollower Component", () => {
  beforeEach(() => {
    // Mock window.matchMedia to return true for hover capabilities
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  test("is hidden initially", () => {
    render(<CursorFollower />);
    expect(screen.queryByTestId("cursor-follower")).not.toBeInTheDocument();
  });

  test("appears and updates position on mousemove", () => {
    render(<CursorFollower />);
    
    // Simulate mousemove
    fireEvent.mouseMove(window, { clientX: 100, clientY: 200 });

    const follower = screen.getByTestId("cursor-follower");
    expect(follower).toBeInTheDocument();
    
    // Assert style/transform matches positioning
    expect(follower.style.transform).toContain("100px");
    expect(follower.style.transform).toContain("200px");
  });

  test("hides on mouseleave", () => {
    render(<CursorFollower />);
    
    // Show first
    fireEvent.mouseMove(window, { clientX: 100, clientY: 200 });
    expect(screen.getByTestId("cursor-follower")).toBeInTheDocument();

    // Leave
    fireEvent.mouseLeave(document);
    expect(screen.queryByTestId("cursor-follower")).not.toBeInTheDocument();
  });
});
