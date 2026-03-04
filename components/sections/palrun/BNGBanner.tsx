"use client";

import Link from "next/link";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { members } from "@/data/members";

export function BNGBanner() {
  return (
    <section
      className="section-pad bg-brand-blue relative overflow-hidden"
      aria-labelledby="bng-banner-heading"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #FDCB0A, transparent 50%), radial-gradient(circle at 80% 50%, #EC2B2A, transparent 50%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-xs font-semibold text-brand-yellow tracking-widest uppercase mb-6">
              🇵🇭 Proudly Organized By
            </div>
            <h2
              id="bng-banner-heading"
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              Business Network Group
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              PAL RUN 2026 is proudly organized by BNG — Singapore&apos;s premier Filipino business group, founded by seven companies united in their mission to serve the Filipino community.
            </p>
            <Link href="/bng" className="btn-primary inline-flex text-base px-8 py-4">
              Meet the Founding Members →
            </Link>
          </AnimateIn>

          {/* Member avatars */}
          <AnimateIn delay={0.2}>
            <StaggerContainer className="grid grid-cols-4 gap-3">
              {members.map((m) => (
                <StaggerItem key={m.slug}>
                  <Link
                    href={`/members/${m.slug}`}
                    className="group flex flex-col items-center gap-2"
                    title={m.name}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-base shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-200"
                      style={{ backgroundColor: m.brandColor }}
                    >
                      {m.shortName.charAt(0)}
                    </div>
                    <span className="text-white/50 text-xs text-center leading-tight group-hover:text-white transition-colors">
                      {m.shortName}
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
