import React from "react";

export default function DiagonalBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-white ${className}`}
    >
      {/* Large diagonal shape #1 (left top side) */}
      <div
        className="
            absolute top-0 -right-1/4 w-[150%] h-[80%]
            bg-[#e1e1e0] transform rotate-[30deg] origin-top-right z-20
        "
      />
      <div
        className="
            absolute top-0 -right-[28%] w-[200%] h-[90%]
            bg-gradient-to-r from-white to-[#e5e5e5] transform rotate-[30deg] origin-top-right  z-10
        "
      />
      <div
        className="
            absolute top-0 -right-[30%] w-[200%] h-[100%]
            bg-gradient-to-r from-white via-white to-[#f7f7f7] transform rotate-[30deg] origin-top-right 
        "
      />

      <div
        className="
            absolute bottom-0 -left-1/4 w-[150%] h-[38%]
            bg-[#e1e1e0] transform rotate-[30deg] origin-bottom-left z-30
        "
      />
      <div
        className="
            absolute bottom-0 -left-1/4 w-[150%] h-[85%]
            bg-white transform rotate-[30deg] origin-bottom-left z-20
        "
      />
      <div
        className="
            absolute bottom-0 -left-1/4 w-[150%] h-[92%]
            bg-gradient-to-r from-white via-[#dfdfde]/50 to-white transform rotate-[30deg] origin-bottom-left z-10
        "
      />
      {/* Content above the background */}
      <div className={`relative z-[1000] ${className}`}>{children}</div>

      {/* Bottom gradient */}
      <div className="absolute -bottom-10 left-0 right-0 h-80 bg-gradient-to-t from-black to-transparent z-[100] shadow-lg blur-[10rem]"></div>
    </div>
  );
}
