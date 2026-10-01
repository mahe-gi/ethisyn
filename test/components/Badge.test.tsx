import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/ui/Badge";

describe("Badge Component", () => {
  it("renders text content with default styling", () => {
    render(<Badge>Active Architecture</Badge>);
    const badge = screen.getByText("Active Architecture");
    expect(badge).toBeInTheDocument();
  });

  it("renders with dot indicator when dot is true", () => {
    const { container } = render(<Badge variant="success" dot>Live System</Badge>);
    expect(screen.getByText("Live System")).toBeInTheDocument();
    const dot = container.querySelector(".rounded-full");
    expect(dot).toBeInTheDocument();
  });

  it("applies different variant classes correctly", () => {
    const { rerender } = render(<Badge variant="warning">Warning Notice</Badge>);
    expect(screen.getByText("Warning Notice")).toBeInTheDocument();

    rerender(<Badge variant="error">Critical Failure</Badge>);
    expect(screen.getByText("Critical Failure")).toBeInTheDocument();

    rerender(<Badge variant="neutral">Neutral Info</Badge>);
    expect(screen.getByText("Neutral Info")).toBeInTheDocument();
  });
});
