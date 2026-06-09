// InvestmentTerms: CTA section with special bonus and why act now cards
import { Gift, CircleAlert, ArrowRight } from "lucide-react";

export function InvestmentTerms() {
  const scrollToBooking = () => {
    const el = document.getElementById("highlevel-embed");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-cinematic-cta relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
        <h2 className="font-display text-2xl md:text-4xl text-foreground mb-4 font-extrabold tracking-tight">
          The Investment Terms
        </h2>
        <p className="font-body text-base text-foreground/50 mb-10 max-w-xl mx-auto">
          We are raising $5M in 3 tranches. The first $1M tranche is currently live and offers
          investors the most favorable terms.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-8 text-left">
          {/* Special Bonus */}
          <div className="card-cinematic border border-primary/25 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="text-filmio-sea" size={18} />
              <h3 className="font-body text-sm font-bold text-foreground">Special Bonus &amp; Perks</h3>
            </div>
            <p className="font-body text-sm text-foreground/50 leading-relaxed">
              Executive Producer credits, table reads, set visits, premiere invites. Best equity
              valuation with a{" "}
              <strong className="text-filmio-green">30% discount</strong>.
            </p>
          </div>

          {/* Why Act Now */}
          <div className="card-cinematic card-cinematic-green border border-filmio-green/25 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <CircleAlert className="text-filmio-green" size={18} />
              <h3 className="font-body text-sm font-bold text-foreground">Why Act Now?</h3>
            </div>
            <ul className="font-body text-sm text-foreground/50 leading-relaxed space-y-1">
              <li>• Only tranche with a 30% discount</li>
              <li>• Next tranche drops to just 15%</li>
              <li>• Market comps show 63x+ ROI potential</li>
            </ul>
          </div>
        </div>

        <button
          onClick={scrollToBooking}
          className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-body text-base font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
        >
          Join the Movement. Book a Call
          <ArrowRight size={18} />
        </button>
        <p className="font-body text-xs text-foreground/30 mt-4">
          Limited availability · Accredited investors only
        </p>
      </div>
    </section>
  );
}
