import React from "react";

function SectionCardTagline({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <span className="font-left font-medium text-base md:text-xl text-black-500 ">
      {children}
    </span>
  );
}

export default SectionCardTagline;
