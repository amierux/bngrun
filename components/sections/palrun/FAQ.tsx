"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { faqs } from "@/data/event";

function FAQItem({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div className="border border-slate-100 rounded-xl overflow-hidden hover:border-brand-blue/20 transition-colors">
      <button
        id={id}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors min-h-[56px] gap-4"
      >
        <span className="font-semibold text-brand-blue text-sm sm:text-base">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-sm"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="section-pad bg-slate-50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <span className="section-label">Got Questions?</span>
          <h2 id="faq-heading" className="text-4xl sm:text-5xl font-bold text-brand-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Everything you need to know before race day.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3} className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Still have questions?{" "}
            <a
              href="mailto:info@manilamarathon.com"
              className="text-brand-blue font-semibold hover:underline"
            >
              Contact the race organizers
            </a>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
