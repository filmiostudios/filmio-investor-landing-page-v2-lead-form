type BrandLogoProps = {
  name: string;
  slug: string;
  className?: string;
  imgClassName?: string;
  showName?: boolean;
};

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function BrandLogo({ name, slug, className = "", imgClassName = "", showName = true }: BrandLogoProps) {
  return (
    <div className={`brand-logo-tile ${className}`} aria-label={`${name} logo`} title={name}>
      <img
        src={`${basePath}/brand-logos/${slug}.svg`}
        alt={`${name} logo`}
        className={`brand-logo-img ${imgClassName}`}
        loading="lazy"
      />
      {showName && <span className="brand-logo-name">{name}</span>}
    </div>
  );
}
