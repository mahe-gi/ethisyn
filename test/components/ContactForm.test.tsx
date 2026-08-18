import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "@/components/ui/ContactForm";

describe("ContactForm UI Component", () => {
  it("renders all expected fields including name, email, optional company, and message", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company or organization/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/what would you like to discuss\?/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/i consent to ethisyn processing these details/i)
    ).toBeInTheDocument();
  });

  it("displays validation error when submitted empty", async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole("button", { name: /start a conversation/i });
    fireEvent.click(submitBtn);

    const alert = await screen.findByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(/we couldn’t send your message/i);
  });
});
