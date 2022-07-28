import React from "react";
import classNames from "classnames";
import splitByWord from "utils/splitByWord";

function Word({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <span className={classNames(`inline-block font-bold text-${color}`)}>
      {children}
    </span>
  );
}

function SectionHeader({
  children,
  color,
  className,
}: {
  children: string;
  color: string;
  className?: string;
}): JSX.Element {
  const words = splitByWord(children);

  return (
    <span className={classNames("text-[48px] lg:text-[64px]", className)}>
      {words.map((word, index) => {
        return (
          <React.Fragment key={index}>
            <Word color={color}>{word}</Word>
            <span> </span>
          </React.Fragment>
        );
      })}
    </span>
  );
}

export default SectionHeader;
