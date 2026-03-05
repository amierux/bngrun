"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { whyJoin, event } from "@/data/event";

export function WhyJoin() {
  return (
    <section
      id="why-join"
      className="section-pad bg-white relative overflow-hidden"
      aria-labelledby="why-join-heading"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateIn className="text-center mb-16">
          <span className="section-label">Your Race. Your Reason.</span>
          <h2
            id="why-join-heading"
            className="text-4xl sm:text-5xl font-bold text-brand-blue mb-4"
          >
            Why You Should Run BNG Run 2026
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            This isn&apos;t just a race. It&apos;s the Filipino community in Singapore — friends, families, and colleagues — running together, giving back, and growing stronger.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyJoin.map((reason) => (
            <StaggerItem key={reason.title}>
              <article className="group relative rounded-2xl p-6 border border-slate-100 bg-white hover:border-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 hover:-translate-y-1 cursor-default">
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-blue via-brand-red to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                <div className="text-4xl mb-4" aria-hidden="true">{reason.icon}</div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.4} className="mt-12 text-center">
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 inline-flex"
          >
            ✈ Secure My Slot Now
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
