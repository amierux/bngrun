import type { Metadata } from "next";
import Link from "next/link";
import { runHistory, totalStats } from "@/data/runs";
import { event } from "@/data/event";

export const metadata: Metadata = {
  title: "Past Editions | BNG Run Legacy 2020–2025",
  description:
    "Relive 6 years of BNG Run history — from the 2020 virtual inaugural to 1,600 runners at Gardens by the Bay in 2025. The Filipino community runs together.",
  alternates: { canonical: "https://palrun2026.com/runs" },
};

const statItems = [
  { value: `${totalStats.editions}`, label: "Runs" },
  { value: `${totalStats.totalParticipants.toLocaleString()}+`, label: "Total Runners" },
  { value: `${totalStats.countriesReached}+`, label: "Countries" },
  { value: totalStats.charityRaised, label: "Charity Raised" },
];

const formatBadge: Record<string, string> = {
  Virtual: "bg-slate-100 text-slate-600",
  Hybrid: "bg-amber-50 text-amber-700",
  "In-Person": "bg-emerald-50 text-emerald-700",
};

export default function RunsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden mesh-bg pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/30 via-transparent to-[#020f2b]/90" />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-semibold text-brand-yellow tracking-widest uppercase mb-6">
            <span>🏃</span>
            <span>2020 — 2025</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight">
            BNG Run <span className="text-gradient-pal">Legacy</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Six editions. Thousands of runners. One unstoppable Filipino community. This is how we got here.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-brand-blue py-10" aria-label="Legacy statistics">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {statItems.map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-bold text-brand-yellow mb-1">{s.value}</p>
                <p className="text-white/60 text-sm uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white relative" aria-label="Run history timeline">
        {/* Center line — desktop only */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-blue/20 to-transparent" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="section-label">Year by Year</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-blue">Every Run, Every Story</h2>
          </div>

          <div className="space-y-16 lg:space-y-0">
            {[...runHistory].reverse().map((run, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={run.year} className="lg:grid lg:grid-cols-2 lg:gap-0 lg:min-h-[340px]">

                  {/* Content — alternates sides on desktop */}
                  <div className={`flex ${isEven ? "lg:justify-end lg:pr-16" : "lg:order-2 lg:pl-16"}`}>
                    <div className="w-full lg:max-w-[440px] relative">

                      {/* Connector dot — desktop */}
                      <div
                        className={`hidden lg:block absolute top-8 ${isEven ? "-right-[calc(4rem+9px)]" : "-left-[calc(4rem+9px)]"} w-4 h-4 rounded-full border-2 border-white shadow-md z-10`}
                        style={{ backgroundColor: run.brandColor }}
                        aria-hidden="true"
                      />

                      {/* Card */}
                      <article
                        className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group"
                        style={{ borderTopColor: run.brandColor, borderTopWidth: "4px" }}
                      >
                        {/* Card header */}
                        <div className="p-6 pb-4" style={{ background: `linear-gradient(135deg, ${run.brandColor}12, transparent)` }}>
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span
                                  className="text-3xl font-bold"
                                  style={{ color: run.brandColor }}
                                >
                                  {run.year}
                                </span>
                                <span className="text-sm font-semibold text-slate-400">
                                  Run {run.edition}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-slate-800">{run.theme}</h3>
                            </div>
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${formatBadge[run.format]}`}>
                              {run.format}
                            </span>
                          </div>
                          <p className="text-slate-500 text-sm italic leading-relaxed">
                            &ldquo;{run.tagline}&rdquo;
                          </p>
                        </div>

                        {/* Meta row */}
                        <div className="px-6 py-3 border-y border-slate-50 bg-slate-50/50">
                          <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500">
                            <span className="flex items-center gap-1"><span aria-hidden="true">📅</span>{run.date}</span>
                            <span className="flex items-center gap-1"><span aria-hidden="true">📍</span>{run.venue}</span>
                            <span className="flex items-center gap-1"><span aria-hidden="true">🏃</span>{run.participants.toLocaleString()} runners</span>
                            <span className="flex items-center gap-1"><span aria-hidden="true">🌏</span>{run.countries} countries</span>
                          </div>
                        </div>

                        {/* Categories + highlights */}
                        <div className="p-6">
                          {/* Category chips */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {run.categories.map((cat) => (
                              <span
                                key={cat}
                                className="text-xs font-semibold px-2.5 py-0.5 rounded-full text-white"
                                style={{ backgroundColor: run.brandColor }}
                              >
                                {cat}
                              </span>
                            ))}
                          </div>

                          {/* Highlights */}
                          <ul className="space-y-1.5">
                            {run.highlights.slice(0, 3).map((h, hi) => (
                              <li key={hi} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="text-brand-yellow mt-0.5 flex-shrink-0" aria-hidden="true">★</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Charity */}
                          {run.charity && (
                            <div className="mt-4 pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
                              <span aria-hidden="true">💛</span>
                              <span><strong className="text-slate-700">Charity:</strong> {run.charity}</span>
                            </div>
                          )}
                        </div>
                      </article>
                    </div>
                  </div>

                  {/* Spacer — desktop only */}
                  <div className={`hidden lg:block ${isEven ? "lg:order-2" : "lg:order-1"}`} />

                  {/* Mobile spacer */}
                  {i < runHistory.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4" aria-hidden="true">
                      <div className="w-px h-8 bg-slate-200" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — Join 2026 */}
      <section className="section-pad bg-brand-blue relative overflow-hidden" aria-label="Register for 2026">
        <div className="absolute inset-0 opacity-10" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #FDCB0A, transparent 50%), radial-gradient(circle at 80% 50%, #EC2B2A, transparent 50%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-xs font-semibold text-brand-yellow tracking-widest uppercase mb-6">
            ✈ Next Chapter
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            You Could Be in Our 2026 Story
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            BNG Run 2026 comes to OCBC Square, Kallang Wave Mall on <strong className="text-white">May 17, 2026</strong>. Join the 7th run — the biggest yet, presented by Philippine Airlines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              ✈ Register for PAL RUN 2026
            </a>
            <Link href="/gallery" className="btn-secondary text-base px-8 py-4">
              View Gallery →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
