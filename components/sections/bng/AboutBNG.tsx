"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";

const pillars = [
  { icon: "🤝", title: "Unity", description: "Bringing together Filipino businesses and community members across Singapore under one strong network." },
  { icon: "📈", title: "Growth", description: "Supporting Filipino entrepreneurs and companies to thrive in Singapore's competitive business landscape." },
  { icon: "🇵🇭", title: "Heritage", description: "Celebrating and preserving Filipino culture, identity, and values within the Singapore community." },
  { icon: "🌟", title: "Excellence", description: "Championing world-class standards in everything we do — from business to community events." },
];

export function AboutBNG() {
  return (
    <section
      id="about-bng"
      className="section-pad bg-white"
      aria-labelledby="about-bng-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <span className="section-label">Our Story</span>
            <h2
              id="about-bng-heading"
              className="text-4xl sm:text-5xl font-bold text-brand-blue mb-6"
            >
              More Than a Business Group
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                The <strong className="text-brand-blue">Business Network Group (BNG)</strong> is Singapore&apos;s premier Filipino business organization, founded by seven companies with a shared conviction: that the Filipino community in Singapore deserves a strong, unified voice.
              </p>
              <p>
                Established by <strong>HFSE, LBC Express, Megaworld International, Noble Life International, MDC Prime Consulting, Philippine National Bank Singapore, and Philippine Airlines</strong>, BNG brings together the best of Filipino enterprise to serve, celebrate, and strengthen the community.
              </p>
              <p>
                From the iconic BNG Fun Run to business networking events, BNG creates opportunities for Filipinos in Singapore to connect, grow, and give back — building a legacy that future generations can be proud of.
              </p>
            </div>
            <a href="#founding-members" className="btn-primary inline-flex mt-8 text-sm">
              Meet Our Founding Members ↓
            </a>
          </AnimateIn>

          {/* Pillars */}
          <AnimateIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group p-5 rounded-2xl border border-slate-100 hover:border-brand-blue/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-3xl mb-3" aria-hidden="true">{pillar.icon}</div>
                  <h3 className="font-bold text-brand-blue mb-1">{pillar.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
