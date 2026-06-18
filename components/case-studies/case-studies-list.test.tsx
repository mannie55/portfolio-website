import { render, screen } from "@testing-library/react";
import { CaseStudiesList } from "./case-studies-list";
import { expect, test, describe, vi } from "vitest";
import type { CaseStudySummary } from "@/types/case-study";

// Mock GSAP to prevent actual animation runs or scroll trigger setup errors during testing
vi.mock("gsap", () => {
  const gsapMock = {
    registerPlugin: vi.fn(),
    timeline: vi.fn(() => ({
      fromTo: vi.fn().mockReturnThis(),
      set: vi.fn().mockReturnThis(),
    })),
    fromTo: vi.fn(),
    set: vi.fn(),
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
  ScrollTrigger: {
    refresh: vi.fn(),
  },
}));

const mockStudies: CaseStudySummary[] = [
  {
    slug: "project-alpha",
    title: "Project Alpha",
    summary: "First project description.",
    coverImage: "/images/case-studies/alpha.png",
    role: "Lead Developer",
    client: "Client A",
    tools: ["React", "GSAP", "Tailwind"],
    publishedAt: "2026-06-10T00:00:00.000Z",
    featured: true,
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    summary: "Second project description.",
    coverImage: "/images/case-studies/beta.png",
    role: "UI Designer",
    client: "Client B",
    tools: ["Figma", "CSS"],
    publishedAt: "2026-06-05T00:00:00.000Z",
    featured: false,
  },
];

describe("CaseStudiesList Component", () => {
  test("renders the section heading title and description", () => {
    render(<CaseStudiesList studies={mockStudies} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Case Studies");
    expect(
      screen.getByText("A selection of projects I've worked on — from problem to approach to outcome.")
    ).toBeInTheDocument();
  });

  test("renders the grid with case study cards", () => {
    render(<CaseStudiesList studies={mockStudies} />);
    expect(screen.getByText("Project Alpha")).toBeInTheDocument();
    expect(screen.getByText("Project Beta")).toBeInTheDocument();
    expect(screen.getByText("First project description.")).toBeInTheDocument();
    expect(screen.getByText("Second project description.")).toBeInTheDocument();
  });

  test("contains the animation target classes", () => {
    const { container } = render(<CaseStudiesList studies={mockStudies} />);
    
    // Check that the heading wrapper has the correct animation class
    const headingWrapper = container.querySelector(".case-studies-heading");
    expect(headingWrapper).toBeInTheDocument();

    // Check that the card links have the case-study-card class
    const cards = container.querySelectorAll(".case-study-card");
    expect(cards.length).toBe(2);

    // Check that card content divs have the case-study-card-content class
    const contents = container.querySelectorAll(".case-study-card-content");
    expect(contents.length).toBe(2);
  });
});
