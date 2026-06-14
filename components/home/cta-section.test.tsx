import { render, screen } from "@testing-library/react";
import { CTASection } from "./cta-section";
import { expect, test, describe, vi } from "vitest";

// Mock Next.js Image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe("CTASection Component", () => {
  test("renders the default headline correctly", () => {
    render(<CTASection />);
    expect(screen.getByText(/LET'S BUILD SOMETHING THAT ACTUALLY WORKS/i)).toBeInTheDocument();
  });

  test("renders a custom headline", () => {
    const customTitle = "WORK WITH ME";
    render(<CTASection title={customTitle} />);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  test("renders the call to action button with custom label", () => {
    const customLabel = "Start Project";
    render(<CTASection ctaLabel={customLabel} />);
    expect(screen.getByText(customLabel)).toBeInTheDocument();
  });

  test("renders the brand logo in the section footer", () => {
    render(<CTASection />);
    expect(screen.getByAltText(/Brand Logo/i)).toBeInTheDocument();
  });

  test("renders the availability status", () => {
    render(<CTASection />);
    expect(screen.getByText(/Available to take on new projects/i)).toBeInTheDocument();
  });

  test("hides footer when showFooter is false", () => {
    render(<CTASection showFooter={false} />);
    expect(screen.queryByAltText(/Brand Logo/i)).not.toBeInTheDocument();
  });
});
