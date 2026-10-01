import { describe, it, expect } from "vitest";
import { checkRateLimit } from "@/lib/rate-limit";

describe("Rate Limiting Engine", () => {
  it("allows initial requests within limit", async () => {
    const testId = `ip-test-${Date.now()}`;
    const result1 = await checkRateLimit(testId, 3, 10);
    expect(result1.allowed).toBe(true);
    expect(result1.remaining).toBe(2);

    const result2 = await checkRateLimit(testId, 3, 10);
    expect(result2.allowed).toBe(true);
    expect(result2.remaining).toBe(1);

    const result3 = await checkRateLimit(testId, 3, 10);
    expect(result3.allowed).toBe(true);
    expect(result3.remaining).toBe(0);

    const result4 = await checkRateLimit(testId, 3, 10);
    expect(result4.allowed).toBe(false);
    expect(result4.remaining).toBe(0);
  });
});
