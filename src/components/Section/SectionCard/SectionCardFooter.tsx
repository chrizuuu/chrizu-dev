import React from "react";

function SectionCardFooter({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <span className="font-medium text-base md:text-xl whitespace-normal break-words	max-w-full min-w-0  text-black-500 ">
      {children}
    </span>
  );
}

export default SectionCardFooter;
