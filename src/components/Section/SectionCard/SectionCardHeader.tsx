import React from "react";

function SectionCardHeader({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <span className="font-left font-bold text-2xl md:text-4xl text-black-800 ">
      {children}
    </span>
  );
}

export default SectionCardHeader;
