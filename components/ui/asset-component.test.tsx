import { render, screen } from "@testing-library/react";
import { AssetComponent } from "./asset-component";
import { expect, test, describe } from "vitest";

describe("AssetComponent", () => {
  test("renders the section with correct aria-label", () => {
    render(<AssetComponent />);
    expect(screen.getByLabelText(/Asset component/i)).toBeInTheDocument();
  });

  test("renders the container with bg-white background", () => {
    render(<AssetComponent />);
    const container = screen.getByLabelText(/Asset component/i);
    expect(container).toHaveClass("bg-white");
    expect(container).not.toHaveClass("bg-blueLight");
  });

  test("renders asset items", () => {
    render(<AssetComponent />);
    const brandLogos = screen.getAllByText(/Brand Logo/i);
    expect(brandLogos.length).toBeGreaterThan(0);
  });
});
