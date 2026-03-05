"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { event } from "@/data/event";
import { getCountdown } from "@/lib/utils";

export function Hero() {
  const [countdown, setCountdown] = useState(getCountdown(event.dateISO));
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="PAL RUN 2026 Hero"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 mesh-bg" style={{ y: bgY }} aria-hidden="true" />

      {/* Depth overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/20 via-transparent to-[#020f2b]/80 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

      {/* Animated sunburst */}
      <motion.div
        className="absolute top-[-80px] right-[-80px] w-[700px] h-[700px] opacity-[0.07]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current text-brand-yellow">
          {Array.from({ length: 8 }).map((_, i) => (
            <polygon key={i} points="100,8 108,78 100,90 92,78" transform={`rotate(${i * 45}, 100, 100)`} />
          ))}
          <circle cx="100" cy="100" r="22" />
        </svg>
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 3 === 0 ? "6px" : "3px",
            height: i % 3 === 0 ? "6px" : "3px",
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 4) * 18}%`,
            backgroundColor: i % 2 === 0 ? "#FDCB0A" : "#EC2B2A",
          }}
          animate={{ y: [-12, 12, -12], x: [-4, 4, -4], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 pt-32 w-full"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 text-xs font-semibold text-brand-yellow tracking-widest uppercase mb-8"
          >
            <div className="bg-white rounded-md p-0.5 flex items-center justify-center flex-shrink-0">
              <Image src="/logos/pal.png" alt="Philippine Airlines" width={32} height={20} className="object-contain" />
            </div>
            <span>Philippine Airlines Presents</span>
            <div className="bg-white rounded-md p-0.5 flex items-center justify-center flex-shrink-0">
              <Image src="/logos/bng.png" alt="BNG" width={32} height={20} className="object-contain" />
            </div>
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-3 tracking-tight leading-none">
            PAL RUN <span className="text-gradient-pal">2026</span>
          </h1>

          <motion.p
            className="text-xl sm:text-2xl font-semibold text-white/80 mb-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
          >
            {event.name}
          </motion.p>

          <motion.p
            className="text-lg text-brand-yellow font-medium italic mb-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
          >
            &ldquo;{event.tagline}&rdquo;
          </motion.p>

          {/* Meta pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12 text-sm text-white/75"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
          >
            {[
              { icon: "📅", text: `${event.day}, ${event.date}` },
              { icon: "📍", text: event.city },
              { icon: "🏃", text: "5K · 10K · 21K · 42K" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 glass rounded-full px-4 py-2 hover:bg-white/10 transition-colors">
                <span aria-hidden="true">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Countdown */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
          >
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Race starts in</p>
            <div className="flex justify-center gap-3 sm:gap-4">
              {units.map(({ label, value }) => (
                <div key={label} className="glass-dark rounded-2xl p-3 sm:p-4 min-w-[72px] sm:min-w-[84px] text-center group relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ background: "radial-gradient(circle at center, rgba(253,203,10,0.08), transparent 70%)" }}
                    aria-hidden="true"
                  />
                  <div className="relative text-3xl sm:text-4xl font-bold text-white tabular-nums leading-none">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="relative text-xs text-white/40 uppercase tracking-wider mt-1.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 beam-border"
            >
              ✈ Register Now — Slots Limited
            </a>
            <a href="#why-join" className="btn-secondary text-base px-8 py-4">
              Why Join? ↓
            </a>
          </motion.div>

          <motion.p
            className="mt-5 text-xs text-white/30"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}
          >
            Registration closes {event.registrationDeadline} · Presented by{" "}
            <a href="/bng" className="text-brand-yellow/70 hover:text-brand-yellow transition-colors underline underline-offset-2">
              BNG Singapore
            </a>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
