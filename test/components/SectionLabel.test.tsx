import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusLabel } from "@/components/ui/StatusLabel";

describe("SectionLabel & StatusLabel Components", () => {
  it("renders SectionLabel with index and title", () => {
    render(<SectionLabel index="01" title="Thesis" />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("Thesis")).toBeInTheDocument();
  });

  it("renders StatusLabel with dot indicator", () => {
    const { container } = render(
      <StatusLabel label="STATUS / BUILDING" dot />
    );
    expect(screen.getByText("STATUS / BUILDING")).toBeInTheDocument();
    const dot = container.querySelector("span[aria-hidden='true']");
    expect(dot).toBeInTheDocument();
  });
});
