import { render, screen } from "@testing-library/react";
import { CalEmbed } from "./cal-embed";
import { expect, test, describe, vi, beforeEach } from "vitest";
import { colorSemantic } from "@/lib/design-tokens";

const mockCalApi = vi.fn();
vi.mock("@calcom/embed-react", () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="mock-cal" />),
  getCalApi: () => Promise.resolve(mockCalApi),
}));

describe("CalEmbed Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders layout and sets Cal.com UI config with semantic accent colors on mount", async () => {
    render(<CalEmbed />);

    // Renders the mockup element from the mock
    const cal = await screen.findByTestId("mock-cal");
    expect(cal).toBeInTheDocument();

    // Verify UI config API was called on mount
    expect(mockCalApi).toHaveBeenCalledWith("ui", expect.objectContaining({
      theme: "dark",
      styles: expect.objectContaining({
        branding: expect.objectContaining({
          brandColor: colorSemantic.accent,
        }),
      }),
    }));
  });
});
