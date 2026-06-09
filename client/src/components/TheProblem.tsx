// TheProblem: Hollywood stats + Filmio solution card
import { TriangleAlert, Zap, Film } from "lucide-react";

export function TheProblem() {
  return (
    <section className="bg-cinematic-problem">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h2 className="font-display text-2xl md:text-4xl text-foreground text-center mb-12 font-extrabold tracking-tight">
          Hollywood Bets Blind.{" "}
          <span className="text-accent">Filmio Studios Doesn't.</span>
        </h2>

        {/* Stats row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <TriangleAlert className="text-destructive" size={22} />, value: "75%", label: "of films lose money" },
            { icon: <Zap className="text-destructive" size={22} />, value: "$200B+", label: "spent annually on unoriginal content" },
            { icon: <Film className="text-destructive" size={22} />, value: "0%", label: "fan input on what gets made" },
          ].map((item) => (
            <div key={item.value} className="text-center">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                {item.icon}
              </div>
              <div className="font-display text-3xl text-foreground mb-1">{item.value}</div>
              <p className="font-body text-sm text-foreground/50">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Solution card */}
        <div className="card-cinematic border border-primary/20 rounded-lg p-6 md:p-8">
          <h3 className="font-display text-xl text-foreground mb-4 text-center">
            Replacing Gut Feel with{" "}
            <span className="text-primary">Data + Fan Power</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Film.io Platform",
                desc: "Audiences validate projects before a single dollar is spent.",
              },
              {
                title: "Audience AI",
                desc: "Predicts a film's commercial success using real audience data.",
              },
              {
                title: "Film Fund + Studio",
                desc: "Captures and produces only the best fan-approved projects.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-body text-sm font-bold mb-1 text-filmio-sea">{item.title}</h4>
                <p className="font-body text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
