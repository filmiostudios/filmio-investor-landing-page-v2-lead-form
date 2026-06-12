import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_EMBED_URL =
  "https://player.vimeo.com/video/1200645001?badge=0&autopause=0&player_id=0&app_id=58479";

const LEAD_MAGNET_IMAGE = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/filmio-investor-presentation-cover.jpg`;

// ─────────────────────────────────────────────
// VideoEmbed — unchanged from original
// ─────────────────────────────────────────────
function VideoEmbed() {
  return (
    <div className="media-frame group overflow-hidden rounded-[1.35rem] border border-filmio-sea/20 bg-black/45 shadow-2xl shadow-filmio-sea/10 md:rounded-[1.6rem]">
      <div className="relative aspect-video w-full">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={HERO_VIDEO_EMBED_URL}
          title="SpaceX_-_Vertov_7_-_Landing_Page_Book_Your_Call_Now_with_captions"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// LeadMagnetImage — replaces CanvaEmbed
// Shows the presentation cover with a dark overlay and bold CTA text.
// An animated arrow points toward the form on the right.
// ─────────────────────────────────────────────
function LeadMagnetImage({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "mt-3" : "mt-8"}>
      {/* Outer wrapper mirrors the original CanvaEmbed aspect-ratio container */}
      <div
        className="media-frame group relative h-0 w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-black shadow-lg md:rounded-[1.45rem]"
        style={{ paddingTop: "56.25%" }}
      >
        {/* Presentation cover image */}
        <img
          src={LEAD_MAGNET_IMAGE}
          alt="Filmio Investor Presentation Cover"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/62 backdrop-blur-[1px]" />

        {/* Lock icon */}
        <div className="absolute left-1/2 top-5 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-filmio-sea/40 bg-black/60 shadow-[0_0_24px_rgba(0,174,239,0.22)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-filmio-sea"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        {/* Bold CTA text */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end gap-3 px-5 pb-5 text-center">
          <p className="font-display text-[clamp(0.85rem,1.6vw,1.15rem)] font-extrabold leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Get access to Filmio&apos;s confidential investor presentation.{" "}
            <span className="text-filmio-sea">Complete the form for access.</span>
          </p>

          {/* Arrow + label pointing right (desktop) / down (mobile) */}
          <div className="flex items-center gap-2 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
            <span className="hidden xl:inline">Fill out the form</span>
            {/* Desktop: arrow right */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden h-5 w-5 animate-bounce-x text-filmio-sea xl:block"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            {/* Mobile: arrow down */}
            <span className="xl:hidden">Fill out the form</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 animate-bounce text-filmio-sea xl:hidden"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="5 12 12 19 19 12" />
            </svg>
          </div>
        </div>
      </div>

      {/* Sub-line below image (mirrors the "Expand deck on this page" row) */}
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="font-body text-xs text-white/38">
          Confidential &amp; Proprietary · Accredited investors only
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MockGHLForm — replaces the GHL booking calendar iframe.
// Keep the same outer shell (#highlevel-embed) and dimensions.
// ── REPLACE THIS ENTIRE INNER CONTENT with your real GHL embed code ──
// ─────────────────────────────────────────────
function MockGHLForm() {
  const [submitted, setSubmitted] = useState(false);
  const firstRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstRef.current?.focus();
  }, []);

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 px-6 py-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-filmio-green/40 bg-filmio-green/15 shadow-[0_0_32px_rgba(0,200,100,0.18)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-filmio-green">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="font-display text-xl font-extrabold text-white">You&apos;re on the list.</p>
        <p className="font-body text-sm leading-relaxed text-white/55">
          We&apos;ll send the investor presentation to your inbox shortly.
        </p>
      </div>
    );
  }

  return (
    /* ── MOCK FORM — replace this entire form element with your GHL embed code ── */
    <form
      className="flex h-full flex-col gap-3 px-1 py-1"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
            First Name <span className="text-filmio-sea">*</span>
          </label>
          <input
            ref={firstRef}
            required
            type="text"
            placeholder="Jane"
            className="rounded-xl border border-white/12 bg-white/[0.05] px-3 py-2.5 font-body text-sm text-white placeholder-white/25 outline-none transition-all focus:border-filmio-sea/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-filmio-sea/30"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
            Last Name <span className="text-filmio-sea">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="Smith"
            className="rounded-xl border border-white/12 bg-white/[0.05] px-3 py-2.5 font-body text-sm text-white placeholder-white/25 outline-none transition-all focus:border-filmio-sea/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-filmio-sea/30"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
          Email Address <span className="text-filmio-sea">*</span>
        </label>
        <input
          required
          type="email"
          placeholder="jane@example.com"
          className="rounded-xl border border-white/12 bg-white/[0.05] px-3 py-2.5 font-body text-sm text-white placeholder-white/25 outline-none transition-all focus:border-filmio-sea/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-filmio-sea/30"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="+1 (555) 000-0000"
          className="rounded-xl border border-white/12 bg-white/[0.05] px-3 py-2.5 font-body text-sm text-white placeholder-white/25 outline-none transition-all focus:border-filmio-sea/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-filmio-sea/30"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5">
        <input
          id="accredited"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-filmio-sea"
        />
        <span className="font-body text-xs leading-relaxed text-white/50">
          I confirm I am an accredited investor and agree to receive communications from Filmio Studios.
        </span>
      </label>

      <button
        type="submit"
        className="mt-auto w-full rounded-2xl bg-filmio-sea px-6 py-3.5 font-body text-sm font-bold text-black shadow-[0_0_32px_rgba(0,174,239,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-filmio-sea/90 hover:shadow-[0_0_48px_rgba(0,174,239,0.38)] focus:outline-none focus:ring-2 focus:ring-filmio-sea/60"
      >
        Send Me the Presentation →
      </button>

      <p className="text-center font-body text-[10px] text-white/28">
        Your information is kept strictly confidential · No spam, ever
      </p>
    </form>
    /* ── END MOCK FORM ── */
  );
}

// ─────────────────────────────────────────────
// HeroFormPanel — outer shell is identical to original HeroBookingPanel
// ─────────────────────────────────────────────
function HeroFormPanel() {
  return (
    <div
      className="booking-shell hero-booking-shell flex h-full w-full flex-col overflow-hidden rounded-[1.55rem] border border-white/10 p-3 md:rounded-[1.7rem] md:p-4"
      id="highlevel-embed"
    >
      <div className="mb-3 rounded-2xl border border-filmio-sea/20 bg-filmio-sea/5 px-4 py-3 text-center">
        <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-filmio-sea">
          Get Instant Access
        </p>
        <p className="mx-auto mt-1.5 max-w-xl font-body text-sm leading-relaxed text-white/58">
          Access the Investor Presentation
        </p>
        <p className="mx-auto mt-1 max-w-xl font-body text-xs leading-relaxed text-white/40">
          Complete the form below to receive Filmio&apos;s confidential investor deck.
        </p>
      </div>

      <div className="hero-calendar-frame w-full flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        <MockGHLForm />
      </div>
    </div>
  );
}

export { VideoEmbed, HERO_VIDEO_EMBED_URL };

export function HeroSection() {
  return (
    <section className="hero-stage hero-stage-conversion relative overflow-hidden" id="hero">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute left-8 top-28 h-72 w-72 rounded-full bg-filmio-green/10 blur-[110px]" />
        <div className="absolute right-[-8rem] top-40 h-[520px] w-[520px] rounded-full bg-filmio-pink/10 blur-[130px]" />
        <div className="hero-grid-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1420px] px-5 pb-10 pt-3 md:px-10 md:pb-14 md:pt-5">
        <div className="mx-auto mb-3 max-w-6xl text-center md:mb-4">
          <h1 className="mx-auto max-w-6xl font-display text-[clamp(2.1rem,4.35vw,4.45rem)] font-extrabold leading-[0.92] tracking-tight text-foreground">
            The Stories That Shape Culture Shouldn&apos;t Be Chosen by Guesswork.
          </h1>
          <p className="mx-auto mt-3 max-w-4xl font-body text-sm leading-relaxed text-white/68 md:text-lg">
            Filmio is building the AI Intelligence Infrastructure for entertainment: demand signal, predictive intelligence, vertical AI agents, studio execution, and capital deployment.
          </p>
        </div>

        <div className="hero-command-center conversion-cockpit pitch-cockpit grid gap-4 rounded-[2rem] border border-white/10 p-3 md:p-4 xl:grid-cols-[minmax(0,0.92fr)_minmax(440px,0.82fr)] xl:items-stretch">
          {/* Left column: video + lead magnet image (replaces video + Canva deck) */}
          <div className="hero-media-column p-1 md:p-2">
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-filmio-sea">
                  Investor briefing
                </p>
              </div>
              <span className="hidden rounded-full border border-filmio-green/20 bg-filmio-green/10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-filmio-green sm:inline-flex">
                Vertov / Filmio
              </span>
            </div>
            <div className="hero-media-stack-compact">
              <VideoEmbed />
              <LeadMagnetImage compact />
            </div>
          </div>

          {/* Right column: GHL form (replaces booking calendar) */}
          <HeroFormPanel />
        </div>

        {/* AI value signals row — unchanged */}
        <div className="hero-comparable-logos mx-auto mt-5 grid max-w-5xl gap-2 sm:grid-cols-2 lg:grid-cols-[1.25fr_repeat(5,minmax(0,1fr))] lg:items-center">
          <p className="hero-comparable-label font-body text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
            Frontier AI and Vertical AI value signals
          </p>
          {[
            ["OpenAI", "~$1T"],
            ["Anthropic", "~$1T"],
            ["Cursor", "~$60B"],
            ["Harvey", "~$11B"],
            ["Sierra", "~$10B"],
          ].map(([name, value]) => (
            <div key={name} className="hero-value-signal">
              <strong>{value}</strong>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
