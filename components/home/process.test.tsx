import { render, screen } from "@testing-library/react";
import { Process } from "./process";
import { expect, test, describe } from "vitest";

describe("Process Component", () => {
  test("renders the section heading", () => {
    render(<Process />);
    expect(
      screen.getByRole("heading", { name: /Straightforward from start to finish/i }),
    ).toBeInTheDocument();
  });

  test("renders all process card titles", () => {
    render(<Process />);
    expect(screen.getByText("Discovery Call")).toBeInTheDocument();
    expect(screen.getByText("Quality always")).toBeInTheDocument();
    expect(screen.getByText("Asset Handover")).toBeInTheDocument();
    expect(screen.getByText("Scope And Rates")).toBeInTheDocument();
    expect(screen.getByText("Speed and Quality")).toBeInTheDocument();
    expect(screen.getByText("A Clear Process")).toBeInTheDocument();
  });

  test("renders the CTA button with correct href and text", () => {
    render(<Process />);
    const ctaButton = screen.getByRole("link", { name: /Book a strategy call/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute("href", "/get-started");
  });
});
