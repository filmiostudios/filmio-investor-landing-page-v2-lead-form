import { AuroraBackground } from "@/components/AuroraBackground";
import { BrandLogo } from "@/components/BrandLogo";
import { FilmioFooter } from "@/components/FilmioFooter";
import { InvestmentTerms } from "@/components/InvestmentTerms";
import { FilmioNav } from "@/components/FilmioNav";
import { HeroSection } from "@/components/HeroSection";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { Roadmap } from "@/components/Roadmap";
import { TeamSection } from "@/components/TeamSection";
import { TheRaise } from "@/components/TheRaise";
import { TrackRecord } from "@/components/TrackRecord";

type Card = {
  title: string;
  body: string;
  proofTag?: string;
  proofPoints?: string[];
};

const investorCards: Card[] = [
  {
    title: "AI is moving vertical",
    body: "Vertical AI agents are the fastest-growing software category in 2026. The market is rewarding companies that own specialized professional workflows.",
    proofTag: "Market Proof",
    proofPoints: ["Cursor $60B (software)", "Harvey $11B (legal)", "Sierra $10B (support)"],
  },
  {
    title: "Entertainment still lacks intelligence infrastructure",
    body: "Film still lacks its category-defining AI intelligence layer.",
    proofTag: "Market Proof",
    proofPoints: ["S&P $126B (finance)", "Moneyball $4.6B (sports)", "Verisk $24B (insurance)"],
  },
  {
    title: "Filmio already has proprietary signal",
    body: "Audience behavior, creator activity, project scoring, and outcome data can compound into a durable moat.",
    proofTag: "Proprietary Data Moat",
    proofPoints: ["Film & TV Projects 350+", "Fans acquired 415K+", "Fan signals 340M+"],
  },
  {
    title: "The market is massive",
    body: "Entertainment remains one of the world’s largest and most culturally influential industries.",
    proofTag: "$3 Trillion Market",
    proofPoints: ["10M Filmmakers", "200M Video Creators", "3.6B Fans"],
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
  title,
  children,
  className = "",
  intro,
  introClassName = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  intro?: string;
  introClassName?: string;
}) {
  return (
    <section className={`filmio-section relative overflow-hidden border-t border-white/5 py-16 md:py-24 ${className}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-filmio-sea/40 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div>
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="font-display text-[clamp(2.15rem,4.3vw,4.7rem)] font-extrabold leading-[0.98] tracking-tight text-white">{title}</h2>
            {intro && <p className={`mx-auto mt-5 max-w-4xl font-body text-base leading-relaxed text-white/64 md:text-xl ${introClassName}`}>{intro}</p>}
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
      <div className="premium-card-copy">
        <h3 className="font-display text-xl font-extrabold leading-tight text-white md:text-2xl">{card.title}</h3>
        <p className="mt-3 font-body text-sm leading-relaxed text-white/62 md:text-base">{card.body}</p>
      </div>
      {card.proofPoints && (
        <div className="premium-card-proof mt-5 grid gap-2">
          {card.proofTag && <p className="premium-card-proof-tag">{card.proofTag}</p>}
          {card.proofPoints.map((point) => (
            <div key={point} className="rounded-full border border-filmio-sea/18 bg-filmio-sea/8 px-3 py-2 font-body text-xs font-bold uppercase tracking-[0.12em] text-white/72">
              {point}
            </div>
          ))}
        </div>
      )}
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


function ProblemConstellation() {
  return (
    <div className="problem-constellation rounded-[2rem] border border-white/10 p-5 md:p-7">
      <div className="problem-hero-card spotlight-panel relative overflow-hidden rounded-[1.6rem] border border-white/10 p-7 md:p-9">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-filmio-pink/10 blur-3xl" />
        <p className="relative font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
          Hollywood guesses. Filmio measures.
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

function VertovPipeline() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const vertovVideoSrc = `${basePath}/videos/vertov-agentic-movie-workflow-demo.mp4`;
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="spotlight-panel rounded-[2rem] border border-white/10 p-8">
        <p className="font-body text-xl font-semibold leading-relaxed text-white/76">
          Entertainment still does not have its defining vertical AI agent platform. Filmio is building it!
        </p>
        <div className="mt-7 space-y-3">
          {["Vertov is not a generic AI tool.", "Vertov is an AI-native filmmaking crew.", "It is designed specifically for film and television workflows."].map((line) => (
            <p key={line} className="quote-line font-body text-sm font-semibold text-white/72">
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className="media-frame overflow-hidden rounded-[2rem] border border-filmio-green/15 bg-black shadow-2xl shadow-filmio-green/10">
        <video
          className="block h-full min-h-[320px] w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls
          preload="metadata"
          aria-label="Vertov fully agentic movie workflow demo"
        >
          <source src={vertovVideoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function AICompanyCard({
  name,
  slug,
  category,
  description,
  value,
  extension = "svg",
}: {
  name: string;
  slug: string;
  category: string;
  description: string;
  value: string;
  extension?: "svg" | "png";
}) {
  return (
    <article className="ai-market-card">
      <div className="ai-market-logo-wrap">
        <BrandLogo name={name} slug={slug} extension={extension} showName={true} className="ai-market-logo" />
      </div>
      <div className="ai-market-card-copy">
        <p className="ai-market-category">{category}</p>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div className="ai-market-value">{value}</div>
    </article>
  );
}

function ValuationLandscape() {
  return (
    <div>
      <p className="market-proof-section-tag">Market proof</p>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="valuation-panel valuation-blue rounded-[2rem] border border-white/10 p-7">
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-filmio-sea">First wave</p>
          <h3 className="mt-3 font-display text-3xl font-extrabold text-white">Foundation AI scale</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <AICompanyCard name="OpenAI" slug="openai" category="Foundation AI" description="Model-scale intelligence platform" value="~$1T" />
            <AICompanyCard name="Anthropic" slug="anthropic" category="Foundation AI" description="Enterprise-safe AI model layer" value="~$1T" />
          </div>
        </div>
        <div className="valuation-panel valuation-green rounded-[2rem] border border-white/10 p-7">
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-filmio-green">Second wave</p>
          <h3 className="mt-3 font-display text-3xl font-extrabold text-white">Vertical workflow ownership</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <AICompanyCard name="Cursor (coding)" slug="cursor" category="Software" description="AI-native coding workflow" value="$60B" />
            <AICompanyCard name="Harvey (legal)" slug="harvey" category="Legal" description="AI legal workflow layer" value="$11B" />
            <AICompanyCard name="Sierra (support)" slug="sierra" category="Support" description="AI customer-service agents" value="$10B" />
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-4xl text-center font-body text-lg leading-relaxed text-white/72">
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

        <SectionShell title="The Civilizational Bug in Entertainment" className="bg-cinematic-problem/60">
          <ProblemConstellation />
        </SectionShell>

        <SectionShell title="Why Filmio Matters Now" className="bg-cinematic-why/70">
          <div className="premium-card-grid mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            {investorCards.map((card, index) => <PremiumCard key={card.title} card={card} index={index} />)}
          </div>
        </SectionShell>

        <SectionShell title="Meet Vertov:" className="bg-cinematic-fund/70" intro="Filmio's Revolutionary AI Agent Filmmaking Crew" introClassName="section-subheading-emphasis">
          <VertovPipeline />
        </SectionShell>

        <SectionShell
          title="AI Valuations Are Exploding"
          className="bg-cinematic-team/70"
          intro="The first wave created AI giants. The second wave is creating vertical AI category leaders."
          introClassName="section-subheading-emphasis"
        >
          <ValuationLandscape />
        </SectionShell>

        <TeamSection />
        <TrackRecord />
        <Roadmap />
        <TheRaise />

        <InvestmentTerms />

        <FilmioFooter />
      </div>
      <MobileBookingBar />
    </div>
  );
}
