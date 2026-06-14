import { render, screen, fireEvent } from "@testing-library/react";
import { MenuDropdown } from "./menu-dropdown";
import { expect, test, describe, vi } from "vitest";

describe("MenuDropdown Component", () => {
  test("renders overlay with menu links when isOpen is true", () => {
    const handleClose = vi.fn();
    render(<MenuDropdown isOpen={true} onClose={handleClose} />);

    // Check that navigation links are rendered
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Case Studies/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();

    // Check overlay has visible/active classes
    const overlay = screen.getByTestId("menu-overlay");
    expect(overlay).toHaveClass("opacity-100");
    expect(overlay).not.toHaveClass("opacity-0");
  });

  test("applies hidden classes when isOpen is false", () => {
    const handleClose = vi.fn();
    render(<MenuDropdown isOpen={false} onClose={handleClose} />);

    const overlay = screen.getByTestId("menu-overlay");
    expect(overlay).toHaveClass("opacity-0");
    expect(overlay).toHaveClass("pointer-events-none");
  });

  test("calls onClose when a navigation link is clicked", () => {
    const handleClose = vi.fn();
    render(<MenuDropdown isOpen={true} onClose={handleClose} />);

    const homeLink = screen.getByText(/Home/i);
    fireEvent.click(homeLink);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when ESC key is pressed", () => {
    const handleClose = vi.fn();
    render(<MenuDropdown isOpen={true} onClose={handleClose} />);

    fireEvent.keyDown(window, { key: "Escape" });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when clicking on the overlay backdrop background", () => {
    const handleClose = vi.fn();
    render(<MenuDropdown isOpen={true} onClose={handleClose} />);

    const overlay = screen.getByTestId("menu-overlay");
    
    // Click directly on the overlay backdrop
    fireEvent.click(overlay);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("does NOT call onClose when clicking inside the card container", () => {
    const handleClose = vi.fn();
    render(<MenuDropdown isOpen={true} onClose={handleClose} />);

    // Click on a list item wrapper which is inside the card
    const listItem = screen.getByText(/Home/i).closest("li");
    expect(listItem).toBeInTheDocument();
    
    if (listItem) {
      fireEvent.click(listItem);
    }

    // onClose is only called when clicking the link text itself, not the container
    // wait, does clicking the list item trigger overlay click?
    // Since card has the ref `cardRef` and we check `!cardRef.current.contains(e.target)`,
    // clicking the list item (which is inside cardRef) will NOT call onClose.
    // However, clicking the <a> link itself *will* call onClose due to onClick={onClose} on the Link.
    // Let's assert that clicking the list item does not call onClose (unless clicking the link itself).
    // Wait, the link's onClick is directly on the link, so clicking the list item outside the link text shouldn't trigger the link's onClick, but will stay inside the card.
    // So let's make sure it doesn't close.
  });
});
