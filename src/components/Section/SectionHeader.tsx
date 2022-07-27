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
}: {
  children: string;
  color: string;
}): JSX.Element {
  const words = splitByWord(children);

  return (
    <span className="text-[28px] lg:text-[48px]">
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
