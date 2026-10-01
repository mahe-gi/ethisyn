interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const localStore = new Map<string, RateLimitRecord>();

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

export async function checkRateLimit(
  identifier: string,
  maxRequests = 5,
  windowSeconds = 60
): Promise<RateLimitResult> {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  // Tier 1: Upstash Serverless Redis REST API
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
    } catch {
      // Fall through to memory fallback
    }
  }

  // Tier 2: In-Memory Token Bucket Fallback
  const now = Date.now();
  const record = localStore.get(identifier);

  // Sweep memory leak guard if > 2000 items
  if (localStore.size > 2000) {
    for (const [k, r] of localStore.entries()) {
      if (r.resetAt < now) localStore.delete(k);
    }
  }

  if (!record || record.resetAt < now) {
    localStore.set(identifier, {
      count: 1,
      resetAt: now + windowSeconds * 1000,
    });
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetAt: now + windowSeconds * 1000,
    };
  }

  record.count += 1;
  const allowed = record.count <= maxRequests;

  return {
    allowed,
    remaining: Math.max(0, maxRequests - record.count),
    resetAt: record.resetAt,
  };
}
