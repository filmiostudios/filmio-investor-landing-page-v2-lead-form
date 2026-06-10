// FilmioNav: Sticky top navigation bar
import { FilmioLogo } from "@/components/FilmioLogo";

export function FilmioNav() {
  const scrollToBooking = () => {
    const el = document.getElementById("highlevel-embed");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-foreground/[0.06] bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1420px] items-center justify-between px-4 md:px-8">
        <FilmioLogo />
        <div className="hidden items-center gap-5 font-body text-[11px] font-bold uppercase tracking-[0.18em] text-white/42 md:flex">
          <span>Briefing</span>
          <span>Deck</span>
          <span>Discovery Call</span>
        </div>
        <button
          onClick={scrollToBooking}
          className="inline-flex items-center rounded-full border border-filmio-sea/30 bg-primary px-5 py-2.5 font-body text-xs font-bold text-primary-foreground shadow-[0_0_24px_rgba(0,174,239,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_0_34px_rgba(0,174,239,0.36)]"
        >
          Book a Call
        </button>
      </div>
    </nav>
  );
}
