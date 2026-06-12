// MobileBookingBar: Fixed bottom CTA bar for mobile devices only
export function MobileBookingBar() {
  const scrollToBooking = () => {
    const el = document.getElementById("highlevel-embed");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-foreground/[0.08] px-4 py-3">
      <button
        onClick={scrollToBooking}
        className="flex items-center justify-center w-full py-3.5 bg-primary text-primary-foreground font-body text-sm font-bold rounded-full hover:bg-primary/90 transition-colors"
      >
        Get Instant Access →
      </button>
    </div>
  );
}
