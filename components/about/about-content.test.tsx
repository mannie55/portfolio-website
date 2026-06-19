import { render, screen } from "@testing-library/react";
import { AboutContent } from "./about-content";
import { expect, test, describe, vi } from "vitest";

// Mock the PillButton component
vi.mock("@/components/ui/pill-button", () => ({
  PillButton: ({ label, href }: { label: string; href: string }) => (
    <a href={href}>{label}</a>
  ),
}));

// Mock GSAP to avoid ScrollTrigger initialization errors in JSDOM
vi.mock("gsap", () => {
  const gsapMock = {
    registerPlugin: vi.fn(),
    fromTo: vi.fn(),
    utils: {
      toArray: vi.fn((selector) => {
        if (typeof document !== "undefined") {
          return Array.from(document.querySelectorAll(selector));
        }
        return [];
      }),
    },
  };
  return {
    default: gsapMock,
    ...gsapMock,
  };
});

vi.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: {},
}));

describe("AboutContent Component", () => {
  test("renders all child sections and button", () => {
    render(<AboutContent />);

    // Check that intro is rendered
    expect(screen.getByText(/HI I'M NNAMDI/i)).toBeInTheDocument();

    // Check that Skills and Tools header is rendered
    expect(screen.getByText(/Skills & tools/i)).toBeInTheDocument();

    // Check that Webflow is in the document
    expect(screen.getByText("Webflow")).toBeInTheDocument();

    // Check that How I Work (Approach) section is rendered
    expect(screen.getByText("How I Work")).toBeInTheDocument();

    // Check that Design Thinking, Problem Development, Precision Execution are rendered
    expect(screen.getByText("Design Thinking")).toBeInTheDocument();

    // Check that PillButton is rendered
    const reachOutLink = screen.getByRole("link", { name: /Reach out/i });
    expect(reachOutLink).toBeInTheDocument();
    expect(reachOutLink).toHaveAttribute("href", "/contact");
  });

  test("adds the about-reveal animation class to sections", () => {
    const { container } = render(<AboutContent />);
    const reveals = container.querySelectorAll(".about-reveal");
    
    // We expect 5 .about-reveal elements:
    // 1. Quote Section (in Bio)
    // 2. Intro & Bio Section (in Bio)
    // 3. Skills Column wrapper
    // 4. Approach Column wrapper
    // 5. Reach out Button wrapper
    expect(reveals.length).toBe(5);
  });
});
