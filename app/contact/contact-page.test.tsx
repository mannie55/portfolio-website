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
    expect(screen.getByRole("heading", { name: /Contact/i })).toBeInTheDocument();
    
    // Check that CalEmbed renders (wait for dynamic import)
    const calEmbed = await screen.findByTestId("cal-embed");
    expect(calEmbed).toBeInTheDocument();
    
    // Check that Footer renders (using role or content)
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
    expect(screen.getByText(/Portfolio/)).toBeInTheDocument();
  });
});
