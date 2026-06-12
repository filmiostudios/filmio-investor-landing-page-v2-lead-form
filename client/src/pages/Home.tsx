// Filmio Studios Investor Landing Page — Lead Form Version
// Design: Cinematic dark theme with aurora gradient background
// Colors: Deep navy/black bg, filmio-sea (#00AEEF), filmio-green (#75F69E), filmio-pink (#E91E8C)
// Fonts: Montserrat (display), Inter (body)

import { AuroraBackground } from "@/components/AuroraBackground";
import { HeroSection } from "@/components/HeroSection";
import { FilmioFooter } from "@/components/FilmioFooter";
import { FilmioNav } from "@/components/FilmioNav";
import { MobileBookingBar } from "@/components/MobileBookingBar";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen w-full overflow-x-hidden pb-16 md:pb-0">
      <AuroraBackground />
      <div className="relative z-10">
        <FilmioNav />
        <HeroSection />
        <FilmioFooter />
      </div>
      <MobileBookingBar />
    </div>
  );
}
