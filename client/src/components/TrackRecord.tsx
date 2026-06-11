import { Film } from "lucide-react";

const CREDIT_PILLARS = [
  {
    label: "Studio Features",
    items: ["Studio development", "Packaging", "Distribution strategy"],
  },
  {
    label: "Streaming + TV",
    items: ["Series pipelines", "Audience analytics", "Release planning"],
  },
  {
    label: "Festival + Indie",
    items: ["Sundance", "SXSW", "Independent discovery"],
  },
  {
    label: "Franchise Infrastructure",
    items: ["IP evaluation", "Creator community", "Financing pathways"],
  },
];

const LOGO_SIGNALS = ["Netflix", "Disney", "Universal", "Amazon MGM", "Sundance", "SXSW"];

function scrollToBooking() {
  document.getElementById("highlevel-embed")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function TrackRecord() {
  return (
    <section className="filmio-section track-record-section relative overflow-hidden border-t border-white/5 bg-cinematic-team py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-filmio-green/40 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-filmio-sea/30 bg-filmio-sea/5 px-3 py-1">
            <Film className="h-3.5 w-3.5 text-filmio-sea" />
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.15em] text-filmio-sea">Track Record</span>
          </div>
          <h2 className="font-display text-[clamp(2.15rem,4.3vw,4.7rem)] font-extrabold leading-[0.98] tracking-tight text-white">
            Our team has helped create some <span className="text-filmio-sea">epic films and TV series</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-body text-base leading-relaxed text-white/64 md:text-xl">
            Filmio’s operating bench connects entertainment execution, creator discovery, platform data, and capital formation into one repeatable studio intelligence loop.
          </p>
        </div>

        <div className="track-record-panel">
          <div className="track-record-marquee" aria-label="Representative experience signals">
            {LOGO_SIGNALS.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>

          <div className="track-record-grid">
            {CREDIT_PILLARS.map((pillar, index) => (
              <article key={pillar.label} className="track-credit-card">
                <span className="track-credit-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{pillar.label}</h3>
                <div>
                  {pillar.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="section-booking-cta">
          <button type="button" onClick={scrollToBooking}>Book a call to Learn More</button>
        </div>
      </div>
    </section>
  );
}
