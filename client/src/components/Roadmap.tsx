// Roadmap: Alternating timeline from 2024 to 2028
import { Rocket, CircleCheck } from "lucide-react";

const MILESTONES = [
  {
    year: "2024",
    done: true,
    side: "left",
    title: "Launch",
    desc: "Film.io platform launch",
  },
  {
    year: "2025",
    done: true,
    side: "right",
    title: "Foundation & Ecosystem Readiness",
    desc: "Platform & AI Proof of Concept · Filmio Studios launch",
  },
  {
    year: "2026",
    done: false,
    now: true,
    side: "left",
    title: "Turn data and fandom into finance",
    desc: "Filmio Advisor & Ambassador Network (FAAN) · Film Fund I and first validated slate",
  },
  {
    year: "2027",
    done: false,
    side: "right",
    title: "Close the loop from validation to audience delivery",
    desc: "Filmio NOW Streaming Service",
  },
  {
    year: "2028",
    done: false,
    side: "left",
    title: "Global community entertainment ecosystem",
    desc: "Expand to IP from any medium — books, games, and cross-media stories",
  },
];

export function Roadmap() {
  return (
    <section className="bg-cinematic-team border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-filmio-sea/30 bg-filmio-sea/5 mb-4">
            <Rocket className="h-3.5 w-3.5 text-filmio-sea" />
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-filmio-sea">
              Roadmap
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl text-foreground font-extrabold tracking-tight mb-3">
            From platform launch to global ecosystem
          </h2>
          <p className="font-body text-base text-foreground/90 max-w-2xl mx-auto">
            A staged plan that turns demand validation into a category-defining studio.
          </p>
          <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-6" />
        </div>

        <ol className="relative space-y-6 md:space-y-8 roadmap-line">
          {MILESTONES.map((m) => (
            <li
              key={m.year}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
            >
              {/* Timeline dot */}
              <span
                className={`absolute left-2 md:left-1/2 md:-translate-x-1/2 top-2 h-5 w-5 rounded-full border-2 z-10 ${
                  m.now
                    ? "bg-primary border-primary animate-pulse"
                    : m.done
                    ? "bg-filmio-sea border-filmio-sea"
                    : "bg-background border-white/30"
                }`}
              />

              {/* Card */}
              <div
                className={`card-aurora-green border border-filmio-green/15 rounded-lg p-5 md:p-6 ${
                  m.side === "left"
                    ? "md:col-start-1 md:text-right md:mr-8"
                    : "md:col-start-2 md:ml-8"
                }`}
              >
                <div
                  className={`flex items-center gap-2 mb-2 ${
                    m.side === "left" ? "md:justify-end" : ""
                  }`}
                >
                  <span className="font-display text-2xl md:text-3xl font-extrabold text-filmio-sea tabular-nums">
                    {m.year}
                  </span>
                  {m.done && <CircleCheck className="h-4 w-4 text-filmio-sea" />}
                  {m.now && (
                    <span className="font-body text-[10px] uppercase tracking-wider text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30">
                      Now
                    </span>
                  )}
                </div>
                <h3 className="font-body text-sm md:text-base font-bold text-foreground mb-1">
                  {m.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-foreground leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
