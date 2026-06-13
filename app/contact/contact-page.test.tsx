import { render, screen } from "@testing-library/react";
import ContactPage from "./page";
import { expect, test, describe, vi } from "vitest";

// Mock the CalEmbed component because it imports @calcom/embed-react which might need browser APIs
vi.mock("@/components/contact/cal-embed", () => ({
  CalEmbed: () => <div data-testid="cal-embed">Cal Embed Mock</div>,
}));

describe("ContactPage", () => {
  test("renders SectionHeading, CalEmbed, and Footer", async () => {
    render(<ContactPage />);
    
    // Check that SectionHeading renders
    expect(screen.getByRole("heading", { name: /LETS BUILD SOMETHING GREAT TOGETHER./i })).toBeInTheDocument();
    
    // Check that CalEmbed renders (wait for dynamic import)
    const calEmbed = await screen.findByTestId("cal-embed");
    expect(calEmbed).toBeInTheDocument();
    
    // Check that Footer renders (using role or content)
    const footers = screen.getAllByRole("contentinfo");
    expect(footers.length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Portfolio/).length).toBeGreaterThan(0);
  });
});
