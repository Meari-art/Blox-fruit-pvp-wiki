const WINDOW_MS = 60_000;
const MAX_REQUESTS = 30;
const store = new Map<string, { count: number; resetAt: number }>();

export function guardRateLimit(key: string) {
  const now = Date.now();
  const current = store.get(key);

  if (!current || current.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (current.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0, retryAfterMs: current.resetAt - now };
  }

  current.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - current.count };
}

export function containsSpam(text: string) {
  const suspiciousPatterns = [/(https?:\/\/){2,}/i, /(free\s+robux)/i, /(discord\.gg\/\w+)/i];
  return suspiciousPatterns.some((pattern) => pattern.test(text));
}
