import { render, screen } from "@testing-library/react";
import { CaseStudyDetailsContent } from "./case-study-details-content";
import { expect, test, describe, vi } from "vitest";
import type { CaseStudy, CaseStudySummary } from "@/types/case-study";

// Mock GSAP to prevent actual animation runs or scroll trigger setup errors during testing
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
  ScrollTrigger: {
    refresh: vi.fn(),
  },
}));

const mockStudyStandard: CaseStudy = {
  slug: "project-standard",
  title: "Standard Project Title",
  summary: "Standard summary of the case study.",
  coverImage: "/images/case-studies/standard-cover.png",
  role: "Lead Developer",
  client: "Standard Client",
  tools: ["React", "CSS"],
  publishedAt: "2026-06-19T00:00:00.000Z",
  featured: false,
  body: [
    {
      type: "paragraph",
      text: "This is a paragraph of the case study body.",
    },
    {
      type: "heading",
      level: 2,
      text: "Section Heading 2",
    },
  ],
};

const mockStudyHighImpact: CaseStudy = {
  slug: "project-high-impact",
  title: "High Impact Project Title",
  summary: "High impact summary of the case study.",
  coverImage: "/images/case-studies/high-impact-cover.png",
  role: "Product Designer",
  client: "High Impact Client",
  projectName: "HighImpactName",
  tools: ["Next.js", "Tailwind"],
  publishedAt: "2026-06-15T00:00:00.000Z",
  featured: true,
  metrics: [
    { value: "+150%", description: "Increase in conversion rate" },
  ],
  body: [
    {
      type: "paragraph",
      text: "This is a paragraph of the high impact body.",
    },
  ],
};

const mockPrevStudy: CaseStudySummary = {
  slug: "prev-slug",
  title: "Previous Project",
  summary: "Previous summary",
  coverImage: "/images/case-studies/prev-cover.png",
  role: "Developer",
  client: "Prev Client",
  tools: ["HTML"],
  publishedAt: "2026-05-01T00:00:00.000Z",
  featured: false,
};

const mockNextStudy: CaseStudySummary = {
  slug: "next-slug",
  title: "Next Project",
  summary: "Next summary",
  coverImage: "/images/case-studies/next-cover.png",
  role: "Developer",
  client: "Next Client",
  tools: ["JS"],
  publishedAt: "2026-07-01T00:00:00.000Z",
  featured: false,
};

describe("CaseStudyDetailsContent Component", () => {
  test("renders standard header when metrics are not present", () => {
    render(
      <CaseStudyDetailsContent
        study={mockStudyStandard}
        previous={null}
        next={null}
      />
    );

    // Standard header title
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Standard Project Title");
    // Client detail
    expect(screen.getByText("Standard Client")).toBeInTheDocument();
    // Role detail
    expect(screen.getByText("Lead Developer")).toBeInTheDocument();
  });

  test("renders high impact header and metrics when present", () => {
    render(
      <CaseStudyDetailsContent
        study={mockStudyHighImpact}
        previous={null}
        next={null}
      />
    );

    // High impact header client/project name
    expect(screen.getByText("HighImpactName")).toBeInTheDocument();
    // High impact title
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("High Impact Project Title");
    // Metrics
    expect(screen.getByText("+150%")).toBeInTheDocument();
    expect(screen.getByText("Increase in conversion rate")).toBeInTheDocument();
  });

  test("renders body blocks", () => {
    render(
      <CaseStudyDetailsContent
        study={mockStudyStandard}
        previous={null}
        next={null}
      />
    );

    // Paragraph body content
    expect(screen.getByText("This is a paragraph of the case study body.")).toBeInTheDocument();
    // Heading 2 block
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Section Heading 2");
  });

  test("renders case study navigation correctly", () => {
    render(
      <CaseStudyDetailsContent
        study={mockStudyStandard}
        previous={mockPrevStudy}
        next={mockNextStudy}
      />
    );

    expect(screen.getByText("Previous: Previous Project")).toBeInTheDocument();
    expect(screen.getByText("Next: Next Project")).toBeInTheDocument();
    expect(screen.getByText("All case studies")).toBeInTheDocument();
  });

  test("contains case-study-reveal target classes on header, body blocks, and navigation", () => {
    const { container } = render(
      <CaseStudyDetailsContent
        study={mockStudyStandard}
        previous={mockPrevStudy}
        next={mockNextStudy}
      />
    );

    // The standard header has case-study-reveal class
    const headerElement = container.querySelector("header");
    expect(headerElement).toHaveClass("case-study-reveal");

    // The body contains blocks wrapped in case-study-reveal
    const bodyReveals = container.querySelectorAll("article .case-study-reveal");
    expect(bodyReveals.length).toBe(2);

    // The navigation container has case-study-reveal class
    const navElement = container.querySelector("nav");
    expect(navElement).toHaveClass("case-study-reveal");
  });

  test("contains case-study-reveal target classes on high-impact header sub-sections", () => {
    const { container } = render(
      <CaseStudyDetailsContent
        study={mockStudyHighImpact}
        previous={null}
        next={null}
      />
    );

    // In high impact header, it's not the header wrapper itself but individual sections
    const headerElement = container.querySelector("header");
    expect(headerElement).not.toHaveClass("case-study-reveal");

    const headerReveals = container.querySelectorAll("header .case-study-reveal");
    // Expected: Breadcrumbs (1), main title (2), overview (3), previews section (4)
    expect(headerReveals.length).toBe(4);
  });
});
