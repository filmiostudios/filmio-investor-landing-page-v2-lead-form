// InvestmentHighlights: Section with equity, IRR, cash flow, perks, tax, diversified revenue cards
import {
  TrendingUp, ChartColumn, DollarSign, Gift, Shield, Layers,
} from "lucide-react";

function BookCallBtn({ label = "Book a Call to Learn More" }: { label?: string }) {
  const scrollToBooking = () => {
    const el = document.getElementById("highlevel-embed");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToBooking}
      className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-bold rounded-full hover:bg-primary/90 transition-colors"
    >
      {label}
    </button>
  );
}

export function InvestmentHighlights() {
  return (
    <section className="bg-cinematic-highlights">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h2 className="font-display text-2xl md:text-4xl text-foreground text-center mb-4 font-extrabold tracking-tight">
          Investment Highlights
        </h2>
        <p className="font-body text-sm text-foreground/50 text-center mb-3 max-w-lg mx-auto">
          Multiple paths to returns: equity, cash flow, royalties, and exclusive experiences.
        </p>
        <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-filmio-sea to-transparent mb-12" />

        {/* Featured card – 63x Equity */}
        <div className="group mb-5 relative overflow-hidden rounded-lg border border-filmio-green/20 card-spotlight spot-green p-6 md:p-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-filmio-green via-filmio-green/60 to-transparent" />
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-lg bg-filmio-green/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-filmio-green" size={24} />
              </div>
              <span className="font-display text-5xl md:text-6xl font-extrabold text-filmio-green tracking-tight">
                63x
              </span>
              <span className="font-body text-xs text-foreground/40 mt-1">Potential ROI</span>
            </div>
            <div>
              <h3 className="font-body text-base font-bold text-foreground mb-2">Equity Ownership</h3>
              <p className="font-body text-sm text-foreground/50 leading-relaxed max-w-xl">
                Angel Studios recently listed on NYSE at $1.6B. A similar result could mean a 63x ROI for investors.
              </p>
            </div>
          </div>
        </div>

        {/* Grid of smaller cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* IRR */}
          <div className="group card-spotlight spot-primary border border-white/5 rounded-lg p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ChartColumn className="text-filmio-sea" size={20} />
            </div>
            <span className="font-display text-3xl font-extrabold tracking-tight text-primary-foreground">28–40%</span>
            <p className="font-body text-xs text-foreground/40 mb-2">Target IRR</p>
            <p className="font-body text-sm text-foreground/50 leading-relaxed">
              As a co-GP in our film fund, you'll share in performance-based profits.
            </p>
          </div>

          {/* Cash Flow */}
          <div className="group card-spotlight spot-primary border border-white/5 rounded-lg p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <DollarSign className="text-filmio-sea" size={20} />
            </div>
            <span className="font-display text-3xl font-extrabold tracking-tight text-primary-foreground">5x</span>
            <p className="font-body text-xs text-foreground/40 mb-2">Cash Flow ROI</p>
            <p className="font-body text-sm text-foreground/50 leading-relaxed">
              Uncapped royalties from every film and TV series we produce.
            </p>
          </div>

          {/* Exclusive Perks */}
          <div className="group card-spotlight spot-sea border border-white/5 rounded-lg p-6">
            <div className="w-10 h-10 rounded-lg bg-filmio-sea/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Gift className="text-filmio-sea" size={20} />
            </div>
            <h3 className="font-body text-sm font-bold text-foreground mb-2">Exclusive Perks</h3>
            <p className="font-body text-sm text-foreground/50 leading-relaxed">
              Executive Producer credits, table reads, set visits, premiere invites, and more.
            </p>
          </div>

          {/* Tax */}
          <div className="group card-spotlight spot-sea border border-white/5 rounded-lg p-6">
            <div className="w-10 h-10 rounded-lg bg-filmio-sea/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Shield className="text-filmio-sea" size={20} />
            </div>
            <h3 className="font-body text-sm font-bold text-foreground mb-2">Tax Beneficial Structure</h3>
            <p className="font-body text-sm text-foreground/50 leading-relaxed">
              Fund-related expenses and depreciation may offset your income tax.
            </p>
          </div>

          {/* Diversified */}
          <div className="group sm:col-span-2 lg:col-span-2 card-spotlight spot-primary border border-white/5 rounded-lg p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Layers className="text-filmio-sea" size={20} />
            </div>
            <h3 className="font-body text-sm font-bold text-foreground mb-2">Diversified Revenue Streams</h3>
            <p className="font-body text-sm text-foreground/50 leading-relaxed">
              Participate in fund profits, royalties from theatrical releases and streaming.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <BookCallBtn />
        </div>
      </div>
    </section>
  );
}
