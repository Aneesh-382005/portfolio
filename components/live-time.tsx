"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const OWNER_TIMEZONE = "America/New_York";

function formatClock(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  }).format(date);
}

function formatDate(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone,
  }).format(date);
}

export default function LiveTime() {
  const [now, setNow] = useState<Date>(new Date());

  const visitorTimezone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const sameTimezone = visitorTimezone === OWNER_TIMEZONE;

  return (
    <motion.div
      className="mx-auto mb-7 w-full max-w-xl px-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
    >
      <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-3 text-left shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 dark:text-white/45">
          Right now
        </p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl bg-black/[0.03] p-2.5 dark:bg-white/[0.05]">
            <p className="text-[10px] text-gray-500 dark:text-white/50">Aneesh</p>
            <p className="text-base font-semibold text-gray-700 dark:text-white/80">
              {formatClock(now, OWNER_TIMEZONE)}
            </p>
            <p className="text-[11px] text-gray-500 dark:text-white/50">
              {formatDate(now, OWNER_TIMEZONE)}
            </p>
          </div>
          <div className="rounded-xl bg-black/[0.03] p-2.5 dark:bg-white/[0.05]">
            <p className="text-[10px] text-gray-500 dark:text-white/50">You</p>
            <p className="text-base font-semibold text-gray-700 dark:text-white/80">
              {formatClock(now, visitorTimezone)}
            </p>
            <p className="text-[11px] text-gray-500 dark:text-white/50">
              {formatDate(now, visitorTimezone)}
            </p>
          </div>
        </div>
        <p className="mt-2 text-[11px] text-gray-500 dark:text-white/50">
          {sameTimezone
            ? "Great, we are in the same timezone."
            : "Timezone difference helps with async replies."}
        </p>
      </div>
    </motion.div>
  );
}