"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { galleryItems, galleryYears, type GalleryItem } from "@/data/gallery";
import { event } from "@/data/event";

const categoryColors: Record<string, string> = {
  "Race Day": "#042B67",
  Community: "#EC2B2A",
  Awards: "#b37d00",
  Training: "#062B6A",
  Culture: "#242e76",
};

function VideoIcon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-2xl cursor-pointer text-left ${
        item.tall ? "row-span-2" : ""
      }`}
      style={{
        height: item.tall ? "420px" : item.wide ? "200px" : "200px",
      }}
      aria-label={`View: ${item.caption}`}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style={{ background: item.gradient }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
        aria-hidden="true"
      />

      {/* Video play icon */}
      {item.type === "video" && <VideoIcon />}

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold text-white/90 bg-white/20 rounded-full px-2 py-0.5 backdrop-blur-sm">
            {item.year}
          </span>
          <span
            className="text-xs font-semibold text-white/90 rounded-full px-2 py-0.5"
            style={{ backgroundColor: `${categoryColors[item.category]}80` }}
          >
            {item.category}
          </span>
          {item.type === "video" && (
            <span className="text-xs font-semibold text-white/80 bg-black/30 rounded-full px-2 py-0.5">
              Video
            </span>
          )}
        </div>
        <p className="text-white text-xs leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.caption}
        </p>
      </div>
    </motion.button>
  );
}

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main visual */}
        <div
          className="w-full h-80 sm:h-[440px] relative"
          style={{ background: item.gradient }}
        >
          {item.type === "video" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <svg className="w-9 h-9 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/60 text-sm">Video — Add your footage to bring this to life</p>
            </div>
          )}
          {item.type === "photo" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/40 text-sm text-center px-8">
                Add real photos from BNG Run {item.year} to replace this placeholder
              </p>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Caption area */}
        <div className="bg-[#020f2b] p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-brand-yellow bg-brand-blue rounded-full px-2.5 py-1">
              {item.year}
            </span>
            <span
              className="text-xs font-semibold text-white rounded-full px-2.5 py-1"
              style={{ backgroundColor: `${categoryColors[item.category]}99` }}
            >
              {item.category}
            </span>
            <span className={`text-xs font-semibold rounded-full px-2.5 py-1 ${item.type === "video" ? "bg-red-900/60 text-red-300" : "bg-white/10 text-white/70"}`}>
              {item.type === "video" ? "🎬 Video" : "📷 Photo"}
            </span>
          </div>
          <p className="text-white font-medium leading-relaxed">{item.caption}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered = selectedYear === "all"
    ? galleryItems
    : galleryItems.filter((i) => i.year === selectedYear);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mesh-bg pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020f2b]/95" />

        {/* Floating orbs */}
        {[
          { left: "10%", top: "30%", size: 300, color: "#FDCB0A" },
          { left: "70%", top: "20%", size: 240, color: "#EC2B2A" },
          { left: "40%", top: "60%", size: 180, color: "#042B67" },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{ left: orb.left, top: orb.top, width: orb.size, height: orb.size, backgroundColor: orb.color }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        ))}

        <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-semibold text-brand-yellow tracking-widest uppercase mb-6">
              <span>📸</span>
              <span>6 Years · 30+ Moments</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight">
              BNG Run <span className="text-gradient-pal">Gallery</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Every stride, every smile, every finish line — relive the moments that made BNG Run a community tradition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#020f2b] py-6 sticky top-16 z-40 border-b border-white/10" aria-label="Filter gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <button
              onClick={() => setSelectedYear("all")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                selectedYear === "all"
                  ? "bg-brand-yellow text-brand-blue"
                  : "glass text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              All Years
            </button>
            {galleryYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  selectedYear === year
                    ? "bg-brand-yellow text-brand-blue"
                    : "glass text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-pad bg-slate-950" aria-label="Gallery grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Year heading */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 text-center"
            >
              <p className="text-white/40 text-sm">
                Showing <span className="text-brand-yellow font-semibold">{filtered.length}</span> moments
                {selectedYear !== "all" && ` from ${selectedYear}`}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Masonry grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            <AnimatePresence>
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className={`break-inside-avoid mb-3 ${item.tall ? "row-span-2" : ""}`}
                >
                  <GalleryCard item={item} onClick={() => setSelectedItem(item)} />
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/40">
              <p className="text-4xl mb-4" aria-hidden="true">📷</p>
              <p className="text-lg">No items for this selection.</p>
            </div>
          )}
        </div>
      </section>

      {/* Photo placeholder note */}
      <section className="bg-slate-900 py-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/30 text-sm">
            📷 Gallery placeholders are shown above. Replace gradients with real photos by adding images to{" "}
            <code className="text-brand-yellow/60 text-xs bg-white/5 px-1.5 py-0.5 rounded">public/images/gallery/[year]/</code>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #FDCB0A, transparent 50%), radial-gradient(circle at 80% 50%, #EC2B2A, transparent 50%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Be Part of the 2026 Gallery</h2>
          <p className="text-white/70 text-lg mb-10">
            Register for PAL RUN 2026 on <strong className="text-white">May 17, 2026</strong> at OCBC Square, Kallang Wave Mall, Singapore — and create your own unforgettable moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              ✈ Register Now
            </a>
            <Link href="/runs" className="btn-secondary text-base px-8 py-4">
              View Past Editions →
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
