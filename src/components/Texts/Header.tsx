import React from "react";

function Header({ children }: { children: string[] | string }) {
  return (
    <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-snug">
      {children}
    </span>
  );
}

export default Header;
