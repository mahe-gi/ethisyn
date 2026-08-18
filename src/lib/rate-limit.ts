interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

// Local fallback store for single-instance / development runs
const localStore = new Map<string, { count: number; resetAt: number }>();

/**
 * Rate limiter supporting Upstash Redis REST API for persistent serverless rate limiting,
 * with local token bucket fallback for development.
 *
 * @param identifier Client IP or identifier
 * @param maxRequests Max requests per window (default: 5)
 * @param windowSeconds Window in seconds (default: 60)
 */
export async function checkRateLimit(
  identifier: string,
  maxRequests = 5,
  windowSeconds = 60
): Promise<RateLimitResult> {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  // 1. Persistent Upstash Redis rate limiter (Production Serverless)
  if (upstashUrl && upstashToken) {
    try {
      const key = `rate_limit:${identifier}`;
      const res = await fetch(`${upstashUrl}/pipeline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${upstashToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ["INCR", key],
          ["EXPIRE", key, windowSeconds],
        ]),
        cache: "no-store",
      });

      if (res.ok) {
        const data = await res.json();
        const count = data[0]?.result ?? 1;
        const allowed = count <= maxRequests;
        return {
          allowed,
          remaining: Math.max(0, maxRequests - count),
          resetAt: Date.now() + windowSeconds * 1000,
        };
      }
    } catch (err) {
      console.warn("Persistent rate limiter unreachable, using fallback.");
    }
  }

  // 2. Local Fallback
  const now = Date.now();
  const record = localStore.get(identifier);

  if (localStore.size > 2000) {
    for (const [k, r] of localStore.entries()) {
      if (r.resetAt < now) localStore.delete(k);
    }
  }

  if (!record || record.resetAt < now) {
    const resetAt = now + windowSeconds * 1000;
    localStore.set(identifier, { count: 1, resetAt });
    return { allowed: true, remaining: maxRequests - 1, resetAt };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetAt: record.resetAt };
  }

  record.count += 1;
  return { allowed: true, remaining: maxRequests - record.count, resetAt: record.resetAt };
}
