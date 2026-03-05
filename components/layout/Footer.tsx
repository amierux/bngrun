import Link from "next/link";

const footerLinks = {
  "PAL RUN 2026": [
    { label: "Why Join", href: "/#why-join" },
    { label: "Race Categories", href: "/#categories" },
    { label: "Prizes", href: "/#prizes" },
    { label: "How to Register", href: "/#register" },
    { label: "Past Runs", href: "/runs" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/#faq" },
  ],
  "BNG Community": [
    { label: "About BNG", href: "/bng" },
    { label: "HFSE", href: "/members/hfse" },
    { label: "LBC Express", href: "/members/lbc" },
    { label: "Megaworld", href: "/members/megaworld" },
    { label: "Noble Life", href: "/members/noble-life" },
    { label: "MDC Prime", href: "/members/mdc-prime" },
    { label: "PNB Singapore", href: "/members/pnb" },
    { label: "Philippine Airlines", href: "/members/pal" },
  ],
};

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/flypal/", icon: "📸" },
  { label: "Twitter/X", href: "https://twitter.com/flyPAL", icon: "𝕏" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/philippine-airlines/", icon: "in" },
];

export function Footer() {
  return (
    <footer className="bg-[#020f2b] border-t border-white/10 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-brand-yellow font-bold">✈</span>
              </div>
              <div>
                <p className="text-white font-bold text-base">PAL RUN 2026</p>
                <p className="text-white/50 text-xs">BNG Run — May 17, 2026 · Singapore</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              Uniting the Filipino community in Singapore through fitness, camaraderie, and a shared commitment to well-being. Run. Unite. Give Back.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-xs text-white/40">Organized by</span>
              <a
                href="/bng"
                className="text-brand-yellow text-xs font-semibold hover:text-brand-yellow/80 transition-colors"
              >
                Business Network Group (BNG)
              </a>
            </div>
            {/* Social */}
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs hover:bg-white/15 hover:border-white/25 transition-all duration-200 min-w-[36px] min-h-[36px]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} PAL RUN 2026 / Business Network Group. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/30">
            <span>Proudly built by</span>
            <span className="text-brand-yellow font-semibold">VizServe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
