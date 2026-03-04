"use client";

import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { registrationSteps, event } from "@/data/event";

export function HowToRegister() {
  return (
    <section
      id="register"
      className="section-pad bg-white relative overflow-hidden"
      aria-labelledby="register-heading"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <span className="section-label">Get Started</span>
          <h2
            id="register-heading"
            className="text-4xl sm:text-5xl font-bold text-brand-blue mb-4"
          >
            How to Register
          </h2>
          <p className="text-lg text-slate-600">
            5 simple steps between you and the starting line. Registration closes{" "}
            <strong className="text-brand-red">{event.registrationDeadline}</strong>.
          </p>
        </AnimateIn>

        <StaggerContainer className="relative">
          {/* Connector line */}
          <div
            className="absolute left-[22px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-brand-blue via-brand-red to-brand-yellow hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {registrationSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="flex items-start gap-6">
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-brand-blue text-white font-bold text-sm flex items-center justify-center shadow-lg shadow-brand-blue/30">
                    {step.step}
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-5 border border-slate-100 hover:border-brand-blue/20 hover:shadow-md transition-all duration-200 -mt-1">
                    <h3 className="font-bold text-brand-blue text-lg mb-1">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <AnimateIn delay={0.5} className="mt-12 text-center">
          <a
            href="https://runsignup.com/Race/Events/PH/Manila/manilamarathon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-4 inline-flex"
          >
            ✈ Register on RunSignUp
          </a>
          <p className="mt-3 text-xs text-slate-400">Slots are limited. Secure yours now.</p>
        </AnimateIn>
      </div>
    </section>
  );
}
