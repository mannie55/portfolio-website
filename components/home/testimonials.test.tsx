import { render, screen } from "@testing-library/react";
import { Testimonials } from "./testimonials";
import { testimonials } from "@/lib/mock/testimonials";
import { expect, test, describe, vi } from "vitest";

// Mock Next.js Image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe("Testimonials Component", () => {
  test("renders the section heading correctly", () => {
    render(<Testimonials />);
    expect(screen.getByText(/What Clients Say/i)).toBeInTheDocument();
  });

  test("renders all testimonial cards", () => {
    render(<Testimonials />);
    testimonials.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(screen.getByText(testimonial.role)).toBeInTheDocument();
    });
  });

  test("renders quotes correctly", () => {
    render(<Testimonials />);
    testimonials.forEach((testimonial) => {
      // Use a more flexible matcher for quotes as they might be wrapped in smart quotes
      const quoteElement = screen.getByText(new RegExp(testimonial.quote, "i"));
      expect(quoteElement).toBeInTheDocument();
    });
  });
});
