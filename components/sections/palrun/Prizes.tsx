"use client";

import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { prizes } from "@/data/event";

export function Prizes() {
  return (
    <section
      id="prizes"
      className="section-pad bg-[#020f2b] relative overflow-hidden"
      aria-labelledby="prizes-heading"
    >
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-yellow/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <span className="section-label">Your Finish Line Reward</span>
          <h2
            id="prizes-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Win More Than a Medal
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Top finishers don&apos;t just get glory — they get their next adventure, courtesy of Philippine Airlines.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prizes.map((prize) => (
            <StaggerItem key={prize.title}>
              <article className="beam-border rounded-2xl p-8 glass-dark h-full flex flex-col gap-4">
                <div className="text-5xl" aria-hidden="true">{prize.icon}</div>
                <h3 className="text-2xl font-bold text-brand-yellow">{prize.title}</h3>
                <p className="text-white/70 text-base leading-relaxed flex-1">
                  {prize.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.4} className="mt-12 text-center">
          <p className="text-white/50 text-sm mb-6">
            Limited slots. Register before May 24, 2026.
          </p>
          <a
            href="https://runsignup.com/Race/Events/PH/Manila/manilamarathon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 inline-flex"
          >
            ✈ Register & Chase Your Prize
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
