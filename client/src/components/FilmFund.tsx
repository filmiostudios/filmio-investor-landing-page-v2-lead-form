// FilmFund: Co-GP structure explanation with checklist
import { Check } from "lucide-react";

function BookCallBtn() {
  const scrollToBooking = () => {
    const el = document.getElementById("highlevel-embed");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToBooking}
      className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-bold rounded-full hover:bg-primary/90 transition-colors"
    >
      Book a Call to Learn More
    </button>
  );
}

const FUND_POINTS = [
  "Co-GPs receive a share of potential profits from every project financed by the Fund.",
  "GP cash flow potential is projected at 5x+ and is uncapped.",
  "Profit potential grows as the fund scales.",
  "Fund-related expenses and depreciation may be eligible to offset your income tax.",
];

export function FilmFund() {
  return (
    <section className="bg-cinematic-fund">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h2 className="font-display text-2xl md:text-4xl text-foreground text-center mb-4 font-extrabold tracking-tight">
          How the Film Fund Provides{" "}
          <span className="text-accent">Uncapped</span> Cash Flow
        </h2>
        <p className="font-body text-base text-foreground/50 text-center mb-10 max-w-xl mx-auto">
          As an investor, you receive a Co-General Partner interest in the Filmio Studios Film Fund.
        </p>

        <div className="card-cinematic border border-white/5 rounded-lg p-6 md:p-8 space-y-4">
          {FUND_POINTS.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="text-filmio-sea" size={12} />
              </span>
              <span className="font-body text-sm text-foreground/70 leading-relaxed">{point}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <BookCallBtn />
        </div>
      </div>
    </section>
  );
}
