import { AuroraBackground } from "@/components/AuroraBackground";
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
    body: "Finance has Bloomberg. Entertainment still has fragmented instinct and outdated gatekeeping.",
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
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative border-t border-white/5 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 max-w-3xl">
          {eyebrow && <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.22em] text-filmio-green">{eyebrow}</p>}
          <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-extrabold leading-[1.02] tracking-tight text-white">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function CardGrid({ cards, columns = "md:grid-cols-2 lg:grid-cols-3" }: { cards: Card[]; columns?: string }) {
  return (
    <div className={`grid gap-5 ${columns}`}>
      {cards.map((card, index) => (
        <article key={card.title} className="card-cinematic rounded-2xl border border-white/10 p-6 shadow-xl shadow-black/10">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-filmio-sea/30 bg-filmio-sea/10 font-display text-sm font-bold text-filmio-sea">
            {index + 1}
          </div>
          <h3 className="font-display text-xl font-bold text-white">{card.title}</h3>
          <p className="mt-3 font-body text-sm leading-relaxed text-white/60">{card.body}</p>
        </article>
      ))}
    </div>
  );
}

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {bullets.map((bullet) => (
        <div key={bullet} className="rounded-xl border border-filmio-green/15 bg-filmio-green/10 px-4 py-3 font-body text-sm font-semibold text-white/78">
          {bullet}
        </div>
      ))}
    </div>
  );
}

