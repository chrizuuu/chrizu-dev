import React from "react";
import splitByLetter from "utils/splitByLetter";
import AnimatedLetter from "./AnimatedLetter.tsx/AnimatedLetter";

function AnimatedHeader({
  children,
  className,
  fontSize,
}: {
  children: string;
  className?: string;
  fontSize?: string;
}): JSX.Element {
  const stringArray = splitByLetter(children);
  return (
    <span className={className}>
      {stringArray.map((letter, index) => {
        return (
          <AnimatedLetter key={index} letter={letter} fontSize={fontSize} />
        );
      })}
    </span>
  );
}

export default AnimatedHeader;
