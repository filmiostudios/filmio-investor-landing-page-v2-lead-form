// TheRaise: $2M SAFE + $3M priced round details with use of funds
import { TrendingUp, Users, Cpu, Briefcase, Target, Handshake } from "lucide-react";

const USE_OF_FUNDS = [
  {
    icon: <Users className="h-5 w-5 text-filmio-sea mb-3" />,
    title: "Growth + Creator/Fan Onboarding",
    desc: "Expand the validation engine by scaling both supply and demand.",
  },
  {
    icon: <Cpu className="h-5 w-5 text-filmio-sea mb-3" />,
    title: "AI + Platform Integration",
    desc: "Enhance predictive capabilities and deepen ecosystem connectivity.",
  },
  {
    icon: <Briefcase className="h-5 w-5 text-filmio-sea mb-3" />,
    title: "Studio Operations",
    desc: "Build production and distribution infrastructure partnerships.",
  },
  {
    icon: <Target className="h-5 w-5 text-filmio-sea mb-3" />,
    title: "Project Acquisition",
    desc: "Secure exclusive rights to top-scoring projects.",
  },
  {
    icon: <Handshake className="h-5 w-5 text-filmio-sea mb-3" />,
    title: "Capital Partnership",
    desc: "Establish content investment structures.",
  },
];

export function TheRaise() {
  return (
    <section className="bg-cinematic-team border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-filmio-sea/30 bg-filmio-sea/5 mb-4">
            <TrendingUp className="h-3.5 w-3.5 text-filmio-sea" />
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-filmio-sea">
              The Raise
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl text-foreground font-extrabold tracking-tight mb-3">
            Raising{" "}
            <span className="text-filmio-sea">$2M SAFE</span> in two tranches +{" "}
            <span className="text-filmio-sea">$3M priced round</span>
          </h2>
          <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-6" />
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-12">
          <div className="card-cinematic border border-primary/30 rounded-xl p-6 md:p-8 text-center bg-primary/5">
            <div className="font-display text-4xl md:text-5xl font-extrabold text-primary tabular-nums mb-1">
              15%
            </div>
            <div className="font-body text-xs md:text-sm uppercase tracking-wider text-foreground">
              Discount
            </div>
          </div>
          <div className="card-cinematic border border-primary/30 rounded-xl p-6 md:p-8 text-center bg-primary/5">
            <div className="font-display text-4xl md:text-5xl font-extrabold text-primary tabular-nums mb-1">
              $30M
            </div>
            <div className="font-body text-xs md:text-sm uppercase tracking-wider text-foreground">
              Valuation Cap
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="font-display text-xl md:text-2xl text-filmio-sea font-bold">
            Use of Funds
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {USE_OF_FUNDS.map((item) => (
            <div key={item.title} className="card-aurora-green border border-filmio-green/15 rounded-lg p-5">
              {item.icon}
              <h4 className="font-body text-sm font-bold text-foreground mb-1">{item.title}</h4>
              <p className="font-body text-xs md:text-sm text-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
