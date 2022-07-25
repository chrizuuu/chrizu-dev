import React from "react";
import splitByLetter from "utils/splitByLetter";
import AnimatedLetter from "./AnimatedLetter.tsx/AnimatedLetter";

function AnimatedHeader({
  children,
  className,
}: {
  children: string;
  className?: string;
}): JSX.Element {
  const stringArray = splitByLetter(children);
  return (
    <>
      {stringArray.map((letter, index) => {
        return (
          <AnimatedLetter key={index} letter={letter} className={className} />
        );
      })}
    </>
  );
}

export default AnimatedHeader;
