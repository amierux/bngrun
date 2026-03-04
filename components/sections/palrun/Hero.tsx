"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { event } from "@/data/event";
import { getCountdown } from "@/lib/utils";

export function Hero() {
  const [countdown, setCountdown] = useState(getCountdown(event.dateISO));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(event.dateISO));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Mins", value: countdown.minutes },
    { label: "Secs", value: countdown.seconds },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="PAL RUN 2026 Hero"
    >
      {/* Mesh background */}
      <div className="absolute inset-0 mesh-bg" />

      {/* Overlay layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020f2b]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 via-transparent to-transparent" />

      {/* Animated sunburst */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-brand-yellow fill-current">
          {Array.from({ length: 8 }).map((_, i) => (
            <polygon
              key={i}
              points="100,20 108,80 100,90 92,80"
              transform={`rotate(${i * 45}, 100, 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="25" />
        </svg>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-brand-yellow/40"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-semibold text-brand-yellow tracking-widest uppercase mb-6">
            <span>✈</span>
            <span>Philippine Airlines Presents</span>
            <span>✈</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            PAL RUN{" "}
            <span className="text-gradient-pal">2026</span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-white/80 mb-2">
            {event.name}
          </p>

          <p className="text-lg text-brand-yellow font-medium italic mb-8">
            &ldquo;{event.tagline}&rdquo;
          </p>

          {/* Event details */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-white/70">
            <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
              <span>📅</span>
              <span>{event.day}, {event.date}</span>
            </div>
            <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
              <span>📍</span>
              <span>{event.city}</span>
            </div>
            <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
              <span>🏃</span>
              <span>5K · 10K · 21K · 42K</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-10">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Race starts in</p>
            <div className="flex justify-center gap-3 sm:gap-4">
              {units.map(({ label, value }) => (
                <div
                  key={label}
                  className="glass-dark rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[80px] text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://runsignup.com/Race/Events/PH/Manila/manilamarathon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 beam-border"
            >
              ✈ Register Now — Slots Limited
            </a>
            <a href="#why-join" className="btn-secondary text-base px-8 py-4">
              Why Join? ↓
            </a>
          </div>

          <p className="mt-4 text-xs text-white/30">
            Registration closes {event.registrationDeadline}
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
