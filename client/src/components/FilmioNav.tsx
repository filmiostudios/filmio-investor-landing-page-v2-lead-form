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
        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-filmio-green/25 bg-filmio-green/10 px-3 py-1.5 shadow-[0_0_28px_rgba(117,246,158,0.08)] sm:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-filmio-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-filmio-green" />
            </span>
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-filmio-green md:text-xs">
              For accredited investors only
            </span>
          </div>
          <button
            onClick={scrollToBooking}
            className="inline-flex items-center rounded-full border border-filmio-sea/30 bg-primary px-4 py-2.5 font-body text-xs font-bold text-primary-foreground shadow-[0_0_24px_rgba(0,174,239,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_0_34px_rgba(0,174,239,0.36)] md:px-5"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
}