function BookingPanel() {
  return (
    <div className="w-full">
      <p className="mb-2 text-center font-body text-xs font-semibold uppercase tracking-[0.2em] text-filmio-sea">
        Book a 20-Minute Investor Discovery Call
      </p>
      <p className="mx-auto mb-4 max-w-xl text-center font-body text-sm leading-relaxed text-white/55">
        Schedule a short call to review the Filmio investor deck, round details, and AI intelligence infrastructure strategy.
      </p>
      <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]" style={{ maxHeight: 700 }}>
        <iframe
          scrolling="yes"
          src={BOOKING_URL}
          style={{ width: "100%", border: "none", height: 650, display: "block" }}
          title="Book a Discovery Call"
        />
      </div>
      <div className="mt-3 text-center">
        <a
          className="inline-flex rounded-full border border-filmio-sea/30 bg-filmio-sea/10 px-4 py-2 font-body text-xs font-bold text-filmio-sea transition-colors hover:bg-filmio-sea/20"
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

export default function Home() {
  return (
    <div className="relative isolate min-h-screen w-full overflow-x-hidden pb-16 md:pb-0">
      <AuroraBackground />
      <div className="relative z-10">
        <FilmioNav />
        <HeroSection />

        <SectionShell eyebrow="Section 2" title="The Civilizational Bug in Entertainment" className="bg-cinematic-problem/60">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {problemBlocks.map((block) => (
              <div key={block} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 font-body text-base leading-relaxed text-white/72">
                {block}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl font-display text-2xl font-bold text-filmio-green">Filmio was built to reverse that sequence.</p>
        </SectionShell>

        <SectionShell eyebrow="Section 3" title="Filmio Reverses the Order" className="bg-cinematic-highlights/70">
          <p className="mb-8 font-display text-2xl font-bold text-filmio-sea md:text-4xl">
            Signal → Intelligence → Capital → Outcome → Stronger Intelligence
          </p>
          <CardGrid cards={reversalCards} />
        </SectionShell>

        <SectionShell eyebrow="Section 4" title="Why Filmio Matters Now" className="bg-cinematic-why/70">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-4 font-body text-lg leading-relaxed text-white/68">
              <p>Entertainment is becoming programmable.</p>
              <p>The next great entertainment company may not be the one that produces the most content.</p>
              <p>It may be the one that best understands what should be made, who it is for, and how to move it to market.</p>
            </div>
            <div>
              <BulletList bullets={whyNowBullets} />
              <p className="mt-6 rounded-2xl border border-filmio-sea/20 bg-filmio-sea/5 p-5 font-body text-base font-semibold leading-relaxed text-white/78">
                Filmio is building the system that connects audience demand to real entertainment outcomes.
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell eyebrow="Section 5" title="Meet Vertov: The Vertical AI Agent Filmmaking Crew" className="bg-cinematic-fund/70">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-body text-xl font-semibold leading-relaxed text-white/75">
                Entertainment still does not have its defining vertical AI agent platform. Filmio intends to build it.
              </p>
              <div className="mt-7 space-y-3">
                {["Vertov is not a generic AI tool.", "Vertov is an AI-native filmmaking crew.", "It is designed specifically for film and television workflows."].map((line) => (
                  <p key={line} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-white/70">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <BulletList bullets={vertovBullets} />
              <p className="mt-6 rounded-2xl border border-filmio-green/20 bg-filmio-green/10 p-5 font-body text-base font-semibold leading-relaxed text-white/78">
                Vertov is how Filmio turns intelligence into action across the entire entertainment pipeline.
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell eyebrow="Section 6" title="AI Valuations Are Exploding" className="bg-cinematic-team/70">
          <p className="mb-8 max-w-3xl font-body text-xl font-semibold leading-relaxed text-white/70">
            The first wave created AI giants. The second wave is creating vertical AI category leaders.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <h3 className="font-display text-2xl font-bold text-white">First wave</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["OpenAI: ~$1 Trillion", "Anthropic: ~$1 Trillion"].map((item) => (
                  <div key={item} className="rounded-xl border border-filmio-sea/20 bg-filmio-sea/5 p-4 font-display text-xl font-bold text-filmio-sea">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <h3 className="font-display text-2xl font-bold text-white">Second wave</h3>
              <div className="mt-5 grid gap-3">
                {["Cursor: $60 Billion", "Harvey: $11 Billion", "Sierra: $10 Billion"].map((item) => (
                  <div key={item} className="rounded-xl border border-filmio-green/20 bg-filmio-green/10 p-4 font-display text-xl font-bold text-filmio-green">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-4xl font-body text-lg leading-relaxed text-white/72">
            The future AI unicorns will not be chatbots. They will be vertical AI companies that own valuable industry workflows. Filmio’s opportunity is to build that category leader for entertainment.
          </p>
        </SectionShell>

        <SectionShell eyebrow="Section 7" title="Why Investors Should Care Now" className="bg-cinematic-highlights/70">
          <CardGrid cards={investorCards} columns="md:grid-cols-2" />
        </SectionShell>

        <SectionShell eyebrow="Section 8" title="Watch the Briefing. Book the Call." className="bg-cinematic-cta/80">
          <p className="mb-8 max-w-3xl font-body text-lg leading-relaxed text-white/68">
            Start with the short briefing, then book a call to review the Filmio opportunity in more detail.
          </p>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.08fr] lg:items-start">
            <VideoEmbed />
            <BookingPanel />
          </div>
        </SectionShell>

        <SectionShell eyebrow="Section 9" title="Review the Investor Deck" className="bg-cinematic-fund/70">
          <CanvaEmbed />
        </SectionShell>

        <SectionShell eyebrow="Section 10" title="The Investment Frame" className="bg-cinematic-why/70">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <p className="font-body text-xl leading-relaxed text-white/70">
              This round funds the next phase of development of Filmio&apos;s AI Intelligence Infrastructure, Filmio Studios and the Filmio Studios Film Fund.
            </p>
            <BulletList bullets={investmentBullets} />
          </div>
        </SectionShell>

        <SectionShell eyebrow="Section 11" title="The Endgame" className="bg-cinematic-cta/80">
          <p className="mb-8 max-w-4xl font-body text-xl leading-relaxed text-white/70">
            A future where stories move from idea to audience with intelligence, speed, and real market validation.
          </p>
          <BulletList bullets={endgameBullets} />
          <p className="mt-10 max-w-4xl font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Filmio is building the intelligence infrastructure for the future of entertainment.
          </p>
          <button
            className="mt-8 rounded-full border border-filmio-sea/30 bg-filmio-sea/10 px-6 py-3 font-body text-sm font-bold text-filmio-sea transition-colors hover:bg-filmio-sea/20"
            onClick={() => document.getElementById("highlevel-embed")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            Book an Investor Discovery Call
          </button>
        </SectionShell>

        <FilmioFooter />
      </div>
      <MobileBookingBar />
    </div>
  );
}
