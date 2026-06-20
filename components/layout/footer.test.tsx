import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";
import { expect, test, describe, vi } from "vitest";
import { email } from "@/lib/constants";

// Mock next/navigation so we can control usePathname dynamically
const mockUsePathname = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

// Mock Next.js Image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe("Footer Component", () => {
  test("renders the default CTA and base footer on the home page", () => {
    mockUsePathname.mockReturnValue("/");
    render(<Footer />);

    // Renders default CTA title
    expect(screen.getByText(/LET'S BUILD SOMETHING THAT ACTUALLY WORKS/i)).toBeInTheDocument();
    
    // Renders base footer links
    expect(screen.getByTestId("base-footer")).toBeInTheDocument();
  });

  test("renders the default CTA and base footer on the about page", () => {
    mockUsePathname.mockReturnValue("/about");
    render(<Footer />);

    // Renders default CTA title
    expect(screen.getByText(/LET'S BUILD SOMETHING THAT ACTUALLY WORKS/i)).toBeInTheDocument();
    
    // Renders base footer
    expect(screen.getByTestId("base-footer")).toBeInTheDocument();
  });

  test("renders correct custom CTA title on case-studies path", () => {
    mockUsePathname.mockReturnValue("/case-studies");
    render(<Footer />);

    expect(screen.getByText(/got a project in mind/i)).toBeInTheDocument();
    expect(screen.getByTestId("base-footer")).toBeInTheDocument();
  });

  test("renders correct custom CTA title on a dynamic case-studies slug path", () => {
    mockUsePathname.mockReturnValue("/case-studies/my-cool-project");
    render(<Footer />);

    expect(screen.getByText(/got a project in mind/i)).toBeInTheDocument();
    expect(screen.getByTestId("base-footer")).toBeInTheDocument();
  });

  test("renders custom contact CTA with direct mail link on contact path", () => {
    mockUsePathname.mockReturnValue("/contact");
    render(<Footer />);

    expect(screen.getByText(/got a project in mind/i)).toBeInTheDocument();
    
    // Renders email link
    const ctaButton = screen.getByRole("link", { name: /Email me directly/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute("href", `mailto:${email}`);

    expect(screen.getByTestId("base-footer")).toBeInTheDocument();
  });

  test("renders ONLY base footer on undefined/404 paths", () => {
    mockUsePathname.mockReturnValue("/some-random-404-path");
    render(<Footer />);

    expect(screen.queryByText(/LET'S BUILD SOMETHING/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/got a project in mind/i)).not.toBeInTheDocument();
    expect(screen.getByTestId("base-footer")).toBeInTheDocument();
  });
});
