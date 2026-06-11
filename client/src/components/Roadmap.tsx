import { CircleCheck, Rocket } from "lucide-react";

const MILESTONES = [
  {
    year: "2024",
    done: true,
    title: "Platform launch",
    desc: "Audience-validation loop opens for creators, fans, and projects.",
  },
  {
    year: "2025",
    done: true,
    title: "Ecosystem readiness",
    desc: "Filmio Studios and AI proof-of-concepts connect data, workflow, and operations.",
  },
  {
    year: "2026",
    now: true,
    title: "Data into finance",
    desc: "Vertov, GoScore, Thalberg, advisors, ambassadors, and validated slate execution.",
  },
  {
    year: "2027",
    title: "Audience delivery",
    desc: "Filmio NOW and fund infrastructure connect demand to distribution economics.",
  },
  {
    year: "2028+",
    title: "Global ecosystem",
    desc: "Intelligence layer expands across film, TV, books, games, IP, and creator markets.",
  },
];

const ROADMAP_SIGNALS = ["Creators", "Fans", "Data", "Studio", "Finance", "Distribution"];

function scrollToBooking() {
  document.getElementById("highlevel-embed")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Roadmap() {
  return (
    <section className="filmio-section roadmap-section relative overflow-hidden border-t border-white/5 bg-cinematic-team py-14 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-filmio-sea/40 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-filmio-sea/30 bg-filmio-sea/5 px-3 py-1">
            <Rocket className="h-3.5 w-3.5 text-filmio-sea" />
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.15em] text-filmio-sea">Roadmap</span>
          </div>
          <h2 className="font-display text-[clamp(2.15rem,4.3vw,4.7rem)] font-extrabold leading-[0.98] tracking-tight text-white">
            From platform launch to global ecosystem
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-body text-base leading-relaxed text-white/64 md:text-xl">
            A staged plan for turning audience signal into studio execution, capital allocation, distribution leverage, and compounding intelligence.
          </p>
        </div>

        <div className="roadmap-compact-panel">
          <div className="roadmap-signal-strip" aria-label="Roadmap operating layers">
            {ROADMAP_SIGNALS.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>

          <ol className="roadmap-compact-grid">
            {MILESTONES.map((m) => (
              <li key={m.year} className={`roadmap-compact-card ${m.now ? "roadmap-compact-card-now" : ""}`}>
                <div className="roadmap-compact-year-row">
                  <span className="roadmap-compact-year">{m.year}</span>
                  {m.done && <CircleCheck className="h-4 w-4 text-filmio-sea" />}
                  {m.now && <span className="roadmap-now-pill">Now</span>}
                </div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="section-booking-cta">
          <button type="button" onClick={scrollToBooking}>Book a call to Learn More</button>
        </div>
      </div>
    </section>
  );
}
