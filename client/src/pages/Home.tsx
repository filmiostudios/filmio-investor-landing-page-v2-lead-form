import { AuroraBackground } from "@/components/AuroraBackground";
import { BrandLogo } from "@/components/BrandLogo";
import { FilmioFooter } from "@/components/FilmioFooter";
import { FilmioNav } from "@/components/FilmioNav";
import { HeroSection, VideoEmbed, CanvaEmbed, BOOKING_URL } from "@/components/HeroSection";
import { MobileBookingBar } from "@/components/MobileBookingBar";

type Card = {
  title: string;
  body: string;
};

const reversalCards: Card[] = [
  {
    title: "Film.io Audience Signal",
    body: "Fans vote, engage, and reveal conviction before production begins.",
  },
  {
    title: "GoScore",
    body: "An AI-powered scoring system measuring demand, readiness, and commercial potential.",
  },
  {
    title: "Thalberg",
    body: "Predictive entertainment intelligence for market fit, monetization, and distribution strategy.",
  },
  {
    title: "Vertov",
    body: "The Vertical AI Agent Filmmaking Crew for end-to-end creative and commercial workflow.",
  },
  {
    title: "Filmio Studios + Film Fund",
    body: "The execution and capital layer that turns validated demand into financed entertainment.",
  },
];

const investorCards: Card[] = [
  {
    title: "AI is moving vertical",
    body: "The market is rewarding companies that own specialized professional workflows.",
  },
  {
    title: "Entertainment still lacks intelligence infrastructure",
    body: "Finance has Bloomberg, healthcare has IQVIA, aviation has Amadeus and Sabre, and real estate has CoStar. Film still lacks its category-defining intelligence layer.",
  },
  {
    title: "Filmio already has proprietary signal",
    body: "Audience behavior, creator activity, project scoring, and outcome data can compound into a durable moat.",
  },
  {
    title: "The market is massive",
    body: "Entertainment remains one of the world’s largest and most culturally influential industries.",
  },
];

type IndustryAnalog = {
  industry: string;
  company: string;
  slug: string;
  extension?: "svg" | "png";
  role: string;
  revenue: string;
  featured?: boolean;
};

const industryAnalogs: IndustryAnalog[] = [
  {
    industry: "Financial Markets",
    company: "Bloomberg",
    slug: "bloomberg",
    role: "Terminal-grade market intelligence",
    revenue: "$12B/yr",
    featured: true,
  },
  {
    industry: "Financial Markets",
    company: "S&P Global",
    slug: "sp-global",
    role: "Ratings, indices, benchmarks, and market data",
    revenue: "$13B/yr",
    featured: true,
  },
  {
    industry: "Financial Markets",
    company: "MSCI",
    slug: "msci",
    role: "Institutional indices, analytics, and risk models",
    revenue: "$2.6B/yr",
    featured: true,
  },
  {
    industry: "Risk & Insurance",
    company: "Verisk",
    slug: "verisk",
    role: "Risk, actuarial, catastrophe, and claims intelligence",
    revenue: "$3B/yr",
    featured: true,
  },
  {
    industry: "Healthcare & Pharma",
    company: "IQVIA",
    slug: "iqvia",
    role: "Clinical trial tracking and global drug-sales ledger",
    revenue: "$16.31B",
  },
  {
    industry: "Automotive",
    company: "Cox Automotive",
    slug: "cox-automotive",
    extension: "png",
    role: "Wholesale auction pricing and vehicle retail ledger",
    revenue: "$8B+",
  },
  {
    industry: "Aviation & Travel",
    company: "Amadeus",
    slug: "amadeus",
    role: "Global distribution system flight inventory",
    revenue: "$5.8B+",
  },
  {
    industry: "Commercial Real Estate",
    company: "CoStar Group",
    slug: "costar",
    role: "Institutional property data, valuation, and leasing",
    revenue: "$3.25B",
  },
  {
    industry: "Aviation & Travel",
    company: "Sabre",
    slug: "sabre",
    role: "Flight distribution network and booking infrastructure",
    revenue: "$2.9B+",
  },
  {
    industry: "Healthcare & Science",
    company: "Clarivate",
    slug: "clarivate",
    role: "Patent mapping, IP tracking, and academic analytics",
    revenue: "$2.6B",
  },
  {
    industry: "Sports Data",
    company: "Sportradar",
    slug: "sportradar-wordmark",
    extension: "png",
    role: "Real-time league feeds for media and betting houses",
    revenue: "$1.48B",
  },
  {
    industry: "Automotive",
    company: "CARFAX",
    slug: "carfax",
    extension: "png",
    role: "Vehicle history and lifecycle ledger",
    revenue: "$1.2B+",
  },
];

