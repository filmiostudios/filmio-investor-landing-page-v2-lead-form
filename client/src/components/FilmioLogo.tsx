export function FilmioLogo({ muted = false }: { muted?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${muted ? "opacity-70" : ""}`} aria-label="Filmio Studios">
      <div className="relative h-8 w-8 rounded-full border border-filmio-sea/30 bg-filmio-sea/10 shadow-[0_0_24px_rgba(0,174,239,0.25)]">
        <div className="absolute inset-1 rounded-full border border-filmio-green/25" />
        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-filmio-green" />
        <div className="absolute left-1/2 top-1/2 h-[1px] w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-filmio-sea/70" />
        <div className="absolute left-1/2 top-1/2 h-[1px] w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-filmio-pink/70" />
      </div>
      <div className="leading-none">
        <div className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-foreground">
          Filmio
        </div>
        <div className="font-body text-[9px] font-semibold uppercase tracking-[0.32em] text-filmio-sea">
          Studios
        </div>
      </div>
    </div>
  );
}
