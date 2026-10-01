import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "@/components/ui/Button";

describe("Button component", () => {
  it("renders children with button role by default", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("renders as anchor link when href is supplied", () => {
    render(<Button href="/#services">Explore Services</Button>);
    const link = screen.getByRole("link", { name: /explore services/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/#services");
  });

  it("handles loading state correctly", () => {
    render(<Button loading>Submitting</Button>);
    const button = screen.getByRole("button", { name: /submitting/i });
    expect(button).toBeDisabled();
  });
});
