"use client";

import { StaggerContainer, StaggerItem, AnimateIn } from "@/components/ui/AnimateIn";
import { categories } from "@/data/event";

export function RaceCategories() {
  return (
    <section
      id="categories"
      className="section-pad mesh-bg relative overflow-hidden"
      aria-labelledby="categories-heading"
    >
      <div className="absolute inset-0 bg-brand-blue/60" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <span className="section-label">Find Your Race</span>
          <h2
            id="categories-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Race Categories
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Four distances. One iconic course. Whether it&apos;s your first 5K or your fastest 42K — there&apos;s a race for you.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <StaggerItem key={cat.shortLabel}>
              <article className="glass-card rounded-2xl p-6 h-full flex flex-col">
                <div className="text-4xl mb-4" aria-hidden="true">{cat.icon}</div>

                <div className="mb-1">
                  <span className="text-4xl font-bold text-white">{cat.shortLabel}</span>
                </div>
                <h3 className="text-base font-semibold text-white/70 mb-3">{cat.label}</h3>
                <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">
                  {cat.description}
                </p>

                {/* Details */}
                <div className="space-y-2 text-sm border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Distance</span>
                    <span className="text-white font-medium">{cat.distance}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Gun Start</span>
                    <span className="text-white font-medium">{cat.gunStart}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Fee</span>
                    <span className="text-brand-yellow font-bold text-base">{cat.fee}</span>
                  </div>
                </div>

                <a
                  href="https://runsignup.com/Race/Events/PH/Manila/manilamarathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 btn-primary text-sm py-2.5 w-full justify-center"
                >
                  Register {cat.shortLabel}
                </a>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
