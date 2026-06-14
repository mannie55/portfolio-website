import { render, screen } from "@testing-library/react";
import AboutPage from "./page";
import { expect, test, describe, vi } from "vitest";

// Mock the button component
vi.mock("@/components/ui/button", () => ({
  Button: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("AboutPage", () => {
  test("renders Bio, Skills, and Approach sections", () => {
    render(<AboutPage />);

    // Check that intro is rendered
    expect(screen.getByText(/HI I'M NNAMDI/i)).toBeInTheDocument();

    // Check that Skills and Tools header is rendered
    expect(screen.getByText(/Skills & tools/i)).toBeInTheDocument();

    // Check that Webflow and CRO are in the document
    expect(screen.getByText("Webflow")).toBeInTheDocument();
    expect(screen.getByText("Conversion-Focused Design (CRO)")).toBeInTheDocument();

    // Check that How I Work (Approach) section is rendered
    expect(screen.getByText("How I Work")).toBeInTheDocument();

    // Check that Design Thinking, Problem Development, Precision Execution are rendered
    expect(screen.getByText("Design Thinking")).toBeInTheDocument();
    expect(screen.getByText("Problem Development")).toBeInTheDocument();
    expect(screen.getByText("Precision Execution")).toBeInTheDocument();

    // Check that traditional job roles/companies/dates are NOT rendered
    expect(screen.queryByText(/Senior Frontend Developer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Full-Stack Developer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Junior Developer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Tech Agency/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/2022 — Present/i)).not.toBeInTheDocument();
  });
});
