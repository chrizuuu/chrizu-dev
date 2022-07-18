import React from "react";

function StrokeHeader({ children }: { children: string[] | string }) {
  return (
    <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold  leading-snug stroke-header">
      {children}
    </span>
  );
}

export default StrokeHeader;
