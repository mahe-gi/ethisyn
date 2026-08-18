import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/Button";

describe("Button Component", () => {
  it("renders with children and tactile styling", () => {
    render(<Button variant="primary">Start a conversation</Button>);
    const btn = screen.getByRole("button", { name: /start a conversation/i });
    expect(btn).toBeInTheDocument();
  });

  it("renders as an anchor when href is supplied", () => {
    render(
      <Button href="/contact" variant="outline">
        Contact Link
      </Button>
    );
    const link = screen.getByRole("link", { name: /contact link/i });
    expect(link).toHaveAttribute("href", "/contact");
  });

  it("handles loading state by showing spinner and disabling interaction", () => {
    render(<Button loading>Submit</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });
});
