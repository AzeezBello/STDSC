"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      {/* Editorial Hero */}
      <section className="hero-surface relative overflow-hidden border-b border-white/15 text-white">
        <div className="subtle-grid-pattern pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="hero-heading font-bold text-white">
              Contact the STDSC Organising Team
            </h1>
            <p className="prose-measure mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
              Use the enquiry form below for school expressions of interest across Debate, the STEM
              Olympiad, or the Innovation Showcase, as well as corporate sponsorship and Young
              Leaders Network enquiries.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Architectural Pathways Ledger */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <p className="editorial-kicker text-[var(--primary)]">
                § 02 / ENQUIRY ROUTING
              </p>
              <h2 className="sub-heading mt-2 font-bold text-slate-900">
                Directing your enquiry
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Select the relevant category in the form so our team can assign your message to the
                appropriate track coordinator.
              </p>
            </div>

            <div className="divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-white">
              {[
                {
                  code: "DESK-01",
                  title: "Secondary School Delegations",
                  desc: "Register interest for Debate teams, STEM Olympiad squads, and Innovation Showcase projects.",
                },
                {
                  code: "DESK-02",
                  title: "Sponsors & Institutional Partners",
                  desc: "Request the Sponsor Package outline, discuss STEM lab grants, or propose named category awards.",
                },
                {
                  code: "DESK-03",
                  title: "Young Leaders & STEM Mentors",
                  desc: "Enquire about hosting a coding or robotics workshop, adjudicating debates, or judging STEM projects.",
                },
              ].map((pathway) => (
                <div key={pathway.code} className="p-5">
                  <span className="font-mono-tech text-xs font-bold text-[var(--primary)]">
                    {pathway.code}
                  </span>
                  <h3 className="mt-1.5 text-sm font-bold text-slate-900">{pathway.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                    {pathway.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-[var(--border)] bg-[var(--secondary)] p-5 text-xs leading-relaxed text-slate-700">
              <strong className="font-mono-tech block uppercase text-[var(--primary)]">
                JURISDICTION &amp; PLACEHOLDER DISCLOSURE
              </strong>
              <p className="mt-1.5">
                Surulere Local Government Area, Lagos, Nigeria. Official email addresses, phone
                numbers, and physical venue address are marked as placeholders until formally
                announced by the organising committee.
              </p>
            </div>
          </div>

          {/* Right Column: Accessible Form */}
          <div className="lg:col-span-7">
            <div className="rounded-md border border-[var(--border)] bg-white p-6 sm:p-10">
              {submitted ? (
                <div className="rounded-md border border-emerald-300 bg-emerald-50/70 p-6 text-emerald-950">
                  <span className="font-mono-tech text-xs font-bold uppercase text-emerald-800">
                    STATUS / RECORDED IN DEMO MODE
                  </span>
                  <h2 className="sub-heading mt-2 font-bold">Thank you for your enquiry</h2>
                  <p className="mt-2.5 text-sm leading-relaxed">
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
                      className="form-control mt-1.5 w-full rounded-md border border-[var(--border-strong)] bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
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
                      className="form-control mt-1.5 w-full rounded-md border border-[var(--border-strong)] bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
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
                      <span id="org-hint" className="mt-0.5 block text-xs text-[var(--muted)]">
                        Optional (e.g. Secondary School or Company)
                      </span>
                      <input
                        id="organisation"
                        name="organisation"
                        type="text"
                        autoComplete="organization"
                        aria-describedby="org-hint"
                        className="form-control mt-1.5 w-full rounded-md border border-[var(--border-strong)] bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="topic" className="block text-sm font-semibold text-slate-900">
                        Enquiry Category
                      </label>
                      <span id="topic-hint" className="mt-0.5 block text-xs text-[var(--muted)]">
                        Choose the primary area of interest
                      </span>
                      <select
                        id="topic"
                        name="topic"
                        aria-describedby="topic-hint"
                        className="form-control mt-1.5 w-full rounded-md border border-[var(--border-strong)] bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      >
                        <option value="school-all">
                          School Interest: Debate &amp; STEM Tracks
                        </option>
                        <option value="school-debate">School Interest: Debate Track Only</option>
                        <option value="school-stem">
                          School Interest: STEM Olympiad / Showcase
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
                      className="form-control mt-1.5 w-full rounded-md border border-[var(--border-strong)] bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <div id="message-error" className="error-msg">
                      <span aria-hidden="true">❌</span> Please enter a brief message (at least 10
                      characters).
                    </div>
                  </div>

                  <div className="rounded-md border border-[var(--border)] bg-[var(--secondary)] p-4 text-xs text-slate-800">
                    <strong className="font-mono-tech uppercase text-[var(--primary)]">
                      SAFEGUARDING NOTICE:
                    </strong>{" "}
                    Do not submit personal information about individual students (such as student
                    names, dates of birth, or personal contact details) through this public enquiry
                    form.
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Enquiry
                    <ArrowRight className="h-4 w-4" />
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
