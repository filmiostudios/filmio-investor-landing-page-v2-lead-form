import { ArrowRight } from "lucide-react";

export function InvestmentTerms() {
  const scrollToBooking = () => {
    document.getElementById("highlevel-embed")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="filmio-section final-booking-section relative overflow-hidden border-t border-white/5 bg-cinematic-cta py-16 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="team-eyebrow">Investor access</p>
        <h2 className="font-display text-[clamp(2.15rem,4.3vw,4.7rem)] font-extrabold leading-[0.98] tracking-tight text-white">
          Filmio is building the intelligence infrastructure for the future of entertainment.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-white/62 md:text-xl">
          Review the investor deck, pressure-test the AI and studio thesis, and decide whether the opportunity merits deeper diligence.
        </p>
        <button onClick={scrollToBooking} className="final-movement-button mt-9" type="button">
          Join the Movement. Book a Call <ArrowRight size={18} />
        </button>
        <p className="mt-4 font-body text-xs text-white/34">Limited availability · Accredited investors only</p>
      </div>
    </section>
  );
}
