const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function FilmioLogo({ muted = false }: { muted?: boolean }) {
  return (
    <div className={`filmio-wordmark flex items-center ${muted ? "opacity-70" : ""}`} aria-label="Filmio Studios">
      <img
        src={`${basePath}/filmio-logo.png`}
        alt="Filmio Studios"
        className="h-10 w-auto max-w-[210px] object-contain md:h-12"
        loading="eager"
      />
    </div>
  );
}
