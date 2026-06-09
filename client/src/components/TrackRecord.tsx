// TrackRecord: Film credits section with production-safe branded credit panel
import { Film } from "lucide-react";

const CREDIT_GROUPS = [
  ["Sundance", "SXSW", "Tribeca", "Cannes"],
  ["Netflix", "Disney", "Universal", "Amazon MGM"],
  ["Film Fund", "Streaming", "Distribution", "AI Validation"],
];

export function TrackRecord() {
  return (
    <section className="bg-cinematic-team border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-16 md:py-24">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-filmio-sea/30 bg-filmio-sea/5 mb-4">
            <Film className="h-3.5 w-3.5 text-filmio-sea" />
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-filmio-sea">
              Track Record
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl text-foreground font-extrabold tracking-tight mb-3">
            Our team has helped create some{" "}
            <span className="text-filmio-sea">epic films and TV series</span>
          </h2>
          <p className="font-body text-base text-foreground/90 max-w-2xl mx-auto">
            Decades of credits across studios, streamers, festivals, and award-winning independent productions.
          </p>
          <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-6" />
        </div>

        <figure className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-background/40 shadow-2xl md:rounded-xl">
          <div className="relative min-h-[320px] p-6 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,174,239,0.22),transparent_32%),radial-gradient(circle_at_80%_35%,rgba(233,30,140,0.18),transparent_30%),radial-gradient(circle_at_50%_95%,rgba(117,246,158,0.12),transparent_35%)]" />
            <div className="relative grid min-h-[260px] gap-4 md:grid-cols-3">
              {CREDIT_GROUPS.map((group, index) => (
                <div
                  key={group.join("-")}
                  className="flex flex-col justify-center rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm"
                >
                  <div className="mb-4 font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-filmio-sea/90">
                    {index === 0 ? "Festival Provenance" : index === 1 ? "Studio Experience" : "Studio Infrastructure"}
                  </div>
                  <div className="space-y-3">
                    {group.map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/[0.06] bg-black/20 px-4 py-3 font-display text-lg font-extrabold tracking-wide text-foreground/85"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <figcaption className="border-t border-white/[0.06] px-6 py-4 text-center font-body text-xs text-foreground/40">
            Representative experience categories; final investor materials should be reviewed against offering documents.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
