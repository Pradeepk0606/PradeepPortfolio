"use client";

import { useEffect } from "react";

export default function DevSWCleanup() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (process.env.NODE_ENV !== "development") return;
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => {
        try {
          reg.unregister();
        } catch {}
      });
    });

    if (caches && caches.keys) {
      caches.keys().then((keys) => {
        keys.forEach((k) => {
          try {
            caches.delete(k);
          } catch {}
        });
      });
    }
  }, []);

  return null;
}
