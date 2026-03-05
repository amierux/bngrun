"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { members } from "@/data/members";

export function FoundingMembers() {
  return (
    <section
      id="founding-members"
      className="section-pad bg-slate-50"
      aria-labelledby="founding-members-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <span className="section-label">The Seven Founders</span>
          <h2
            id="founding-members-heading"
            className="text-4xl sm:text-5xl font-bold text-brand-blue mb-4"
          >
            Founding Member Companies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Seven companies. One shared mission. Together they built BNG — Singapore&apos;s most trusted Filipino business network.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member) => (
            <StaggerItem key={member.slug}>
              <Link href={`/members/${member.slug}`} className="block group h-full">
                <article
                  className="h-full rounded-2xl border border-slate-100 bg-white p-6 flex flex-col gap-4 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 hover:-translate-y-1 transition-all duration-300"
                  style={{ borderTopColor: member.brandColor, borderTopWidth: "3px" }}
                >
                  {/* Member logo */}
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center p-1.5 flex-shrink-0 shadow-sm border border-slate-100">
                    <Image
                      src={member.logo}
                      alt={member.name}
                      width={44}
                      height={44}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {member.shortName}
                    </p>
                    <h3 className="font-bold text-brand-blue text-base leading-tight mb-2 group-hover:text-brand-red transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-500 italic mb-3">&ldquo;{member.tagline}&rdquo;</p>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {member.description}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-1">
                    {member.services.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold mt-auto pt-2 border-t border-slate-100">
                    <span style={{ color: member.brandColor }}>View Profile</span>
                    <span className="text-slate-300 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
