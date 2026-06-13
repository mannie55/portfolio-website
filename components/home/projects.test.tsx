import { render, screen } from "@testing-library/react";
import { Projects } from "./projects";
import { expect, test, describe } from "vitest";
import type { CaseStudySummary } from "@/types/case-study";

const mockStudies: CaseStudySummary[] = [
  {
    slug: "test-project-1",
    title: "Test Project One",
    summary: "This is a summary of the first test project.",
    coverImage: "/images/case-studies/test1.png",
    role: "Designer",
    client: "Client One",
    tools: ["React", "CSS"],
    publishedAt: "2026-06-01T00:00:00.000Z",
    featured: true,
  },
];

describe("Projects Component", () => {
  test("renders the PROJECTS heading", () => {
    render(<Projects studies={mockStudies} />);
    expect(screen.getByRole("heading", { name: /PROJECTS/i })).toBeInTheDocument();
  });

  test("renders the project card details", () => {
    render(<Projects studies={mockStudies} />);
    expect(screen.getByText("Test Project One")).toBeInTheDocument();
    expect(screen.getByText("This is a summary of the first test project.")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
  });

  test("renders View more and View Project links", () => {
    render(<Projects studies={mockStudies} />);
    
    // View more link
    const viewMoreLink = screen.getByRole("link", { name: /View more/i });
    expect(viewMoreLink).toHaveAttribute("href", "/case-studies");

    // View Project link
    const viewProjectLink = screen.getByRole("link", { name: /View Project/i });
    expect(viewProjectLink).toHaveAttribute("href", "/case-studies/test-project-1");
  });
});
