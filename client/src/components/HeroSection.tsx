const BOOKING_URL = "https://api.leadconnectorhq.com/widget/bookings/filmio-studios-discovery";
const HEYGEN_EMBED_URL = "https://app.heygen.com/embeds/7a02df82a8944c69886006bdb46102ce";
const CANVA_EMBED_URL = "https://www.canva.com/design/DAHLXrRRU2c/fd2PByLcd1haA-Ux9Fq-rA/view?embed";
const CANVA_DECK_URL =
  "https://www.canva.com/design/DAHLXrRRU2c/fd2PByLcd1haA-Ux9Fq-rA/view?utm_content=DAHLXrRRU2c&utm_campaign=designshare&utm_medium=embeds&utm_source=link";

function VideoEmbed() {
  return (
    <div className="media-frame group overflow-hidden rounded-[1.75rem] border border-filmio-sea/20 bg-black/45 shadow-2xl shadow-filmio-sea/10">
      <div className="relative aspect-video w-full">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={HEYGEN_EMBED_URL}
          title="SpaceX - Vertov 7 - Landing Page Book Your Call Now"
          frameBorder="0"
          allow="encrypted-media; fullscreen;"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function CanvaEmbed({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "mt-5" : "mt-8"}>
      <div className="media-frame relative h-0 w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] shadow-lg" style={{ paddingTop: "56.25%" }}>
        <iframe
          loading="lazy"
          className="absolute left-0 top-0 h-full w-full border-0 p-0"
          src={CANVA_EMBED_URL}
          allowFullScreen
          allow="fullscreen"
          title="Filmio Pitch Deck June 2026"
        />
      </div>
      <a
        className="mt-3 inline-flex font-body text-xs font-bold text-filmio-sea underline-offset-4 transition-colors hover:text-filmio-green hover:underline"
        href={CANVA_DECK_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Filmio Pitch Deck June 2026
      </a>
    </div>
  );
}

export { VideoEmbed, CanvaEmbed, BOOKING_URL };

export function HeroSection() {
  const supportLines = [
    "Audience conviction before capital",
    "Intelligence before greenlights",
    "AI agents across the filmmaking workflow",
    "A system that compounds with every outcome",
  ];

  return (
    <section className="hero-stage relative overflow-hidden" id="hero">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute left-8 top-28 h-72 w-72 rounded-full bg-filmio-green/10 blur-[110px]" />
        <div className="absolute right-[-8rem] top-40 h-[520px] w-[520px] rounded-full bg-filmio-pink/10 blur-[130px]" />
        <div className="hero-grid-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-filmio-green/25 bg-filmio-green/10 px-4 py-1.5 shadow-[0_0_35px_rgba(117,246,158,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-filmio-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-filmio-green" />
              </span>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-filmio-green">
                For accredited investors only
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.55rem,6.2vw,6.25rem)] font-extrabold leading-[0.92] tracking-tight text-foreground">
              The Stories That Shape Culture Shouldn’t Be Chosen by Guesswork.
            </h1>
          </div>
          <div className="hero-thesis rounded-[1.75rem] border border-white/10 p-5 md:p-6">
            <p className="font-body text-base leading-relaxed text-white/70 md:text-xl">
              Filmio is building the AI Intelligence Infrastructure for entertainment: demand signal, predictive intelligence, vertical AI agents, studio execution, and capital deployment.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {supportLines.map((line) => (
                <div key={line} className="hero-chip">
                  <span />
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-command-center grid gap-8 rounded-[2.25rem] border border-white/10 p-3 md:p-5 lg:grid-cols-[1fr_1.08fr] lg:items-start">
          <div className="p-2 md:p-3">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-filmio-sea">Investor briefing</p>
                <p className="mt-1 font-body text-sm text-white/48">Watch the thesis before booking the call.</p>
              </div>
              <span className="hidden rounded-full border border-filmio-green/20 bg-filmio-green/10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-filmio-green sm:inline-flex">
                Vertov / Filmio
              </span>
            </div>
            <VideoEmbed />
            <CanvaEmbed compact />
          </div>

          <div className="booking-shell w-full overflow-hidden rounded-[1.85rem] border border-white/10 p-4 md:p-5">
            <div className="mb-4 rounded-2xl border border-filmio-sea/20 bg-filmio-sea/5 px-4 py-3 text-center" id="highlevel-embed">
              <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-filmio-sea">
                Book a 20-Minute Investor Discovery Call
              </p>
              <p className="mx-auto mt-2 max-w-xl font-body text-sm leading-relaxed text-white/58">
                Schedule a short call to review the Filmio investor deck, round details, and AI intelligence infrastructure strategy.
              </p>
            </div>
            <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]" style={{ maxHeight: 700 }}>
              <iframe
                scrolling="yes"
                src={BOOKING_URL}
                style={{ width: "100%", border: "none", height: 650, display: "block" }}
                title="Book a Discovery Call"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                className="inline-flex rounded-full border border-filmio-sea/30 bg-filmio-sea/10 px-4 py-2 font-body text-xs font-bold text-filmio-sea transition-all duration-300 hover:-translate-y-0.5 hover:bg-filmio-sea/20 hover:shadow-[0_0_24px_rgba(0,174,239,0.18)]"
                href={BOOKING_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Open booking calendar in a new tab
              </a>
            </div>
            <p className="mt-2 text-center font-body text-[10px] text-white/30 md:text-xs">
              Times shown in your local timezone · Confirmation sent instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
