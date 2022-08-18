import React from "react";
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
  return (
    <span className={className}>
      {[...children].map((letter, index) => {
        return (
          <AnimatedLetter key={index} letter={letter} fontSize={fontSize} />
        );
      })}
    </span>
  );
}

export default AnimatedHeader;
