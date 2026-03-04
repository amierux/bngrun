"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { event, categories } from "@/data/event";

export function EventDetails() {
  return (
    <section
      id="event-details"
      className="section-pad bg-slate-50"
      aria-labelledby="event-details-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <span className="section-label">Race Day Info</span>
          <h2
            id="event-details-heading"
            className="text-4xl sm:text-5xl font-bold text-brand-blue mb-4"
          >
            Event Details
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <AnimateIn delay={0.1}>
            <div className="space-y-4">
              {[
                { label: "Event Name", value: event.name, icon: "🏁" },
                { label: "Date", value: `${event.day}, ${event.date}`, icon: "📅" },
                { label: "Venue", value: event.venue, icon: "📍" },
                { label: "Course", value: event.route, icon: "🗺️" },
                { label: "Registration Closes", value: event.registrationDeadline, icon: "⏰" },
              ].map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-brand-blue/20 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">{detail.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{detail.label}</p>
                    <p className="text-slate-800 font-medium mt-0.5">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Gun start schedule */}
          <AnimateIn delay={0.2}>
            <div className="bg-brand-blue rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6 text-brand-yellow">Gun Start Schedule</h3>
              <div className="space-y-4">
                {categories.map((cat) => (
                  <div
                    key={cat.shortLabel}
                    className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl" aria-hidden="true">{cat.icon}</span>
                      <div>
                        <p className="font-semibold">{cat.label}</p>
                        <p className="text-white/50 text-xs">{cat.distance}</p>
                      </div>
                    </div>
                    <span className="text-brand-yellow font-bold text-lg tabular-nums">
                      {cat.gunStart}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-xl text-sm text-white/70">
                <p className="font-semibold text-white mb-1">📋 Note</p>
                <p>All times are Philippine Standard Time (PST, UTC+8). Please be at the start line at least 30 minutes before your gun start.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
