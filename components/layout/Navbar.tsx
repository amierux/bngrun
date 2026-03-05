"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { event } from "@/data/event";

const navLinks = [
  { href: "/", label: "PAL RUN 2026" },
  { href: "/bng", label: "About BNG" },
  { href: "/runs", label: "Past Runs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-brand-blue/90 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="PAL RUN 2026 Home">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden p-1 flex-shrink-0">
            <Image src="/logos/pal.png" alt="Philippine Airlines" width={28} height={28} className="object-contain w-full h-full" />
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-bold text-sm leading-none">PAL RUN 2026</p>
            <p className="text-white/60 text-xs">BNG Run — {event.date}</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1" role="navigation">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-brand-yellow bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-5 py-2.5 hidden sm:inline-flex"
          >
            Register Now
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={cn("block h-0.5 bg-white transition-all duration-300", menuOpen && "rotate-45 translate-y-1.5")} />
              <span className={cn("block h-0.5 bg-white transition-all duration-300", menuOpen && "opacity-0")} />
              <span className={cn("block h-0.5 bg-white transition-all duration-300", menuOpen && "-rotate-45 -translate-y-1.5")} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden"
          >
            <div className="backdrop-blur-xl bg-brand-blue/95 border-t border-white/10 px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors font-medium min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 text-sm"
              >
                Register Now ✈
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
