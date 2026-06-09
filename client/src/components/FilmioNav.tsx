// FilmioNav: Sticky top navigation bar
import { FilmioLogo } from "@/components/FilmioLogo";

export function FilmioNav() {
  const scrollToBooking = () => {
    const el = document.getElementById("highlevel-embed");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-foreground/[0.06]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        <FilmioLogo />
        <button
          onClick={scrollToBooking}
          className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground font-body text-xs font-bold rounded-full hover:bg-primary/90 transition-colors"
        >
          Book a Call
        </button>
      </div>
    </nav>
  );
}
