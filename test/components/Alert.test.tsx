import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Alert } from "@/components/ui/Alert";

describe("Alert Component", () => {
  it("renders children, title, and proper role attribute", () => {
    render(
      <Alert variant="success" title="Operation Successful">
        Your request has been processed.
      </Alert>
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Operation Successful")).toBeInTheDocument();
    expect(screen.getByText("Your request has been processed.")).toBeInTheDocument();
  });

  it("uses alert role when variant is error", () => {
    render(
      <Alert variant="error" title="Submission Failed">
        Please check your network connection.
      </Alert>
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("calls onDismiss when close button is clicked", () => {
    const handleDismiss = vi.fn();
    render(
      <Alert variant="warning" onDismiss={handleDismiss}>
        Temporary warning
      </Alert>
    );

    const closeBtn = screen.getByRole("button", { name: /dismiss alert/i });
    fireEvent.click(closeBtn);
    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });
});
