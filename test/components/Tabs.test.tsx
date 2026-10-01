import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs, TabItem } from "@/components/ui/Tabs";

describe("Tabs Component", () => {
  const mockTabs: TabItem[] = [
    { id: "tab1", label: "Overview", count: 12 },
    { id: "tab2", label: "Details", badge: "New" },
    { id: "tab3", label: "Settings" },
  ];

  it("renders all tab labels, counts, and badges correctly", () => {
    const handleChange = vi.fn();
    render(
      <Tabs
        tabs={mockTabs}
        activeTab="tab1"
        onChange={handleChange}
        ariaLabel="Test tabs"
      />
    );

    expect(screen.getByRole("tablist", { name: "Test tabs" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Overview/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Details/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Settings/i })).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("triggers onChange when a tab is clicked", () => {
    const handleChange = vi.fn();
    render(
      <Tabs
        tabs={mockTabs}
        activeTab="tab1"
        onChange={handleChange}
      />
    );

    const detailsTab = screen.getByRole("tab", { name: /Details/i });
    fireEvent.click(detailsTab);
    expect(handleChange).toHaveBeenCalledWith("tab2");
  });

  it("supports keyboard navigation with arrow keys", () => {
    const handleChange = vi.fn();
    render(
      <Tabs
        tabs={mockTabs}
        activeTab="tab1"
        onChange={handleChange}
      />
    );

    const firstTab = screen.getByRole("tab", { name: /Overview/i });
    fireEvent.keyDown(firstTab, { key: "ArrowRight" });
    expect(handleChange).toHaveBeenCalledWith("tab2");

    fireEvent.keyDown(firstTab, { key: "End" });
    expect(handleChange).toHaveBeenCalledWith("tab3");

    fireEvent.keyDown(firstTab, { key: "Home" });
    expect(handleChange).toHaveBeenCalledWith("tab1");
  });
});
