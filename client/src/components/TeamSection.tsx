type TeamMember = {
  name: string;
  title: string;
  description: string;
  linkedin?: string;
};

const TOP_ROW: TeamMember[] = [
  {
    name: "Bryan Hertz",
    title: "Chief Executive",
    linkedin: "https://www.linkedin.com/in/bryanhertz",
    description:
      "Serial tech entrepreneur with over $100M raised and a Dot Com exit. Movie / Music executive producer with deep experience across content, capital, and platform strategy.",
  },
  {
    name: "Chris Bosco",
    title: "Studio Executive",
    linkedin: "https://www.linkedin.com/in/boscochris/",
    description:
      "Long-term media & entertainment co-founder, president and COO. Held senior roles at MGM, United Artists, and Stampede — bringing decades of studio and distribution expertise.",
  },
  {
    name: "Stipe Maric",
    title: "Platform Executive",
    linkedin: "https://www.linkedin.com/in/stipemaric",
    description:
      "Seasoned entrepreneur and advisor with roles at T-Mobile and ADL. Scaled multiple tech and media companies across Europe and North America.",
  },
];

const SECOND_ROW: TeamMember[] = [
  {
    name: "Ian LeWinter",
    title: "Creators",
    linkedin: "https://www.linkedin.com/in/ianlewinter",
    description:
      "Heads creator relations and community growth, connecting filmmakers with the tools and audience intelligence they need to succeed.",
  },
  {
    name: "Chris J. Davis",
    title: "Technology",
    linkedin: "https://www.linkedin.com/in/chrisjdavis",
    description:
      "Leads engineering and technical architecture at Filmio, driving the platform's AI infrastructure and data systems.",
  },
  {
    name: "Corey Hertz",
    title: "Product",
    linkedin: "https://www.linkedin.com/in/corey-hertz-02651013",
    description:
      "Oversees product strategy and user experience, ensuring the platform delivers meaningful value to creators and audiences alike.",
  },
];

const ADVISORS = [
  {
    name: "Kevin Harrington",
    title: "Original Shark · Shark Tank",
    linkedin: "https://www.linkedin.com/in/kevinharrington1/",
    signal: "Capital formation, consumer scale, and direct-response growth.",
  },
  {
    name: "Patrick Reed Johnson",
    title: "Filmmaker · Story Advisor",
    linkedin: "https://www.linkedin.com/in/moonwatcher/",
    signal: "Writer-director perspective across studio and independent storytelling.",
  },
  {
    name: "Amazon MGM Studios exec",
    title: "Strategic Advisor",
    signal: "Current studio operating perspective; name withheld for website confidentiality.",
  },
];

const EXPERIENCE_SIGNALS = ["Netflix", "Disney", "Universal", "Amazon MGM", "Sundance", "SXSW"];

function scrollToBooking() {
  document.getElementById("highlevel-embed")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function LinkedInIcon() {
  return (
    <svg className="team-linkedin-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3ZM5.36 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.14 20.45H3.58V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function LeadershipCard({ member, featured = false }: { member: TeamMember; featured?: boolean }) {
  return (
    <article className={`team-leadership-card ${featured ? "team-leadership-card-featured" : ""}`}>
      <div className="team-card-topline">
        <span>{member.title}</span>
        <span className="team-card-rule" />
      </div>
      {member.linkedin ? (
        <a className="team-card-name team-linkedin-name" href={member.linkedin} rel="noopener noreferrer" target="_blank">
          <span>{member.name}</span>
          <LinkedInIcon />
        </a>
      ) : (
        <h3 className="team-card-name">{member.name}</h3>
      )}
      <p>{member.description}</p>
    </article>
  );
}

export function TeamSection() {
  return (
    <section className="filmio-section team-experience-section relative overflow-hidden border-t border-white/5 bg-cinematic-team py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-filmio-sea/40 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="team-eyebrow">Leadership depth</p>
          <h2 className="font-display text-[clamp(2.15rem,4.3vw,4.7rem)] font-extrabold leading-[0.98] tracking-tight text-white">
            200+ Years of Combined Experience
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-body text-base leading-relaxed text-white/64 md:text-xl">
            Filmio combines studio operators, technology builders, creator-growth leaders, and advisors who understand how stories move from signal to screen.
          </p>
        </div>

        <div className="team-experience-strip">
          <span>Experience from</span>
          {EXPERIENCE_SIGNALS.map((signal) => (
            <strong key={signal}>{signal}</strong>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {TOP_ROW.map((member) => (
            <LeadershipCard key={member.name} member={member} featured />
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {SECOND_ROW.map((member) => (
            <LeadershipCard key={member.name} member={member} />
          ))}
        </div>

        <div className="advisor-band mt-6">
          <div className="advisor-band-heading">
            <p>Advisor layer</p>
            <h3>Capital, story, and studio-market pattern recognition.</h3>
          </div>
          <div className="advisor-chip-grid">
            {ADVISORS.map((advisor) => (
              <article key={advisor.name} className="advisor-chip-card">
                <div>
                  {advisor.linkedin ? (
                    <a className="advisor-linkedin-name" href={advisor.linkedin} rel="noopener noreferrer" target="_blank">
                      <span>{advisor.name}</span>
                      <LinkedInIcon />
                    </a>
                  ) : (
                    <strong>{advisor.name}</strong>
                  )}
                  <span>{advisor.title}</span>
                </div>
                <p>{advisor.signal}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="section-booking-cta">
          <button type="button" onClick={scrollToBooking}>Book a call to Learn More</button>
        </div>
      </div>
    </section>
  );
}
