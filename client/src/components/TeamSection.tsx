// TeamSection: 200+ Years of Combined Experience with team member cards

const TEAM_ROW_1 = [
  {
    name: "Kevin Harrington",
    role: "Original Shark · Shark Tank",
    linkedin: "https://www.linkedin.com/in/kevinharrington1/",
  },
  {
    name: "Jon Fitzgerald",
    role: "Producer · Sundance Alum",
    linkedin: "https://www.linkedin.com/in/jonfitzgerald/",
  },
  {
    name: "Patrick Read Johnson",
    role: "Advisor",
    linkedin: "https://www.linkedin.com/in/patrickreadjohnson/",
  },
  {
    name: "Bryan Hertz",
    role: "Co-Founder & CEO · Filmio Studios",
    linkedin: "https://www.linkedin.com/in/bryanhertz/",
  },
];

const TEAM_ROW_2 = [
  {
    name: "Ian LeWinter",
    role: "Co-Founder & President · Filmio Studios",
    linkedin: "https://www.linkedin.com/in/ianlewinter/",
  },
  {
    name: "Chris Bosco",
    role: "COO & Chief Strategy Officer · Filmio Studios",
    linkedin: "https://www.linkedin.com/in/boscochris/",
  },
  {
    name: "Corey Hertz",
    role: "Co-Founder & Chief Product Officer · Filmio Studios",
    linkedin: "https://www.linkedin.com/in/corey-hertz-02651013/",
  },
  {
    name: "Chris J. Davis",
    role: "Co-Founder & CTO · Filmio Studios",
    linkedin: "https://www.linkedin.com/in/chrisjdavis/",
  },
  {
    name: "Stipe Maric",
    role: "Director · Filmio Studios",
    linkedin: "https://www.linkedin.com/in/stipemaric/",
  },
];

const STUDIOS = [
  { name: "Netflix", color: "rgb(229,9,20)" },
  { name: "Disney", color: "rgb(17,60,207)" },
  { name: "Universal", color: "rgb(255,215,0)" },
  { name: "Amazon MGM", color: "rgb(0,168,225)" },
  { name: "Sundance", color: "rgb(236,28,36)" },
  { name: "SXSW", color: "rgb(245,166,35)" },
];

function TeamCard({ member }: { member: (typeof TEAM_ROW_1)[0] }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-primary/20 card-aurora-blue p-6">
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-filmio-sea/30 bg-[radial-gradient(circle_at_30%_25%,rgba(117,246,158,0.24),rgba(0,174,239,0.14)_45%,rgba(233,30,140,0.10))] shadow-[0_0_36px_rgba(0,174,239,0.18)]"
        aria-label={`${member.name} headshot placeholder`}
      >
        <span className="font-display text-xl font-extrabold tracking-wide text-foreground/90">
          {initials}
        </span>
      </div>
      <div className="text-center">
        <a
          className="font-body text-sm font-bold text-foreground hover:text-filmio-sea transition-colors"
          href={member.linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          {member.name}
        </a>
        <p className="font-body text-xs text-foreground/40">{member.role}</p>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section className="bg-cinematic-team">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
        <h2 className="font-display text-2xl md:text-4xl text-foreground mb-2 font-extrabold tracking-tight">
          200+ Years of Combined Experience
        </h2>
        <p className="font-body text-base text-foreground/50 mb-4 max-w-xl mx-auto">
          Our advisors and leadership bring experience from the world's top studios and platforms.
        </p>
        <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-10" />

        {/* Studio logos row */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mb-14">
          <span className="font-body text-[10px] uppercase tracking-[0.15em] text-foreground/30">
            Experience from
          </span>
          {STUDIOS.map((s) => (
            <span
              key={s.name}
              className="font-display text-sm md:text-base font-bold tracking-wide opacity-50 hover:opacity-80 transition-opacity"
              style={{ color: s.color }}
            >
              {s.name}
            </span>
          ))}
        </div>

        {/* Team rows */}
        <div className="mb-14 space-y-4">
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            {TEAM_ROW_1.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-5">
            {TEAM_ROW_2.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
