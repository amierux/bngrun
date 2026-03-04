"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function BNGHero() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      aria-label="BNG Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020f2b]/90" />

      {/* Animated rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/5"
          style={{
            width: `${200 + i * 180}px`,
            height: `${200 + i * 180}px`,
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-semibold text-brand-yellow tracking-widest uppercase mb-6">
            <span>🇵🇭</span>
            <span>Singapore&apos;s Premier Filipino Business Group</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight">
            Business{" "}
            <span className="text-gradient-pal">Network</span>
            <br />
            Group
          </h1>

          <p className="text-2xl font-semibold text-white/80 mb-4">BNG Singapore</p>

          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Founded by seven Filipino companies united by a shared advocacy — to build, strengthen, and celebrate the Filipino community in Singapore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#founding-members" className="btn-primary text-base px-8 py-4">
              Meet the Founding Members ↓
            </a>
            <Link href="/" className="btn-secondary text-base px-8 py-4">
              ✈ View PAL RUN 2026
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
