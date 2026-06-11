import { Briefcase, Cpu, Handshake, Target, TrendingUp, Users } from "lucide-react";

const ROUND_CARDS = [
  { label: "SAFE Tranche 1", value: "Closed", tone: "closed" },
  { label: "SAFE Tranche 2", value: "Open", tone: "open" },
  { label: "Discount", value: "15%", tone: "metric" },
  { label: "Valuation Cap", value: "$30M", tone: "metric" },
  { label: "Next Step", value: "$3M priced round", tone: "priced" },
];

const USE_OF_FUNDS = [
  {
    icon: <Cpu className="h-5 w-5 text-filmio-sea" />,
    title: "Vertov + Product",
    desc: "Advance the AI-native filmmaking crew and the product layer that turns project activity into decision intelligence.",
  },
  {
    icon: <Target className="h-5 w-5 text-filmio-sea" />,
    title: "GoScore + Thalberg",
    desc: "Strengthen the scoring, recommendation, and marketplace intelligence systems behind project selection.",
  },
  {
    icon: <Briefcase className="h-5 w-5 text-filmio-sea" />,
    title: "Studios / Fund",
    desc: "Build the studio and financing infrastructure required to move validated projects toward production.",
  },
  {
    icon: <Users className="h-5 w-5 text-filmio-sea" />,
    title: "Project acquisition",
    desc: "Secure and package priority projects with strong audience signal and commercial potential.",
  },
  {
    icon: <Handshake className="h-5 w-5 text-filmio-sea" />,
    title: "Capital partnerships",
    desc: "Expand relationships with strategic investors, distribution partners, and content-financing stakeholders.",
  },
];

function scrollToBooking() {
  document.getElementById("highlevel-embed")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function TheRaise() {
  return (
    <section className="filmio-section raise-section relative overflow-hidden border-t border-white/5 bg-cinematic-why py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-filmio-green/40 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-filmio-sea/30 bg-filmio-sea/5 px-3 py-1">
            <TrendingUp className="h-3.5 w-3.5 text-filmio-sea" />
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.15em] text-filmio-sea">The Raise</span>
          </div>
          <h2 className="font-display text-[clamp(2.15rem,4.3vw,4.7rem)] font-extrabold leading-[0.98] tracking-tight text-white">
            Raising <span className="text-filmio-sea">$2M SAFE</span> + <span className="text-filmio-green">$3M Priced Round</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-body text-base leading-relaxed text-white/64 md:text-xl">
            The current round is designed to unlock the AI, studio, fund, and partnership work needed for Filmio’s next execution phase.
          </p>
        </div>

        <div className="raise-panel">
          <div className="raise-card-grid">
            {ROUND_CARDS.map((card) => (
              <article key={card.label} className={`raise-metric-card raise-metric-${card.tone}`}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <h3 className="font-display text-2xl font-extrabold text-white md:text-3xl">Capital unlocks</h3>
          </div>

          <div className="raise-use-grid mt-5">
            {USE_OF_FUNDS.map((item) => (
              <article key={item.title} className="raise-use-card">
                <div className="raise-use-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
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
