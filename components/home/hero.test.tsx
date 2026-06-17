import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";
import { heroContent } from "@/lib/constants";
import { expect, test, describe } from "vitest";

describe("Hero Component", () => {
  test("renders the headline correctly", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain("BUILDING");
    expect(heading.textContent).toContain("MATTERS");
  });

  test("renders the description box content", () => {
    render(<Hero />);
    expect(screen.getByText(heroContent.description)).toBeInTheDocument();
  });

  test("renders the call to action button", () => {
    render(<Hero />);
    const ctaButton = screen.getByRole("link", { name: heroContent.cta });
    expect(ctaButton).toBeInTheDocument();
  });

  test("contains an image of the author", () => {
    render(<Hero />);
    const portrait = screen.getByAltText(/Portrait of Nnamdi Ogbonna/i);
    expect(portrait).toBeInTheDocument();
  });
});
