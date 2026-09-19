type Options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};

export default function rateLimit(options?: Options) {
  const tokenCache = new Map<string, { count: number; expiry: number }>();
  const max = options?.uniqueTokenPerInterval || 500;
  const ttl = options?.interval || 60000;

  return {
    check: (_req: Request, limit: number, token: string) => 
      new Promise<void>((resolve, reject) => {
        const now = Date.now();
        const entry = tokenCache.get(token);
        if (!entry || entry.expiry < now) {
          if (tokenCache.size >= max) {
            const firstKey = tokenCache.keys().next().value;
            if (firstKey) tokenCache.delete(firstKey);
          }
          tokenCache.set(token, { count: 1, expiry: now + ttl });
          resolve();
        } else {
          entry.count += 1;
          if (entry.count > limit) {
            reject();
          } else {
            resolve();
          }
        }
      }),
  };
}

