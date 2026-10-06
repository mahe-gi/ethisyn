import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { AutonomousCompanion } from "@/components/ui/AutonomousCompanion";

// Mock TrackingMascot since it relies on window mouse events and canvas/svg tracking
vi.mock("@/components/ui/TrackingMascot", () => ({
  TrackingMascot: () => <div data-testid="tracking-mascot">Mascot</div>,
}));

describe("AutonomousCompanion Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the floating mascot trigger", () => {
    render(<AutonomousCompanion />);
    expect(screen.getByRole("button", { name: /open ethisyn studio assistant/i })).toBeInTheDocument();
  });

  it("opens dialogue and answers WhatsApp query accurately", async () => {
    render(<AutonomousCompanion />);
    const trigger = screen.getByRole("button", { name: /open ethisyn studio assistant/i });
    fireEvent.click(trigger);

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/ask about services, pricing, timelines, stack/i);
    const form = input.closest("form");

    fireEvent.change(input, { target: { value: "Can I connect on WhatsApp?" } });
    fireEvent.submit(form!);

    act(() => {
      vi.advanceTimersByTime(600);
    });

    // Should return WhatsApp answer and NOT Reverse Recruiting
    expect(screen.getByText(/You can connect directly with our founding team on WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Chat on WhatsApp/i })).toHaveAttribute("href", expect.stringContaining("wa.me"));
  });

  it("answers Reverse Recruiting query accurately", async () => {
    render(<AutonomousCompanion />);
    const trigger = screen.getByRole("button", { name: /open ethisyn studio assistant/i });
    fireEvent.click(trigger);

    const input = screen.getByPlaceholderText(/ask about services, pricing, timelines, stack/i);
    const form = input.closest("form");

    fireEvent.change(input, { target: { value: "How does the Reverse Recruiting service work?" } });
    fireEvent.submit(form!);

    act(() => {
      vi.advanceTimersByTime(600);
    });

    expect(screen.getByText(/Tired of ATS black holes\? In our Reverse Recruiting Service/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Fast-Track Job Search Onboarding/i })).toHaveAttribute("href", "/job-application-service");
  });

  it("answers Tech Stack query accurately highlighting tech-agnostic versatility", async () => {
    render(<AutonomousCompanion />);
    const trigger = screen.getByRole("button", { name: /open ethisyn studio assistant/i });
    fireEvent.click(trigger);

    const input = screen.getByPlaceholderText(/ask about services, pricing, timelines, stack/i);
    const form = input.closest("form");

    fireEvent.change(input, { target: { value: "What is your tech stack and architecture?" } });
    fireEvent.submit(form!);

    act(() => {
      vi.advanceTimersByTime(600);
    });

    expect(screen.getByText(/We are architecture-first and tech-agnostic/i)).toBeInTheDocument();
  });
});
