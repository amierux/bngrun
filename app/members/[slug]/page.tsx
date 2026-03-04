import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { members, getMemberBySlug, getAllSlugs } from "@/data/members";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = getMemberBySlug(params.slug);
  if (!member) return { title: "Member Not Found" };

  return {
    title: `${member.name} | BNG Founding Member`,
    description: `${member.description} A founding member of BNG Singapore — the premier Filipino business group.`,
    openGraph: {
      title: `${member.name} — BNG Founding Member`,
      description: member.description,
    },
    alternates: {
      canonical: `https://palrun2026.com/members/${member.slug}`,
    },
  };
}

export default function MemberPage({ params }: Props) {
  const member = getMemberBySlug(params.slug);
  if (!member) notFound();

  const socials = [
    { label: "Website", href: member.website, icon: "🌐" },
    { label: "Facebook", href: member.facebook, icon: "📘" },
    { label: "Instagram", href: member.instagram, icon: "📸" },
    { label: "LinkedIn", href: member.linkedin, icon: "💼" },
    { label: "Twitter/X", href: member.twitter, icon: "𝕏" },
  ].filter((s) => s.href);

  const otherMembers = members.filter((m) => m.slug !== member.slug);

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: member.name,
            description: member.description,
            url: member.website ?? undefined,
            sameAs: [member.facebook, member.instagram, member.linkedin, member.twitter].filter(Boolean),
            memberOf: {
              "@type": "Organization",
              name: "Business Network Group (BNG)",
              url: "https://palrun2026.com/bng",
            },
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end overflow-hidden pt-16"
        aria-label={`${member.name} Hero`}
        style={{
          background: `linear-gradient(135deg, ${member.brandColor} 0%, #020f2b 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, ${member.accentColor}, transparent 60%)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-10 w-full">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/bng" className="hover:text-white transition-colors">BNG</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/80">{member.shortName}</li>
            </ol>
          </nav>

          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
            {/* Logo placeholder */}
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 shadow-2xl"
              style={{ backgroundColor: `${member.accentColor}30`, border: `2px solid ${member.accentColor}60` }}
              aria-hidden="true"
            >
              {member.shortName.charAt(0)}
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-xs font-semibold text-white/70 tracking-wider uppercase mb-3">
                BNG Founding Member
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">{member.name}</h1>
              <p className="text-lg text-white/70 italic">&ldquo;{member.tagline}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">About {member.shortName}</h2>
              <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line">
                {member.longDescription}
              </p>

              {/* Services */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-brand-blue mb-4">Services & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {member.services.map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: member.brandColor }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Placeholder notice */}
              {member.placeholder && (
                <div className="mt-8 p-4 rounded-xl border border-brand-yellow/30 bg-brand-yellow/5">
                  <p className="text-sm text-slate-600">
                    <strong className="text-brand-blue">📋 Note:</strong> Full company profile and website coming soon. Connect via Facebook for the latest updates.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Connect */}
              <div className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-bold text-brand-blue mb-4">Connect</h3>
                <div className="space-y-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group min-h-[44px]"
                    >
                      <span className="text-xl" aria-hidden="true">{s.icon}</span>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-brand-blue transition-colors">
                        {s.label}
                      </span>
                      <span className="ml-auto text-slate-300 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
                    </a>
                  ))}
                  {socials.length === 0 && (
                    <p className="text-sm text-slate-400 italic">No public links available.</p>
                  )}
                </div>
              </div>

              {/* BNG card */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: `linear-gradient(135deg, ${member.brandColor}, #020f2b)` }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">Part of</p>
                <p className="font-bold text-lg mb-2">Business Network Group</p>
                <p className="text-sm text-white/70 mb-4">Singapore&apos;s premier Filipino business community</p>
                <Link
                  href="/bng"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline"
                >
                  Meet all 7 founders →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other members */}
      <section className="section-pad bg-slate-50" aria-label="Other founding members">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-blue mb-8 text-center">Other Founding Members</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherMembers.map((m) => (
              <Link
                key={m.slug}
                href={`/members/${m.slug}`}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-100 bg-white hover:border-brand-blue/20 hover:shadow-md transition-all duration-200"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: m.brandColor }}
                  aria-hidden="true"
                >
                  {m.shortName.charAt(0)}
                </div>
                <p className="text-xs font-semibold text-slate-600 text-center group-hover:text-brand-blue transition-colors leading-tight">
                  {m.shortName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
