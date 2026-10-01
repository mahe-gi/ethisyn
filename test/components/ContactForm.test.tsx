import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ContactForm } from "@/components/ui/ContactForm";

describe("ContactForm Component", () => {
  it("renders all required form inputs and service options", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/what are you looking to build/i)).toBeInTheDocument();
    expect(screen.getByText(/Web & Software Engineering/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send project inquiry/i })).toBeInTheDocument();
  });

  it("shows client-side validation error banner when submitted empty", async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole("button", { name: /send project inquiry/i });
    fireEvent.click(submitBtn);

    const alert = await screen.findByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(screen.getByText(/we couldn’t send your message/i)).toBeInTheDocument();
  });
});
