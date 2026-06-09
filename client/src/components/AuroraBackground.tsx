// AuroraBackground: Fixed cinematic gradient backdrop with animated aurora blobs
export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 18% 18%, rgba(0,174,239,0.24) 0%, rgba(0,174,239,0.1) 28%, transparent 58%), radial-gradient(circle at 78% 72%, rgba(233,30,140,0.18) 0%, rgba(233,30,140,0.08) 30%, transparent 62%), linear-gradient(rgb(7,17,29) 0%, rgb(7,8,15) 42%, rgb(16,7,17) 76%, rgb(7,8,15) 100%)",
      }}
    >
      {/* Aurora blob 1 – top-left cyan */}
      <div
        className="aurora-drift-1 absolute -top-[22vh] -left-[22vw]"
        style={{
          width: "120vw",
          height: "120vw",
          maxWidth: 1600,
          maxHeight: 1600,
          background:
            "radial-gradient(circle, rgba(0,174,239,0.45) 0%, rgba(0,174,239,0.15) 32%, transparent 62%)",
          filter: "blur(60px)",
          willChange: "transform",
        }}
      />
      {/* Aurora blob 2 – right magenta */}
      <div
        className="aurora-drift-2 absolute top-[28vh] -right-[28vw]"
        style={{
          width: "115vw",
          height: "115vw",
          maxWidth: 1400,
          maxHeight: 1400,
          background:
            "radial-gradient(circle, rgba(233,30,140,0.4) 0%, rgba(233,30,140,0.12) 34%, transparent 64%)",
          filter: "blur(70px)",
          willChange: "transform",
        }}
      />
      {/* Aurora blob 3 – mid orange */}
      <div
        className="aurora-drift-3 absolute top-[112vh] left-[-8vw]"
        style={{
          width: "110vw",
          height: "110vw",
          maxWidth: 1300,
          maxHeight: 1300,
          background:
            "radial-gradient(circle, rgba(247,148,29,0.32) 0%, rgba(247,148,29,0.1) 36%, transparent 64%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />
      {/* Aurora blob 4 – lower-right green */}
      <div
        className="aurora-drift-1 absolute top-[200vh] right-[10vw]"
        style={{
          width: "60vw",
          height: "60vw",
          maxWidth: 1000,
          maxHeight: 1000,
          background:
            "radial-gradient(circle, rgba(117,246,158,0.25) 0%, rgba(117,246,158,0.08) 38%, transparent 64%)",
          filter: "blur(80px)",
        }}
      />
      {/* Scanlines overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)",
          mixBlendMode: "overlay",
        }}
      />
      {/* Film grain */}
      <div
        className="absolute -inset-[8vmax]"
        style={{
          opacity: 0.08,
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
          backgroundSize: "240px 240px",
        }}
      />
    </div>
  );
}
