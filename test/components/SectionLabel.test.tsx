import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusLabel } from "@/components/ui/StatusLabel";

describe("Editorial Labels", () => {
  it("renders SectionLabel with index and title", () => {
    render(<SectionLabel index="01" title="What We Do" />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("What We Do")).toBeInTheDocument();
  });

  it("renders StatusLabel with dot indicator", () => {
    render(<StatusLabel label="STATUS / ACTIVE" dot />);
    expect(screen.getByText("STATUS / ACTIVE")).toBeInTheDocument();
    const dot = document.querySelector("span[aria-hidden='true']");
    expect(dot).toBeInTheDocument();
  });
});