const problemBlocks = [
  "For a century, Hollywood has funded stories before knowing whether an audience truly exists.",
  "Billions are spent on production, then billions more trying to manufacture demand after the fact.",
  "Great projects die unseen. Weak projects get pushed through.",
  "The industry still lacks a real intelligence layer.",
];

const whyNowBullets = [
  "Better signal before capital moves",
  "Better intelligence before projects are greenlit",
  "Better execution across the filmmaking workflow",
  "Better feedback loops after release",
];

const vertovBullets = ["Ideation", "Development", "Packaging", "Funding", "Production", "Marketing", "Distribution"];

const investmentBullets = [
  "SAFE structure",
  "$30M valuation cap",
  "30% discount",
  "$25K minimum",
  "Accredited investors only",
];

const endgameBullets = [
  "Demand is proven before production",
  "AI agents accelerate the filmmaking journey",
  "Intelligence guides financing and distribution",
  "Capital follows conviction",
  "Every outcome improves the system",
];

function SectionShell({
  eyebrow,
  title,
  sectionNumber,
  children,
  className = "",
  intro,
}: {
  eyebrow?: string;
  title: string;
  sectionNumber: string;
  children: React.ReactNode;
  className?: string;
  intro?: string;
}) {
  return (
    <section className={`filmio-section relative overflow-hidden border-t border-white/5 py-16 md:py-24 ${className}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-filmio-sea/40 to-transparent" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="section-rail lg:sticky lg:top-28 lg:self-start">
          <div className="section-number">{sectionNumber}</div>
          {eyebrow && <p className="mt-4 font-body text-xs font-bold uppercase tracking-[0.26em] text-filmio-green">{eyebrow}</p>}
        </aside>
        <div>
          <div className="mb-10 max-w-4xl">
            <h2 className="font-display text-[clamp(2.15rem,4.3vw,4.7rem)] font-extrabold leading-[0.98] tracking-tight text-white">{title}</h2>
            {intro && <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-white/64 md:text-xl">{intro}</p>}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

function PremiumCard({ card, index }: { card: Card; index: number }) {
  return (
    <article className="premium-card group relative overflow-hidden rounded-[1.6rem] border border-white/10 p-6 md:p-7">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-filmio-sea/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-filmio-sea/30 bg-filmio-sea/10 font-display text-sm font-extrabold text-filmio-sea shadow-[0_0_30px_rgba(0,174,239,0.18)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-filmio-sea/30 to-transparent" />
      </div>
      <h3 className="font-display text-xl font-extrabold leading-tight text-white md:text-2xl">{card.title}</h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-white/62 md:text-base">{card.body}</p>
    </article>
  );
}

function BulletList({ bullets, tone = "green" }: { bullets: string[]; tone?: "green" | "sea" }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {bullets.map((bullet) => (
        <div key={bullet} className={`signal-pill ${tone === "green" ? "signal-pill-green" : "signal-pill-sea"}`}>
          <span className="signal-dot" />
          <span>{bullet}</span>
        </div>
      ))}
    </div>
  );
}

function BrandProofStrip() {
  return (
    <div className="brand-proof-panel rounded-[2rem] border border-white/10 p-5 md:p-6">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-filmio-sea">Market proof</p>
          <h3 className="mt-2 font-display text-2xl font-extrabold text-white md:text-3xl">The pattern is already visible in adjacent markets.</h3>
        </div>
        <p className="max-w-xl font-body text-sm leading-relaxed text-white/56">
          AI value is accruing to platforms that own specialized workflows, proprietary signal, and the operating layer for a category.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <BrandLogo name="OpenAI" slug="openai" />
        <BrandLogo name="Anthropic" slug="anthropic" />
        <BrandLogo name="Cursor" slug="cursor" />
        <BrandLogo name="Harvey" slug="harvey" />
        <BrandLogo name="Sierra" slug="sierra" />
      </div>
    </div>
  );
}

function EntertainmentLogoMap() {
  const closestAnalogs = industryAnalogs.filter((analog) => analog.featured);
  const broaderAnalogs = industryAnalogs.filter((analog) => !analog.featured);

  return (
    <div className="industry-analog-map rounded-[2rem] border border-white/10 p-5 md:p-7">
      <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
        <div className="industry-analog-copy">
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-filmio-green">Category intelligence infrastructure</p>
          <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white md:text-[2.7rem]">
            Bloomberg sells $12B/year of intelligence to financial markets. Entertainment has zero comparable infrastructure. We’re building it.
          </h3>
          <p className="mt-4 font-body text-base leading-relaxed text-white/66">
            The strongest comp is not another studio. Across finance, healthcare, aviation, real estate, automotive, and sports, the durable companies are the ones that own the trusted ledger, distribution rails, and decision intelligence for a massive category. Filmio is building that missing layer for entertainment.
          </p>
          <div className="mt-5 rounded-2xl border border-filmio-sea/20 bg-filmio-sea/8 p-4">
            <p className="font-body text-sm font-bold uppercase tracking-[0.18em] text-filmio-sea">What exists today</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-white/62">
              Film currently has tools that measure box office revenue and music consumption, but not a cross-market intelligence system for audience signal, project readiness, financing, production workflow, and distribution strategy.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-white/45">Closest analogs</p>
              <span className="hidden h-px flex-1 bg-white/10 sm:block" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
              {closestAnalogs.map((analog) => (
                <IndustryAnalogCard key={analog.company} analog={analog} featured />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-white/45">Same pattern in other industries</p>
              <span className="hidden h-px flex-1 bg-white/10 sm:block" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4">
              {broaderAnalogs.map((analog) => (
                <IndustryAnalogCard key={analog.company} analog={analog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IndustryAnalogCard({ analog, featured = false }: { analog: IndustryAnalog; featured?: boolean }) {
  return (
    <article className={`industry-analog-card ${featured ? "industry-analog-card-featured" : ""}`}>
      <div className="industry-analog-logo-wrap">
        <BrandLogo
          name={analog.company}
          slug={analog.slug}
          extension={analog.extension ?? "svg"}
          showName={false}
          className="industry-analog-logo"
        />
      </div>
      <div className="industry-analog-card-copy">
        <p className="industry-analog-industry">{analog.industry}</p>
        <h4>{analog.company}</h4>
        <p>{analog.role}</p>
      </div>
      <div className="industry-analog-revenue">{analog.revenue}</div>
    </article>
  );
}

function ConversionPromisePanel() {
  return (
    <div className="conversion-promise rounded-[2rem] border border-filmio-sea/20 p-6 md:p-7">
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["Bring the deck", "Review the thesis, round structure, and use of proceeds with an executive."],
          ["Pressure-test the moat", "Discuss proprietary audience signal, Vertov, GoScore, and the capital layer."],
          ["Decide next steps", "Leave with a clear view of whether the Filmio opportunity merits deeper diligence."],
        ].map(([title, body], index) => (
          <div key={title} className="conversion-promise-step">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className="booking-shell w-full overflow-hidden rounded-[1.75rem] border border-white/10 p-4 shadow-2xl shadow-black/30 md:p-5">
      <div className="mb-4 rounded-2xl border border-filmio-sea/20 bg-filmio-sea/5 px-4 py-3 text-center">
        <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-filmio-sea">Book a 20-Minute Investor Discovery Call</p>
        <p className="mx-auto mt-2 max-w-xl font-body text-sm leading-relaxed text-white/58">
          Schedule a short call to review the Filmio investor deck, round details, and AI intelligence infrastructure strategy.
        </p>
      </div>
      <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]" style={{ maxHeight: compact ? 620 : 700 }}>
        <iframe
          scrolling="yes"
          src={BOOKING_URL}
          style={{ width: "100%", border: "none", height: compact ? 590 : 650, display: "block" }}
          title="Book a Discovery Call"
        />
      </div>
      <div className="mt-4 text-center">
        <a
          className="inline-flex rounded-full border border-filmio-sea/30 bg-filmio-sea/10 px-4 py-2 font-body text-xs font-bold text-filmio-sea transition-all duration-300 hover:-translate-y-0.5 hover:bg-filmio-sea/20 hover:shadow-[0_0_24px_rgba(0,174,239,0.18)]"
          href={BOOKING_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          Open booking calendar in a new tab
        </a>
      </div>
    </div>
  );
}

function ProblemConstellation() {
  return (
    <div className="problem-constellation rounded-[2rem] border border-white/10 p-5 md:p-7">
      <div className="problem-hero-card spotlight-panel relative overflow-hidden rounded-[1.6rem] border border-white/10 p-7 md:p-9">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-filmio-pink/10 blur-3xl" />
        <p className="relative font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
          Hollywood has optimized the spend. Filmio is optimizing the signal.
        </p>
        <p className="relative mt-5 max-w-2xl font-body text-lg leading-relaxed text-white/64">
          Filmio was built to reverse that sequence.
        </p>
      </div>
      <div className="problem-proof-grid mt-5 grid gap-4 md:grid-cols-2">
        {problemBlocks.map((block, index) => (
          <div key={block} className="problem-row group">
            <span className="problem-index">{String(index + 1).padStart(2, "0")}</span>
            <p>{block}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OperatingSystemFlow() {
  return (
    <div className="operating-flow rounded-[2rem] border border-white/10 p-5 md:p-7">
      <p className="mb-8 font-display text-2xl font-extrabold text-filmio-sea md:text-4xl">
        Signal <span>→</span> Intelligence <span>→</span> Capital <span>→</span> Outcome <span>→</span> Stronger Intelligence
      </p>
      <div className="grid gap-4 lg:grid-cols-5">
        {reversalCards.map((card, index) => (
          <div key={card.title} className="flow-node relative rounded-[1.4rem] border border-white/10 p-5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-filmio-green/25 bg-filmio-green/10 font-display text-sm font-extrabold text-filmio-green">
              {index + 1}
            </div>
            <h3 className="font-display text-lg font-extrabold leading-tight text-white">{card.title}</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-white/58">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function VertovPipeline() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="spotlight-panel rounded-[2rem] border border-white/10 p-8">
        <p className="font-body text-xl font-semibold leading-relaxed text-white/76">
          Entertainment still does not have its defining vertical AI agent platform. Filmio intends to build it.
        </p>
        <div className="mt-7 space-y-3">
          {["Vertov is not a generic AI tool.", "Vertov is an AI-native filmmaking crew.", "It is designed specifically for film and television workflows."].map((line) => (
            <p key={line} className="quote-line font-body text-sm font-semibold text-white/72">
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className="pipeline-card rounded-[2rem] border border-filmio-green/15 p-6 md:p-8">
        <div className="pipeline-grid">
          {vertovBullets.map((item) => (
            <div key={item} className="pipeline-step">
              <span />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 rounded-2xl border border-filmio-green/20 bg-filmio-green/10 p-5 font-body text-base font-semibold leading-relaxed text-white/78">
          Vertov is how Filmio turns intelligence into action across the entire entertainment pipeline.
        </p>
      </div>
    </div>
  );
}

function ValuationLandscape() {
  return (
    <div>
      <p className="mb-8 max-w-3xl font-body text-xl font-semibold leading-relaxed text-white/70">
        The first wave created AI giants. The second wave is creating vertical AI category leaders.
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="valuation-panel valuation-blue rounded-[2rem] border border-white/10 p-7">
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-filmio-sea">First wave</p>
          <h3 className="mt-3 font-display text-3xl font-extrabold text-white">Foundation AI scale</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="metric-tile metric-logo-tile text-filmio-sea">
              <BrandLogo name="OpenAI" slug="openai" showName={false} className="metric-brand-logo" />
              <span>OpenAI</span>
              <strong>~$1 Trillion</strong>
            </div>
            <div className="metric-tile metric-logo-tile text-filmio-sea">
              <BrandLogo name="Anthropic" slug="anthropic" showName={false} className="metric-brand-logo" />
              <span>Anthropic</span>
              <strong>~$1 Trillion</strong>
            </div>
          </div>
        </div>
        <div className="valuation-panel valuation-green rounded-[2rem] border border-white/10 p-7">
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-filmio-green">Second wave</p>
          <h3 className="mt-3 font-display text-3xl font-extrabold text-white">Vertical workflow ownership</h3>
          <div className="mt-6 grid gap-3">
            <div className="metric-tile metric-logo-tile text-filmio-green">
              <BrandLogo name="Cursor" slug="cursor" showName={false} className="metric-brand-logo" />
              <span>Cursor</span>
              <strong>$60 Billion</strong>
            </div>
            <div className="metric-tile metric-logo-tile text-filmio-green">
              <BrandLogo name="Harvey" slug="harvey" showName={false} className="metric-brand-logo metric-brand-wordmark" />
              <span>Harvey</span>
              <strong>$11 Billion</strong>
            </div>
            <div className="metric-tile metric-logo-tile text-filmio-green">
              <BrandLogo name="Sierra" slug="sierra" showName={false} className="metric-brand-logo metric-brand-wordmark" />
              <span>Sierra</span>
              <strong>$10 Billion</strong>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 max-w-4xl font-body text-lg leading-relaxed text-white/72">
        The future AI unicorns will not be chatbots. They will be vertical AI companies that own valuable industry workflows. Filmio’s opportunity is to build that category leader for entertainment.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative isolate min-h-screen w-full overflow-x-hidden pb-16 md:pb-0">
      <AuroraBackground />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,174,239,0.08),transparent_34%),linear-gradient(180deg,rgba(6,10,18,0)_0%,rgba(6,10,18,0.72)_65%,rgba(6,10,18,0.92)_100%)]" />
      <div className="relative z-10">
        <FilmioNav />
        <HeroSection />

        <SectionShell sectionNumber="02" eyebrow="Section 2" title="The Civilizational Bug in Entertainment" className="bg-cinematic-problem/60">
          <ProblemConstellation />
        </SectionShell>

        <SectionShell sectionNumber="03" eyebrow="Section 3" title="Filmio Reverses the Order" className="bg-cinematic-highlights/70">
          <OperatingSystemFlow />
        </SectionShell>

        <SectionShell sectionNumber="04" eyebrow="Section 4" title="Why Filmio Matters Now" className="bg-cinematic-why/70">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="spotlight-panel rounded-[2rem] border border-white/10 p-8 md:p-10">
              <div className="space-y-4 font-body text-lg leading-relaxed text-white/68 md:text-xl">
                <p>Entertainment is becoming programmable.</p>
                <p>The next great entertainment company may not be the one that produces the most content.</p>
                <p>It may be the one that best understands what should be made, who it is for, and how to move it to market.</p>
              </div>
            </div>
            <div>
              <BulletList bullets={whyNowBullets} />
              <p className="mt-6 rounded-[1.5rem] border border-filmio-sea/20 bg-filmio-sea/5 p-6 font-body text-base font-semibold leading-relaxed text-white/78 shadow-[0_0_40px_rgba(0,174,239,0.08)]">
                Filmio is building the system that connects audience demand to real entertainment outcomes.
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell sectionNumber="05" eyebrow="Section 5" title="Meet Vertov: The Vertical AI Agent Filmmaking Crew" className="bg-cinematic-fund/70">
          <VertovPipeline />
        </SectionShell>

        <SectionShell sectionNumber="06" eyebrow="Section 6" title="AI Valuations Are Exploding" className="bg-cinematic-team/70">
          <ValuationLandscape />
          <div className="mt-8">
            <BrandProofStrip />
          </div>
        </SectionShell>

        <SectionShell sectionNumber="07" eyebrow="Section 7" title="Why Investors Should Care Now" className="bg-cinematic-highlights/70">
          <div className="mb-8">
            <EntertainmentLogoMap />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {investorCards.map((card, index) => <PremiumCard key={card.title} card={card} index={index} />)}
          </div>
        </SectionShell>

        <SectionShell
          sectionNumber="08"
          eyebrow="Section 8"
          title="Watch the Briefing. Book the Call."
          className="bg-cinematic-cta/80"
          intro="Start with the short briefing, then book a call to review the Filmio opportunity in more detail."
        >
          <div className="mb-8">
            <ConversionPromisePanel />
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="media-stack">
              <VideoEmbed />
            </div>
            <BookingPanel />
          </div>
        </SectionShell>

        <SectionShell sectionNumber="09" eyebrow="Section 9" title="Review the Investor Deck" className="bg-cinematic-fund/70">
          <div className="deck-shell rounded-[2rem] border border-white/10 p-4 md:p-6">
            <CanvaEmbed />
          </div>
        </SectionShell>

        <SectionShell sectionNumber="10" eyebrow="Section 10" title="The Investment Frame" className="bg-cinematic-why/70">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="spotlight-panel rounded-[2rem] border border-white/10 p-8">
              <p className="font-body text-xl leading-relaxed text-white/70 md:text-2xl">
                This round funds the next phase of development of Filmio&apos;s AI Intelligence Infrastructure, Filmio Studios and the Filmio Studios Film Fund.
              </p>
            </div>
            <BulletList bullets={investmentBullets} tone="sea" />
          </div>
        </SectionShell>

        <SectionShell sectionNumber="11" eyebrow="Section 11" title="The Endgame" className="bg-cinematic-cta/80">
          <div className="finale-panel rounded-[2.25rem] border border-white/10 p-8 md:p-10">
            <p className="max-w-4xl font-body text-xl leading-relaxed text-white/70">
              A future where stories move from idea to audience with intelligence, speed, and real market validation.
            </p>
            <div className="mt-8">
              <BulletList bullets={endgameBullets} />
            </div>
            <p className="mt-10 max-w-4xl font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Filmio is building the intelligence infrastructure for the future of entertainment.
            </p>
            <button
              className="mt-8 rounded-full border border-filmio-sea/30 bg-filmio-sea/10 px-6 py-3 font-body text-sm font-bold text-filmio-sea transition-all duration-300 hover:-translate-y-0.5 hover:bg-filmio-sea/20 hover:shadow-[0_0_28px_rgba(0,174,239,0.2)]"
              onClick={() => document.getElementById("highlevel-embed")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            >
              Book an Investor Discovery Call
            </button>
          </div>
        </SectionShell>

        <FilmioFooter />
      </div>
      <MobileBookingBar />
    </div>
  );
}
