import { render, screen } from "@testing-library/react";
import { ScopeComponent } from "./scope-component";
import { expect, test, describe } from "vitest";

describe("ScopeComponent", () => {
  test("renders the section with correct aria-label", () => {
    render(<ScopeComponent />);
    expect(screen.getByLabelText(/Project scope/i)).toBeInTheDocument();
  });

  test("renders all scope items", () => {
    render(<ScopeComponent />);
    expect(screen.getByText(/Strategy/i)).toBeInTheDocument();
    expect(screen.getByText(/Design/i)).toBeInTheDocument();
    expect(screen.getByText(/Development/i)).toBeInTheDocument();
  });

  test("renders the list of scope categories", () => {
    render(<ScopeComponent />);
    expect(screen.getByRole("list", { name: /Scope categories/i })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
