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

  test("renders 'Quality always' card with white background and dark text", () => {
    render(<Process />);
    const qualityCard = screen.getByText("Quality always").closest("article");
    expect(qualityCard).toBeInTheDocument();
    expect(qualityCard).toHaveClass("bg-white");
    expect(qualityCard).not.toHaveClass("bg-surface");

    const title = screen.getByText("Quality always");
    expect(title).toHaveClass("text-text-dark");
    expect(title).not.toHaveClass("text-white");

    const description = screen.getByText(/From pixel-perfect design/);
    expect(description).toHaveClass("text-text-dark/90");
    expect(description).not.toHaveClass("text-white/90");
  });

  test("renders all cards with p-6 padding and centered layouts", () => {
    render(<Process />);
    const cardIds = [
      "discovery-call",
      "quality-always",
      "asset-handover",
      "scope-and-rates",
      "speed-and-quality",
      "clear-process",
    ];

    cardIds.forEach((id) => {
      const card = document.getElementById(id);
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass("p-6");
      expect(card).toHaveClass("items-center");
      expect(card).toHaveClass("justify-center");
    });
  });
});
