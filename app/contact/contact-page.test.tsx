import { render, screen } from "@testing-library/react";
import ContactPage from "./page";
import { Footer } from "@/components/layout/footer";
import { expect, test, describe, vi } from "vitest";
import { email } from "@/lib/constants";

// Mock the CalEmbed component because it imports @calcom/embed-react which might need browser APIs
vi.mock("@/components/contact/cal-embed", () => ({
  CalEmbed: () => <div data-testid="cal-embed">Cal Embed Mock</div>,
}));

// Mock next/navigation for the Footer component
vi.mock("next/navigation", () => ({
  usePathname: () => "/contact",
}));

describe("ContactPage", () => {
  test("renders SectionHeading, CalEmbed, and Footer", async () => {
    render(
      <div>
        <ContactPage />
        <Footer />
      </div>
    );
    
    // Check that SectionHeading renders and is centered
    const heading = screen.getByRole("heading", { name: /LETS BUILD SOMETHING GREAT TOGETHER./i });
    expect(heading).toBeInTheDocument();
    expect(heading.parentElement).toHaveClass("flex");
    expect(heading.parentElement).toHaveClass("flex-col");
    expect(heading.parentElement).toHaveClass("items-center");
    expect(heading.parentElement).toHaveClass("text-center");
    
    // Check that CalEmbed renders (wait for dynamic import)
    const calEmbed = await screen.findByTestId("cal-embed");
    expect(calEmbed).toBeInTheDocument();
    
    // Check that custom CTA button renders on contact page
    const ctaButton = screen.getByRole("link", { name: /Email me directly/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute("href", `mailto:${email}`);
    
    // Check that Footer renders (using role or content)
    const footers = screen.getAllByRole("contentinfo");
    expect(footers.length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Portfolio/).length).toBeGreaterThan(0);
  });
});

