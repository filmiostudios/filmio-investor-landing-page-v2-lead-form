import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/bookings/filmio-studios-discovery";
const HERO_VIDEO_EMBED_URL = "https://player.vimeo.com/video/1200645001?badge=0&autopause=0&player_id=0&app_id=58479";
const CANVA_EMBED_URL = "https://www.canva.com/design/DAHLXrRRU2c/fd2PByLcd1haA-Ux9Fq-rA/view?embed";

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

function CanvaEmbed({ compact = false }: { compact?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded]);

  const deckTitle = "Filmio Pitch Deck June 2026";

  return (
    <div className={compact ? "mt-3" : "mt-8"}>
      <div className="media-frame group relative h-0 w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] shadow-lg md:rounded-[1.45rem]" style={{ paddingTop: "56.25%" }}>
        <iframe
          loading="lazy"
          className="absolute left-0 top-0 h-full w-full border-0 p-0"
          src={CANVA_EMBED_URL}
          allowFullScreen
          allow="fullscreen"
          title={deckTitle}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-end bg-gradient-to-t from-black/70 via-black/25 to-transparent p-3 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
          <button
            type="button"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-filmio-sea/35 bg-black/70 px-3 py-2 font-body text-[10px] font-bold uppercase tracking-[0.16em] text-filmio-sea shadow-[0_0_24px_rgba(0,174,239,0.16)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-filmio-green/50 hover:text-filmio-green focus:outline-none focus:ring-2 focus:ring-filmio-sea/60"
            aria-haspopup="dialog"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded(true)}
          >
            Expand deck
            <span aria-hidden="true" className="text-sm leading-none">↗</span>
          </button>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="button"
          className="inline-flex font-body text-xs font-bold text-filmio-sea underline-offset-4 transition-colors hover:text-filmio-green hover:underline focus:outline-none focus:ring-2 focus:ring-filmio-sea/50"
          onClick={() => setIsExpanded(true)}
        >
          Expand deck on this page
        </button>
      </div>

      {isExpanded
        ? createPortal(
            <div
              className="deck-lightbox fixed inset-0 z-[100] flex items-center justify-center bg-black/82 p-3 backdrop-blur-xl md:p-6"
              role="dialog"
              aria-modal="true"
              aria-label="Expanded Filmio pitch deck"
              onPointerDown={(event) => {
                if (event.target === event.currentTarget) {
                  setIsExpanded(false);
                }
              }}
            >
              <div
                className="deck-lightbox-panel relative w-full max-w-[min(96vw,1500px)] rounded-[1.35rem] border border-filmio-sea/25 bg-[#040b12] p-2 shadow-[0_0_80px_rgba(0,174,239,0.18)] md:rounded-[1.75rem] md:p-3"
                onPointerDown={(event) => event.stopPropagation()}
              >
                <div className="mb-2 flex items-center justify-between gap-3 px-1 md:mb-3 md:px-2">
                  <div>
                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-filmio-sea">Investor deck</p>
                    <p className="font-body text-xs text-white/48 md:text-sm">Click outside the deck or press Escape to close.</p>
                  </div>
                  <button
                    type="button"
                    className="deck-lightbox-close relative z-20 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 font-body text-2xl leading-none text-white/80 transition-all duration-300 hover:border-filmio-sea/45 hover:bg-filmio-sea/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-filmio-sea/60"
                    aria-label="Close expanded deck"
                    onMouseDown={(event) => {
                      event.stopPropagation();
                      setIsExpanded(false);
                    }}
                    onClick={() => setIsExpanded(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="deck-lightbox-frame relative z-0 w-full overflow-hidden rounded-[1rem] border border-white/10 bg-black md:rounded-[1.25rem]">
                  <iframe
                    className="absolute inset-0 h-full w-full border-0"
                    src={CANVA_EMBED_URL}
                    allowFullScreen
                    allow="fullscreen"
                    title={`${deckTitle} expanded viewer`}
                  />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}

function HeroBookingPanel() {
  return (
    <div className="booking-shell hero-booking-shell flex h-full w-full flex-col overflow-hidden rounded-[1.55rem] border border-white/10 p-3 md:rounded-[1.7rem] md:p-4" id="highlevel-embed">
      <div className="mb-3 rounded-2xl border border-filmio-sea/20 bg-filmio-sea/5 px-4 py-3 text-center">
        <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-filmio-sea">
          Book a 20-Minute Investor Discovery Call
        </p>
        <p className="mx-auto mt-1.5 max-w-xl font-body text-sm leading-relaxed text-white/58">
          Schedule a short call to review the Filmio investor deck, round details, and AI intelligence infrastructure strategy.
        </p>
      </div>
      <div className="hero-calendar-frame w-full flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <iframe
          scrolling="yes"
          src={BOOKING_URL}
          className="hero-calendar-iframe block w-full border-0"
          title="Book a Discovery Call"
        />
      </div>
      <div className="hero-booking-link mt-auto pt-2 text-center">
        <a
          className="inline-flex rounded-full border border-filmio-sea/30 bg-filmio-sea/10 px-4 py-2 font-body text-xs font-bold text-filmio-sea transition-all duration-300 hover:-translate-y-0.5 hover:bg-filmio-sea/20 hover:shadow-[0_0_24px_rgba(0,174,239,0.18)]"
          href={BOOKING_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          Open booking calendar in a new tab
        </a>
      </div>
      <p className="hero-timezone-note mt-1.5 text-center font-body text-[10px] text-white/30 md:text-xs">
        Times shown in your local timezone · Confirmation sent instantly
      </p>
    </div>
  );
}

export { VideoEmbed, CanvaEmbed, BOOKING_URL };

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
            The Stories That Shape Culture Shouldn’t Be Chosen by Guesswork.
          </h1>
          <p className="mx-auto mt-3 max-w-4xl font-body text-sm leading-relaxed text-white/68 md:text-lg">
            Filmio is building the AI Intelligence Infrastructure for entertainment: demand signal, predictive intelligence, vertical AI agents, studio execution, and capital deployment.
          </p>
        </div>

        <div className="hero-command-center conversion-cockpit pitch-cockpit grid gap-4 rounded-[2rem] border border-white/10 p-3 md:p-4 xl:grid-cols-[minmax(0,0.92fr)_minmax(440px,0.82fr)] xl:items-stretch">
          <div className="hero-media-column p-1 md:p-2">
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-filmio-sea">Investor briefing</p>
              </div>
              <span className="hidden rounded-full border border-filmio-green/20 bg-filmio-green/10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-filmio-green sm:inline-flex">
                Vertov / Filmio
              </span>
            </div>
            <div className="hero-media-stack-compact">
              <VideoEmbed />
              <CanvaEmbed compact />
            </div>
          </div>

          <HeroBookingPanel />
        </div>

        <div className="hero-comparable-logos mx-auto mt-5 grid max-w-5xl gap-2 sm:grid-cols-2 lg:grid-cols-[1.25fr_repeat(5,minmax(0,1fr))] lg:items-center">
          <p className="hero-comparable-label font-body text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">Frontier AI and Vertical AI value signals</p>
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
