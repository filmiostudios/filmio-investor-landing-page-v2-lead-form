// HeroSection: Main hero with headline, stats grid, and booking calendar iframe

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/bookings/filmio-studios-discovery";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div
        className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-10 pb-12 md:pt-16 md:pb-20"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        {/* On large screens: two columns */}
        <style>{`
          @media (min-width: 1024px) {
            .hero-grid { grid-template-columns: 1fr 1.15fr !important; }
          }
        `}</style>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Left: copy */}
          <div className="pt-2">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{
                background: "rgba(117,246,158,0.10)",
                border: "1px solid rgba(117,246,158,0.30)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "#75F69E" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: "#75F69E" }}
                />
              </span>
              <span
                className="font-body text-xs font-semibold"
                style={{ color: "#75F69E" }}
              >
                First $1M tranche closing soon: 30% discount
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display leading-[1.08] text-foreground mb-5 font-extrabold tracking-tight"
              style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.1rem)" }}
            >
              Be the Reason Hollywood's Next Hit Gets Made.
            </h1>

            {/* Backed by badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                Backed by{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>Kevin Harrington</strong>,
                original{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>Shark Tank</strong> investor
              </span>
            </div>

            {/* Body copy */}
            <p
              className="font-body text-sm md:text-base max-w-lg mb-8 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Filmio Studios is building the{" "}
              <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                fan-owned, AI-powered studio
              </strong>
              , the next Angel Studios, without limits. Invest now for equity ownership, Co-GP
              status, and uncapped cash flow potential.
            </p>

            {/* Stats grid */}
            <div
              className="mb-6"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
                maxWidth: "28rem",
              }}
            >
              {[
                { value: "63x", label: "Potential ROI" },
                { value: "28–40%", label: "Target IRR" },
                { value: "5x+", label: "Cash Flow ROI" },
                { value: "30%", label: "Equity Discount" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg py-3 px-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="font-display text-xl md:text-2xl tabular-nums font-semibold"
                    style={{ color: "oklch(0.65 0.18 220)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-body text-[10px] mt-0.5 uppercase tracking-wide"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
              20-minute discovery call · No obligation · Accredited investors only
            </p>
          </div>

          {/* Right: booking calendar */}
          <div className="w-full">
            <p
              className="font-body text-xs uppercase tracking-[0.2em] mb-2 text-center font-semibold"
              style={{ color: "oklch(0.65 0.18 220)" }}
            >
              Book a Discovery Call
            </p>
            <div
              className="w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]"
              id="highlevel-embed"
              style={{ maxHeight: 700 }}
            >
              <iframe
                scrolling="yes"
                src={BOOKING_URL}
                style={{ width: "100%", border: "none", height: 650, display: "block" }}
                title="Book a Discovery Call"
              />
            </div>
            <div className="mt-3 text-center">
              <a
                className="inline-flex rounded-full border border-filmio-sea/30 bg-filmio-sea/10 px-4 py-2 font-body text-xs font-bold text-filmio-sea transition-colors hover:bg-filmio-sea/20"
                href={BOOKING_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Open booking calendar in a new tab
              </a>
            </div>
            <p
              className="font-body text-[10px] md:text-xs text-center mt-1"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              Times shown in your local timezone · Confirmation sent instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
