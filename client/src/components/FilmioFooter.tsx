// FilmioFooter: Legal disclaimers and copyright
import { FilmioLogo } from "@/components/FilmioLogo";

const DISCLAIMERS = [
  "The information contained herein is for discussion and informational purposes only. The views expressed herein represent the opinions of Filmio Studios Inc. and its affiliates (collectively, the \"Company\"). This presentation does not constitute (and may not be construed to be) a solicitation or offer by the Company to buy or sell any Company securities or securities of any other person in any jurisdiction or an offer to sell an interest in funds managed by the Company. Securities may be sold only to investors who meet certain qualifications and only after review by the Company. All prospective investors should read the offering documents carefully, including investor qualifications, investment conditions, risk factors, minimum requirements, fees and expenses, tax concerns, and other pertinent information with respect to this investment.",
  "The Company reserves the right to change or modify any of its opinions expressed herein at any time and for any reason and expressly disclaims any obligation to correct, update or revise the information contained herein or to otherwise provide any additional materials, or any liability which may arise from this presentation and any errors contained herein and/or omissions from any use of the contents of this presentation. No representation, warranty or undertaking, express or implied, is given as to the reliability, accuracy, fairness or completeness of the information or opinions contained herein.",
  "The information and opinions included in this presentation constitute forward-looking statements, and you should be aware that all forward-looking statements, estimates and projections are inherently uncertain and subject to significant economic, competitive, and other uncertainties and contingencies and have been included solely for illustrative purposes. Actual results may differ materially from the information contained herein due to reasons that may or may not be foreseeable. No representation or warranty is made that the Company's investment processes or investment objectives will or are likely to be achieved or successful or that the Company's investments will make any profit or will not sustain losses.",
  "Filmio Studios Film Fund is intended to be launched by Filmio Studios; however, its formation is not guaranteed. All references to fund participation should be understood as prospective and subject to change based on regulatory and market considerations. Investor's participation and returns in the fund relate to the 20% portion of their investment that is allocated to the fund.",
  "Tax treatment varies based on individual circumstances. Investors should consult their tax professionals to fully understand how these benefits may apply.",
  "$FAN Tokens are governance tokens that are used to participate in the Film.io ecosystem. $FAN are not an investment, and are being provided as a free perk from Filmio International Ltd, the owner of Film.io, to be used to participate in the Film.io platform. See Token Terms & Conditions and Terms of Service at Film.io for more information. $FAN Tokens issued in connection with the Filmio Studios SAFE will be locked to the Film.io platform until further notice by Filmio International Ltd.",
];

const pagePath = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;

export function FilmioFooter() {
  return (
    <footer className="bg-cinematic-footer border-t border-foreground/[0.06]">
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <FilmioLogo muted />
          <div className="max-w-md font-body text-sm leading-relaxed text-white/38">
            Filmio Studios is building the AI intelligence infrastructure for the future of entertainment. Qualified investors can review the deck and book a discovery call above.
          </div>
        </div>
        <div className="mt-6 space-y-4 font-body text-[10px] leading-relaxed text-foreground/20">
          {DISCLAIMERS.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <div className="mt-6 font-body text-[10px] text-foreground/25">
          <p>
            © 2025 Filmio Studios Inc. | All Rights Reserved |{" "}
            <a href={pagePath("/privacy-policy")} className="underline hover:text-foreground/40 transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href={pagePath("/terms-of-use")} className="underline hover:text-foreground/40 transition-colors">
              Terms &amp; Conditions
            </a>
          </p>
          <p className="mt-2 text-foreground/20">
            8 The Green, Suite A<br />
            Dover DE, 19901
          </p>
        </div>
      </div>
    </footer>
  );
}
