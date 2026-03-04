import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      <div className="absolute inset-0 bg-brand-blue/70" aria-hidden="true" />

      {/* Animated sunburst */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="w-[600px] h-[600px] text-brand-yellow fill-current animate-[spin_120s_linear_infinite]">
          {Array.from({ length: 8 }).map((_, i) => (
            <polygon
              key={i}
              points="100,5 106,70 100,80 94,70"
              transform={`rotate(${i * 45}, 100, 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="20" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 py-20">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-semibold text-brand-yellow tracking-widest uppercase mb-8">
          <span>✈</span>
          <span>PAL RUN 2026</span>
        </div>

        <div className="text-[10rem] font-bold text-white/10 leading-none select-none" aria-hidden="true">
          404
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white -mt-8 mb-4">
          Page Not Found
        </h1>
        <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
          Looks like this page went off-course. Let&apos;s get you back to the starting line.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary text-base px-8 py-4">
            ✈ Back to PAL RUN 2026
          </Link>
          <Link href="/bng" className="btn-secondary text-base px-8 py-4">
            About BNG
          </Link>
        </div>
      </div>
    </section>
  );
}
