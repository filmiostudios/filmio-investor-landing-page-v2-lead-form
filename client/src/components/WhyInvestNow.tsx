// WhyInvestNow: YouTube video embed + two benefit cards

function BookCallBtn() {
  const scrollToBooking = () => {
    const el = document.getElementById("highlevel-embed");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToBooking}
      className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-bold rounded-full hover:bg-primary/90 transition-colors"
    >
      Book a Call to Learn More
    </button>
  );
}

export function WhyInvestNow() {
  return (
    <section className="bg-cinematic-why">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h2 className="font-display text-2xl md:text-4xl text-foreground text-center mb-4 font-extrabold tracking-tight">
          Why Invest Now?
        </h2>
        <p className="font-body text-base text-foreground/50 text-center mb-10 max-w-xl mx-auto">
          <strong className="text-foreground/80">Shark Tank's</strong> own{" "}
          <strong className="text-foreground/80">Kevin Harrington</strong> explains why Filmio
          Studios is a game-changer.
        </p>

        {/* YouTube embed */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-foreground/[0.06] mb-8">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            loading="lazy"
            src="https://www.youtube.com/embed/ywc61r-BXlY?rel=0&modestbranding=1"
            title="Kevin Harrington on Filmio Studios Investment"
          />
        </div>

        {/* Benefit cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="card-cinematic border border-white/5 rounded-lg p-6">
            <h3 className="font-display text-lg text-foreground mb-2">Own a Piece of the Studio</h3>
            <p className="font-body text-sm text-foreground/50 leading-relaxed">
              When you invest in Filmio Studios, you become an owner in an innovative entertainment
              company reshaping Hollywood.
            </p>
          </div>
          <div className="card-cinematic border border-white/5 rounded-lg p-6">
            <h3 className="font-display text-lg text-foreground mb-2">Receive Cash Flow Along the Way</h3>
            <p className="font-body text-sm text-foreground/50 leading-relaxed">
              As a Co-GP of the Filmio Studios film fund, you benefit from uncapped cash flow
              potential and possible tax benefits.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <BookCallBtn />
        </div>
      </div>
    </section>
  );
}
