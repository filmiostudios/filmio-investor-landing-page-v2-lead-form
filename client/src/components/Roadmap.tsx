import { CircleCheck, Rocket } from "lucide-react";

const MILESTONES = [
  {
    year: "2024",
    done: true,
    side: "left",
    title: "Platform launch",
    desc: "Film.io platform opens the first audience-validation loop for creators, fans, and projects.",
  },
  {
    year: "2025",
    done: true,
    side: "right",
    title: "Foundation + ecosystem readiness",
    desc: "Filmio Studios launches; AI proof-of-concept work connects data, workflow, and studio operations.",
  },
  {
    year: "2026",
    now: true,
    side: "left",
    title: "Turn data and fandom into finance",
    desc: "Vertov, GoScore, Thalberg, advisor/ambassador networks, and the first validated slate move from thesis into execution.",
  },
  {
    year: "2027",
    side: "right",
    title: "Close the loop from validation to audience delivery",
    desc: "Filmio NOW and studio/fund infrastructure connect validated demand to distribution and recurring content economics.",
  },
  {
    year: "2028+",
    side: "left",
    title: "Global community entertainment ecosystem",
    desc: "Expand the intelligence layer across film, television, books, games, cross-media IP, and global creator markets.",
  },
];

function scrollToBooking() {
  document.getElementById("highlevel-embed")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Roadmap() {
  return (
    <section className="filmio-section roadmap-section relative overflow-hidden border-t border-white/5 bg-cinematic-team py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-filmio-sea/40 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto mb-12 max-w-4xl text-center">
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

        <ol className="roadmap-line relative space-y-6 md:space-y-8">
          {MILESTONES.map((m) => (
            <li key={m.year} className="relative pl-12 md:grid md:grid-cols-2 md:gap-8 md:pl-0">
              <span
                className={`absolute left-2 top-2 z-10 h-5 w-5 rounded-full border-2 md:left-1/2 md:-translate-x-1/2 ${
                  m.now
                    ? "animate-pulse border-primary bg-primary"
                    : m.done
                      ? "border-filmio-sea bg-filmio-sea"
                      : "border-white/30 bg-background"
                }`}
              />
              <article className={`roadmap-card ${m.side === "left" ? "md:col-start-1 md:mr-8 md:text-right" : "md:col-start-2 md:ml-8"}`}>
                <div className={`mb-2 flex items-center gap-2 ${m.side === "left" ? "md:justify-end" : ""}`}>
                  <span className="font-display text-2xl font-extrabold tabular-nums text-filmio-sea md:text-3xl">{m.year}</span>
                  {m.done && <CircleCheck className="h-4 w-4 text-filmio-sea" />}
                  {m.now && <span className="roadmap-now-pill">Now</span>}
                </div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </article>
            </li>
          ))}
        </ol>

        <div className="section-booking-cta">
          <button type="button" onClick={scrollToBooking}>Book a call to Learn More</button>
        </div>
      </div>
    </section>
  );
}
