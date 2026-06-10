const BOOKING_URL = "https://api.leadconnectorhq.com/widget/bookings/filmio-studios-discovery";
const HEYGEN_EMBED_URL = "https://app.heygen.com/embeds/7a02df82a8944c69886006bdb46102ce";
const CANVA_EMBED_URL = "https://www.canva.com/design/DAHLXrRRU2c/fd2PByLcd1haA-Ux9Fq-rA/view?embed";
const CANVA_DECK_URL =
  "https://www.canva.com/design/DAHLXrRRU2c/fd2PByLcd1haA-Ux9Fq-rA/view?utm_content=DAHLXrRRU2c&utm_campaign=designshare&utm_medium=embeds&utm_source=link";

function VideoEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-filmio-sea/20 bg-black/40 shadow-2xl shadow-filmio-sea/10">
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
      <div className="relative h-0 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg" style={{ paddingTop: "56.25%" }}>
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
        className="mt-3 inline-flex font-body text-xs font-bold text-filmio-sea underline-offset-4 hover:underline"
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
    <section className="relative overflow-hidden" id="hero">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/4 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute left-8 top-24 h-64 w-64 rounded-full bg-filmio-green/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16">
        <div className="mb-8 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-filmio-green/25 bg-filmio-green/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-filmio-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-filmio-green" />
            </span>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-filmio-green">
              For accredited investors only
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.2rem,5.5vw,5.4rem)] font-extrabold leading-[0.98] tracking-tight text-foreground">
            The Stories That Shape Culture Shouldn’t Be Chosen by Guesswork.
          </h1>
          <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-white/68 md:text-xl">
            Filmio is building the AI Intelligence Infrastructure for entertainment: demand signal,
            predictive intelligence, vertical AI agents, studio execution, and capital deployment.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.08fr] lg:items-start">
          <div>
            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {supportLines.map((line) => (
                <div key={line} className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 font-body text-sm font-semibold text-white/80">
                  {line}
                </div>
              ))}
            </div>

            <VideoEmbed />
            <CanvaEmbed compact />
          </div>

          <div className="w-full">
            <p className="mb-2 text-center font-body text-xs font-semibold uppercase tracking-[0.2em] text-filmio-sea">
              Book a 20-Minute Investor Discovery Call
            </p>
            <p className="mx-auto mb-4 max-w-xl text-center font-body text-sm leading-relaxed text-white/55">
              Schedule a short call to review the Filmio investor deck, round details, and AI intelligence infrastructure strategy.
            </p>
            <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]" id="highlevel-embed" style={{ maxHeight: 700 }}>
              <iframe
                scrolling="yes"
                src={BOOKING_URL}
                style={{ width: "100%", border: "none", height: 650, display: "block" }}
                title="Book a Discovery Call"
              />
            </div>
            <div className="mt-3 text-center">
              <a
                className="inline-flex rounded-full border border-filmio-sea/30 bg-filmio-sea/10 px-4 py-2 font-body text-xs font-bold text-filmio-sea transition-colors hover:bg-filmio-sea/20"
                href={BOOKING_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Open booking calendar in a new tab
              </a>
            </div>
            <p className="mt-1 text-center font-body text-[10px] text-white/30 md:text-xs">
              Times shown in your local timezone · Confirmation sent instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
