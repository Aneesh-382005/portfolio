"use client";

import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const SHAKE_THRESHOLD = 18;
const SHAKE_WINDOW_MS = 1200;
const COOLDOWN_MS = 5000;

export default function ShakeEasterEgg() {
  const shakeTimestamps = useRef<number[]>([]);
  const lastTriggered = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined" || !("DeviceMotionEvent" in window)) return;

    function handleMotion(event: DeviceMotionEvent) {
      const acc = event.accelerationIncludingGravity;
      if (!acc || acc.x === null || acc.y === null || acc.z === null) return;

      const magnitude = Math.sqrt(acc.x ** 2 + acc.y ** 2 + acc.z ** 2);
      if (magnitude < SHAKE_THRESHOLD) return;

      const now = Date.now();
      if (now - lastTriggered.current < COOLDOWN_MS) return;

      shakeTimestamps.current = shakeTimestamps.current.filter(
        (t) => now - t < SHAKE_WINDOW_MS
      );
      shakeTimestamps.current.push(now);

      if (shakeTimestamps.current.length >= 2) {
        shakeTimestamps.current = [];
        lastTriggered.current = now;
        toast(
          "Whoa, easy there. Nothing broke, I promise.",
          {
            icon: "📳",
            duration: 4000,
            style: {
              background: "#0f1f1a",
              color: "#f5f1e6",
              border: "1px solid #2a4a3a",
            },
          }
        );
      }
    }

    window.addEventListener("devicemotion", handleMotion);
    return () => window.removeEventListener("devicemotion", handleMotion);
  }, []);

  return null;
}
