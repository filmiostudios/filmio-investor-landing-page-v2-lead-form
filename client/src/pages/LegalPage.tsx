import { FilmioLogo } from "@/components/FilmioLogo";
import { Link } from "wouter";

const PAGE_COPY = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: June 7, 2026",
    intro:
      "This privacy policy describes how Filmio Studios Inc. may collect, use, and safeguard information submitted through this investor landing page.",
    sections: [
      {
        heading: "Information We Collect",
        body:
          "When you request an investor discovery call, the booking provider may collect contact details, scheduling preferences, and any information you choose to submit. We may also receive basic analytics and technical information such as browser, device, referral, and page interaction data.",
      },
      {
        heading: "How Information Is Used",
        body:
          "Information submitted through the site may be used to respond to inquiries, coordinate investor conversations, evaluate eligibility, provide follow-up materials, improve site performance, and satisfy applicable legal or compliance requirements.",
      },
      {
        heading: "Third-Party Services",
        body:
          "The site may use third-party providers for scheduling, video, hosting, analytics, and communications. Those providers process information under their own terms and privacy practices.",
      },
      {
        heading: "Contact",
        body:
          "For privacy-related questions, contact Filmio Studios Inc. at 8 The Green, Suite A, Dover, DE 19901, or use the contact channel provided in your investor materials.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    updated: "Last updated: June 7, 2026",
    intro:
      "These terms govern access to and use of the Filmio Studios investor landing page. By using this site, you agree to use it only for lawful informational purposes.",
    sections: [
      {
        heading: "Informational Purpose Only",
        body:
          "This site is provided for discussion and informational purposes only. It does not constitute an offer to sell, or a solicitation of an offer to buy, any securities or fund interests. Any investment may be made only through definitive offering documents and after completion of all required investor qualification procedures.",
      },
      {
        heading: "Forward-Looking Statements",
        body:
          "Statements regarding targets, projections, potential returns, future products, or market opportunities are forward-looking and inherently uncertain. Actual results may differ materially from the statements presented on this site.",
      },
      {
        heading: "No Professional Advice",
        body:
          "Nothing on this site should be interpreted as legal, tax, accounting, investment, or financial advice. Prospective investors should consult their own professional advisers before making any investment decision.",
      },
      {
        heading: "Site Availability",
        body:
          "Filmio Studios may update, change, suspend, or discontinue any portion of the site at any time without notice.",
      },
    ],
  },
} as const;

type LegalPageProps = {
  kind: keyof typeof PAGE_COPY;
};

export default function LegalPage({ kind }: LegalPageProps) {
  const copy = PAGE_COPY[kind];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-16">
        <Link href="/" className="inline-flex">
          <FilmioLogo />
        </Link>
        <article className="mt-10 rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl md:p-10">
          <p className="font-body text-xs uppercase tracking-[0.18em] text-filmio-sea">{copy.updated}</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-foreground/70">{copy.intro}</p>
          <div className="mt-8 space-y-7">
            {copy.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-lg font-bold text-foreground/90">{section.heading}</h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-foreground/60">{section.body}</p>
              </section>
            ))}
          </div>
          <Link
            href="/"
            className="mt-10 inline-flex rounded-full bg-primary px-5 py-2 font-body text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return to Investor Page
          </Link>
        </article>
      </div>
    </main>
  );
}
