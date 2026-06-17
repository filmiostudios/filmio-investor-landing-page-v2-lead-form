// HeroSection: Lead magnet image with lightbox overlay on the left, mock GHL form on the right

import { useState } from "react";

export function HeroSection() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <style>{`
          @media (min-width: 1024px) {
            .hero-grid { grid-template-columns: 1fr 1.15fr !important; }
          }
          .lead-magnet-overlay {
            background: linear-gradient(135deg, rgba(5,10,20,0.82) 0%, rgba(5,10,20,0.72) 100%);
          }
          @keyframes bounce-x {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(8px); }
          }
          @keyframes bounce-y {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
          }
          .arrow-bounce-x { animation: bounce-x 1.4s ease-in-out infinite; }
          .arrow-bounce-y { animation: bounce-y 1.4s ease-in-out infinite; }
          .ghl-mock-input {
            width: 100%;
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 6px;
            padding: 10px 14px;
            color: rgba(255,255,255,0.90);
            font-size: 14px;
            font-family: 'Inter','Montserrat',sans-serif;
            outline: none;
            transition: border-color 0.2s;
            box-sizing: border-box;
          }
          .ghl-mock-input::placeholder { color: rgba(255,255,255,0.30); }
          .ghl-mock-input:focus { border-color: oklch(0.65 0.18 220 / 0.60); }
          .ghl-mock-label {
            display: block;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.45);
            margin-bottom: 5px;
            font-family: 'Inter','Montserrat',sans-serif;
          }
        `}</style>
        <div
          className="hero-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", alignItems: "start" }}
        >
          {/* ── LEFT: headline + lead magnet image ── */}
          <div className="pt-2 flex flex-col">
            {/* Live badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 self-start"
              style={{ background: "rgba(117,246,158,0.10)", border: "1px solid rgba(117,246,158,0.30)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#75F69E" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#75F69E" }} />
              </span>
              <span className="font-body text-xs font-semibold" style={{ color: "#75F69E" }}>
                First $1M tranche closing soon: 30% discount
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display leading-[1.08] text-foreground mb-5 font-extrabold tracking-tight"
              style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.1rem)" }}
            >
              AI's First Wave Delivered 1,000x ROI. Early SpaceX Investors Made 4,268x. Welcome To Wave 2!
            </h1>

            {/* Backed by badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 self-start"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                Backed by{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>Kevin Harrington</strong>,
                original{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>Shark Tank</strong> investor
              </span>
            </div>

            {/* Lead magnet image with lightbox overlay */}
            <div
              className="relative w-full rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.10)", height: 340 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}filmio-investor-presentation-cover.jpg`}
                alt="Filmio Investor Presentation"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "brightness(0.50)" }}
              />
              <div className="lead-magnet-overlay absolute inset-0" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                {/* Lock icon */}
                <div
                  className="mb-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,174,239,0.15)", border: "1px solid rgba(0,174,239,0.35)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="oklch(0.65 0.18 220)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <p
                  className="font-display font-extrabold leading-snug"
                  style={{ fontSize: "clamp(0.95rem, 2vw, 1.25rem)", color: "#ffffff", textShadow: "0 2px 16px rgba(0,0,0,0.8)", maxWidth: "26rem" }}
                >
                  Filmio is building the AI Intelligence Infrastructure for Entertainment.{" "}
                  <span style={{ color: "oklch(0.65 0.18 220)" }}>Fill out the form below for the full investor deck.</span>
                </p>
                {/* Arrow — right on desktop, down on mobile */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.50)" }}>
                    Fill out the form
                  </span>
                  <span className="arrow-bounce-x hidden lg:inline-flex" style={{ color: "oklch(0.65 0.18 220)" }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="arrow-bounce-y inline-flex lg:hidden" style={{ color: "oklch(0.65 0.18 220)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" /><polyline points="5 12 12 19 19 12" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <p className="font-body text-xs mt-3" style={{ color: "rgba(255,255,255,0.28)" }}>
              Confidential &amp; Proprietary · Accredited investors only
            </p>
          </div>

          {/* ── RIGHT: GHL Lead Form (mock) ── */}
          <div className="w-full">
            <p
              className="font-body text-xs uppercase tracking-[0.2em] mb-2 text-center font-semibold"
              style={{ color: "oklch(0.65 0.18 220)" }}
            >
              Get Instant Access
            </p>
            <div
              className="w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]"
              id="highlevel-embed"
              style={{ minHeight: 650 }}
            >
              {/* ── MOCK FORM — replace this entire div with your GHL embed code ── */}
              <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", minHeight: 650 }}>
                <div style={{ marginBottom: 24 }}>
                  <h2 className="font-display font-extrabold" style={{ fontSize: "1.3rem", color: "#ffffff", marginBottom: 6 }}>
                    Access the Investor Presentation
                  </h2>
                  <p className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                    Complete the form below to receive Filmio's confidential investor deck.
                  </p>
                </div>

                {submitted ? (
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "40px 0" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(117,246,158,0.12)", border: "1px solid rgba(117,246,158,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#75F69E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="font-display font-bold text-center" style={{ color: "#75F69E", fontSize: "1.1rem" }}>You're in!</p>
                    <p className="font-body text-center" style={{ color: "rgba(255,255,255,0.50)", fontSize: 13 }}>
                      Check your inbox — the investor presentation is on its way.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div>
                      <label className="ghl-mock-label">First Name *</label>
                      <input className="ghl-mock-input" type="text" placeholder="Jane" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                    </div>
                    <div>
                      <label className="ghl-mock-label">Last Name *</label>
                      <input className="ghl-mock-input" type="text" placeholder="Smith" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                    </div>
                    <div>
                      <label className="ghl-mock-label">Email Address *</label>
                      <input className="ghl-mock-input" type="email" placeholder="jane@example.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="ghl-mock-label">Phone Number</label>
                      <input className="ghl-mock-input" type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: 4 }}>
                      <input type="checkbox" id="accredited" required style={{ marginTop: 2, accentColor: "oklch(0.65 0.18 220)", width: 15, height: 15, flexShrink: 0 }} />
                      <label htmlFor="accredited" className="font-body" style={{ fontSize: 11, color: "rgba(255,255,255,0.40)", lineHeight: 1.5, cursor: "pointer" }}>
                        I confirm I am an accredited investor and agree to receive communications from Filmio Studios.
                      </label>
                    </div>
                    <button
                      type="submit"
                      style={{ marginTop: 8, width: "100%", padding: "14px 24px", background: "oklch(0.65 0.18 220)", color: "#ffffff", fontFamily: "'Inter','Montserrat',sans-serif", fontSize: 14, fontWeight: 700, borderRadius: 9999, border: "none", cursor: "pointer", letterSpacing: "0.02em", transition: "opacity 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      Send Me the Presentation →
                    </button>
                    <p className="font-body text-center" style={{ fontSize: 10, color: "rgba(255,255,255,0.22)", marginTop: 4 }}>
                      Your information is kept strictly confidential · No spam, ever
                    </p>
                  </form>
                )}
              </div>
              {/* ── END MOCK FORM ── */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
