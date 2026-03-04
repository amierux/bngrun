"use client";

import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { raceKit, finisherPack } from "@/data/event";

export function Inclusions() {
  return (
    <section
      id="inclusions"
      className="section-pad bg-white"
      aria-labelledby="inclusions-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <span className="section-label">What You Get</span>
          <h2
            id="inclusions-heading"
            className="text-4xl sm:text-5xl font-bold text-brand-blue mb-4"
          >
            Race Kit & Finisher Pack
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every registered runner gets a race kit. Cross that finish line, and you earn even more. Here&apos;s exactly what comes with your registration.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Race Kit */}
          <AnimateIn delay={0.1}>
            <div className="rounded-2xl border border-brand-blue/10 p-8 bg-gradient-to-br from-brand-blue/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white text-lg">
                  📦
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-blue">Race Kit</h3>
                  <p className="text-sm text-slate-500">All registered runners receive</p>
                </div>
              </div>
              <StaggerContainer className="space-y-3">
                {raceKit.map((item) => (
                  <StaggerItem key={item.item}>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-brand-blue/10">
                      <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                      <span className="font-medium text-slate-700">{item.item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimateIn>

          {/* Finisher Pack */}
          <AnimateIn delay={0.2}>
            <div className="rounded-2xl border border-brand-red/10 p-8 bg-gradient-to-br from-brand-red/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white text-lg">
                  🏅
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-red">Finisher Pack</h3>
                  <p className="text-sm text-slate-500">Cross the line, earn these</p>
                </div>
              </div>
              <StaggerContainer className="space-y-3">
                {finisherPack.map((item) => (
                  <StaggerItem key={item.item}>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-brand-red/10">
                      <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                      <span className="font-medium text-slate-700">{item.item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
