import { render, screen, fireEvent } from "@testing-library/react";
import { FAQ } from "./faq";
import { faqData } from "@/lib/mock/faq";
import { expect, test, describe, vi } from "vitest";

// Mock Lottie Chevron since it's browser-heavy and not needed for basic logic tests
vi.mock("./lottie-chevron", () => ({
  LottieChevron: ({ isOpen }: { isOpen: boolean }) => (
    <div data-testid="lottie-chevron" data-isopen={isOpen} />
  ),
}));

describe("FAQ Component", () => {
  test("renders the section heading correctly", () => {
    render(<FAQ />);
    expect(screen.getByText(/EVERYTHING YOU NEED TO KNOW/i)).toBeInTheDocument();
  });

  test("renders all FAQ questions", () => {
    render(<FAQ />);
    faqData.forEach((item) => {
      const queryText = item.question.replace(/\s+/g, " ");
      expect(screen.getByText(queryText)).toBeInTheDocument();
    });
  });
 
  test("expands and collapses items correctly", () => {
    render(<FAQ />);
    
    // First item is open by default in my implementation
    const firstItem = faqData[0];
    const firstButton = screen.getByText(firstItem.question.replace(/\s+/g, " ")).closest('button');
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
 
    // Click another item
    const secondItem = faqData[1];
    const secondButton = screen.getByText(secondItem.question.replace(/\s+/g, " ")).closest('button');
    fireEvent.click(secondButton!);
 
    // Now second should be open, first closed
    expect(secondButton).toHaveAttribute('aria-expanded', 'true');
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
  });

  test("renders the CTA button", () => {
    render(<FAQ />);
    expect(screen.getByRole("link", { name: /Send me a message/i })).toBeInTheDocument();
  });
});
