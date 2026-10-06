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
    // Default fetch mocks network fallback for local rule tests
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Local fallback")));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
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

    await act(async () => {
      await Promise.resolve();
      await vi.advanceTimersByTimeAsync(500);
    });

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

    await act(async () => {
      await Promise.resolve();
      await vi.advanceTimersByTimeAsync(500);
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

    await act(async () => {
      await Promise.resolve();
      await vi.advanceTimersByTimeAsync(500);
    });

    expect(screen.getByText(/We are architecture-first and tech-agnostic/i)).toBeInTheDocument();
  });

  it("displays AI response when /api/chat returns an intelligent reply", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          reply: "I am Syn powered by Groq AI! We build custom systems in Hyderabad.",
          actionLink: { label: "Explore Studio", href: "/#services" },
        }),
      })
    );

    render(<AutonomousCompanion />);
    const trigger = screen.getByRole("button", { name: /open ethisyn studio assistant/i });
    fireEvent.click(trigger);

    const input = screen.getByPlaceholderText(/ask about services, pricing, timelines, stack/i);
    const form = input.closest("form");

    fireEvent.change(input, { target: { value: "What makes your AI studio unique?" } });
    fireEvent.submit(form!);

    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.getByText(/I am Syn powered by Groq AI! We build custom systems in Hyderabad./i)).toBeInTheDocument();
  });

  it("answers CTO query accurately with Mahesh Ch", async () => {
    render(<AutonomousCompanion />);
    const trigger = screen.getByRole("button", { name: /open ethisyn studio assistant/i });
    fireEvent.click(trigger);

    const input = screen.getByPlaceholderText(/ask about services, pricing, timelines, stack/i);
    const form = input.closest("form");

    fireEvent.change(input, { target: { value: "who is your cto?" } });
    fireEvent.submit(form!);

    await act(async () => {
      await Promise.resolve();
      await vi.advanceTimersByTimeAsync(500);
    });

    expect(screen.getByText(/That would be Mahesh Ch, our Chief Technology & Operations Officer \(CTO\)/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Meet Mahesh Ch on Team Page/i })).toHaveAttribute("href", "/team");
  });
});
