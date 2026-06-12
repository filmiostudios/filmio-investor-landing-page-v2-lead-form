import { FilmioLogo } from "@/components/FilmioLogo";

const DISCLAIMER_SECTIONS = [
  {
    heading: "LEGAL CONSIDERATIONS & CONFIDENTIALITY NOTICE",
    paragraphs: [
      "The information presented herein is being provided to you by Filmio Studios Inc. for information purposes only. Neither Filmio Studios Inc. nor any of its affiliates, nor any of its respective directors, officers, managers, employees or representatives make any representations or warranties, express or implied, with respect to any of the material or information contained herein. Neither does Filmio Studios Inc. or any such person assume or otherwise have any responsibility or any liability whatsoever to you or any of your affiliates, or any of your or your affiliates’ respective directors, officers, managers, employees, or representatives resulting from the use of the information and material contained herein. Information provided here is supplied in good faith based on information believed, but is not guaranteed, to be accurate or complete.",
    ],
  },
  {
    heading: "FORWARD-LOOKING STATEMENTS",
    paragraphs: [
      "This presentation may include “forward-looking statements” under U.S. federal securities laws. Filmio Studios Inc. has based these forward looking statements on management’s current expectations and projections about future events. These forward-looking statements are subject to risks, uncertainties and assumptions about Filmio Studios, Filmio Studios Inc. and its related business objectives. Filmio Studios Inc. cautions readers of this presentation that, although Filmio Studios Inc. believes that the assumptions on which such forward-looking statements are based are reasonable, any of those assumptions, current expectations and projections could prove to be inaccurate and, as a result, the forward-looking statements also could be materially incorrect. Readers of this presentation are cautioned not to put undue reliance on forward-looking statements. Filmio Studios Inc. disclaims any intent or obligation to update publicly such forward-looking statements, whether as a result of new information, future events or otherwise. All forward-looking statements attributable to Filmio Studios Inc. or persons acting on its behalf are expressly qualified in their entirety by these and any other cautionary statements and risk factors contained herein.",
      "All references in this Filmio Studios Inc. presentation to Filmio Studios, Filmio and the Film.io platform, regardless of tense, are intended to be references to how the Filmio Studios, Filmio Studios Film Fund and the Film.io platform are intended to operate when fully operational. The company’s plans, products and roadmap are in no way guaranteed and are likely to change. This document is not an offer or solicitation to buy FAN or any form of tokens, nor is this an offer or solicitation to buy any form of a security.",
    ],
  },
  {
    heading: "CONFIDENTIAL COMMUNICATION",
    paragraphs: [
      "This communication and any document(s) linked or attached hereto constitute confidential information. If you are not the addressee (or authorized to receive for the addressee), you are hereby notified that you may not use, copy, forward or otherwise disclose the contents of this email. If you have received this communication in error, please advise the sender by email and delete this communication from your computer.",
    ],
  },
];

const pagePath = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;

export function FilmioFooter() {
  return (
    <footer className="bg-cinematic-footer border-t border-foreground/[0.06]">
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <FilmioLogo muted />
          <div className="max-w-md font-body text-sm leading-relaxed text-white/45">
            Filmio Studios is building the AI intelligence infrastructure for the future of entertainment. Qualified investors can review the deck and book a discovery call above.
          </div>
        </div>
        <div className="mt-7 space-y-5 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 font-body text-[11px] leading-[1.72] text-slate-300/70 shadow-[0_18px_55px_rgba(0,0,0,0.18)] md:p-6 md:text-xs">
          {DISCLAIMER_SECTIONS.map((section) => (
            <section key={section.heading} className="space-y-2.5">
              <h2 className="font-display text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-slate-200/85 md:text-xs">
                {section.heading}
              </h2>
              {section.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </section>
          ))}
        </div>
        <div className="mt-6 font-body text-[10px] text-foreground/35">
          <p>
            © 2025 Filmio Studios Inc. | All Rights Reserved |{" "}
            <a href={pagePath("/privacy-policy")} className="underline transition-colors hover:text-foreground/55">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href={pagePath("/terms-of-use")} className="underline transition-colors hover:text-foreground/55">
              Terms &amp; Conditions
            </a>
          </p>
          <p className="mt-2 text-foreground/30">
            8 The Green, Suite A<br />
            Dover DE, 19901
          </p>
        </div>
      </div>
    </footer>
  );
}
