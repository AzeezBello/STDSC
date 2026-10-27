"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ShieldAlert, CheckCircle2, School, Handshake, Cpu } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    // Sync aria-invalid with native :user-invalid or fallback state
    const dirtyState = new WeakMap<Element, { hasInteracted: boolean; hasBlurred: boolean }>();
    const supportsUserInvalid =
      typeof CSS !== "undefined" && CSS.supports("selector(:user-invalid)");

    const syncAriaAndFallback = (el: EventTarget | null) => {
      if (!(el instanceof HTMLElement)) return;
      const input = el as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      if (typeof input.checkValidity !== "function") return;

      if (supportsUserInvalid) {
        const isUserInvalid = input.matches(":user-invalid");
        input.setAttribute("aria-invalid", isUserInvalid ? "true" : "false");
      } else {
        const isValid = input.checkValidity();
        input.classList.toggle("user-invalid-fallback", !isValid);
        input.classList.toggle("user-valid-fallback", isValid);
        if (!isValid) {
          input.setAttribute("aria-invalid", "true");
        } else {
          input.removeAttribute("aria-invalid");
        }
      }
    };

    const handleBlur = (e: Event) => {
      const target = e.target as Element;
      if (!target) return;
      const state = dirtyState.get(target) || { hasInteracted: false, hasBlurred: false };
      state.hasBlurred = true;
      dirtyState.set(target, state);
      if (supportsUserInvalid || state.hasInteracted) {
        syncAriaAndFallback(target);
      }
    };

    const handleInput = (e: Event) => {
      const target = e.target as Element;
      if (!target) return;
      const state = dirtyState.get(target) || { hasInteracted: false, hasBlurred: false };
      state.hasInteracted = true;
      dirtyState.set(target, state);
      if (target.hasAttribute("aria-invalid") || state.hasBlurred) {
        syncAriaAndFallback(target);
      }
    };

    form.addEventListener("blur", handleBlur, true);
    form.addEventListener("input", handleInput);
    form.addEventListener("change", handleInput);

    return () => {
      form.removeEventListener("blur", handleBlur, true);
      form.removeEventListener("input", handleInput);
      form.removeEventListener("change", handleInput);
    };
  }, [submitted]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {/* Page Hero */}
      <section className="hero-surface relative overflow-hidden text-white">
        <div className="subtle-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
              Connect With Us
            </p>
            <h1 className="section-heading mt-2 font-extrabold tracking-tight text-white">
              Contact the STDSC Organising Team
            </h1>
            <p className="prose-measure mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
              Use the enquiry form below for school expressions of interest (Debate, STEM Olympiad,
              or Innovation Showcase), corporate sponsorship, or Young Leaders Network &amp; STEM
              Labs questions.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Enquiry Pathways */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Enquiry Pathways</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Select the relevant topic in the form so our team can direct your enquiry to the
                appropriate coordinator.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: School,
                  title: "Secondary Schools",
                  desc: "Register interest for Debate teams, STEM Olympiad squads, and Innovation Showcase projects.",
                },
                {
                  icon: Handshake,
                  title: "Sponsors & Institutional Partners",
                  desc: "Request the Sponsor Package outline, discuss STEM lab grants, or propose named awards.",
                },
                {
                  icon: Cpu,
                  title: "Young Leaders & STEM Mentors",
                  desc: "Enquire about hosting a coding/robotics workshop, adjudicating debates, or judging STEM projects.",
                },
              ].map((pathway) => (
                <div
                  key={pathway.title}
                  className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary)] text-[var(--primary)]">
                    <pathway.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{pathway.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                      {pathway.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[var(--secondary-warm)] p-5 text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <MapPin className="h-4 w-4 text-[var(--primary)]" />
                <span>Location &amp; Contact Status</span>
              </div>
              <p>
                Surulere Local Government Area, Lagos, Nigeria. Official email addresses, phone
                numbers, and physical venue address are placeholders until formally announced by the
                organising committee.
              </p>
            </div>
          </div>

          {/* Right Column: Accessible Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
              {submitted ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-6 text-emerald-950">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-6 w-6 text-emerald-700" />
                    <h2 className="text-lg font-bold">Thank you for your enquiry</h2>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">
                    Your message has been recorded in demo mode. Once the production messaging
                    service is connected, the STDSC organising team will respond via the email
                    address you provided.
                  </p>
                  <Button
                    className="mt-6"
                    variant="default"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                      Full name <span className="text-red-600">*</span>
                    </label>
                    <span id="name-hint" className="mt-0.5 block text-xs text-[var(--muted)]">
                      Enter the name of the school coordinator, sponsor representative, or enquirer.
                    </span>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      autoComplete="name"
                      aria-describedby="name-hint"
                      aria-errormessage="name-error"
                      className="form-control mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <div id="name-error" className="error-msg">
                      <span aria-hidden="true">❌</span> Please enter your full name (at least 2
                      characters).
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                      Email address <span className="text-red-600">*</span>
                    </label>
                    <span id="email-hint" className="mt-0.5 block text-xs text-[var(--muted)]">
                      Format: coordinator@school.edu.ng or name@organisation.com
                    </span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      aria-describedby="email-hint"
                      aria-errormessage="email-error"
                      className="form-control mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <div id="email-error" className="error-msg">
                      <span aria-hidden="true">❌</span> Please enter a valid email address.
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="organisation"
                        className="block text-sm font-semibold text-slate-900"
                      >
                        School or Organisation
                      </label>
                      <span
                        id="org-hint"
                        className="mt-0.5 block text-xs text-[var(--muted)]"
                      >
                        Optional — e.g. Secondary School or Company
                      </span>
                      <input
                        id="organisation"
                        name="organisation"
                        type="text"
                        autoComplete="organization"
                        aria-describedby="org-hint"
                        className="form-control mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="topic"
                        className="block text-sm font-semibold text-slate-900"
                      >
                        Enquiry Topic
                      </label>
                      <span
                        id="topic-hint"
                        className="mt-0.5 block text-xs text-[var(--muted)]"
                      >
                        Choose the primary area of interest
                      </span>
                      <select
                        id="topic"
                        name="topic"
                        aria-describedby="topic-hint"
                        className="form-control mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      >
                        <option value="school-all">
                          School Interest — Debate &amp; STEM Tracks
                        </option>
                        <option value="school-debate">School Interest — Debate Track Only</option>
                        <option value="school-stem">
                          School Interest — STEM Olympiad / Showcase
                        </option>
                        <option value="sponsor">Sponsorship &amp; Institutional Partnership</option>
                        <option value="yln">Young Leaders Network &amp; STEM Labs</option>
                        <option value="volunteer">Adjudicator / STEM Judge / Mentor</option>
                        <option value="general">General / Media Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <span id="message-hint" className="mt-0.5 block text-xs text-[var(--muted)]">
                      Share your enquiry or let us know which tracks your school or organisation is
                      interested in supporting.
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      rows={4}
                      aria-describedby="message-hint"
                      aria-errormessage="message-error"
                      className="form-control mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <div id="message-error" className="error-msg">
                      <span aria-hidden="true">❌</span> Please enter a brief message (at least 10
                      characters).
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-950">
                    <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <p>
                      <strong>Safeguarding Notice:</strong> Do not submit personal information about
                      individual students (such as student names, dates of birth, or contact
                      details) through this public enquiry form.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Mail className="h-4 w-4" />
                    Send Enquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
