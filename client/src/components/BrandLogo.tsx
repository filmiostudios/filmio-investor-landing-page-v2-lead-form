type BrandLogoProps = {
  name: string;
  slug: string;
  className?: string;
  imgClassName?: string;
  showName?: boolean;
  extension?: "svg" | "png" | "jpg" | "jpeg";
};

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function BrandLogo({ name, slug, className = "", imgClassName = "", showName = true, extension = "svg" }: BrandLogoProps) {
  const logoSrc = `${basePath}/brand-logos/${slug}.${extension}`;

  return (
    <div className={`brand-logo-tile brand-logo-${slug} ${className}`} data-brand={slug} aria-label={`${name} logo`} title={name}>
      <img
        src={logoSrc}
        alt={`${name} logo`}
        className={`brand-logo-img ${imgClassName}`}
        loading="lazy"
      />
      {showName && <span className="brand-logo-name">{name}</span>}
    </div>
  );
}
