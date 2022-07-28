import classNames from "classnames";
import React from "react";
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

function SectionSmallHeader({
  sectionIndex,
  nameOfSection,
  color,
  className,
}: {
  sectionIndex: string;
  nameOfSection: string;
  color: string;
  className?: string;
}): JSX.Element {
  const nameOfSectionArr = splitByWord(nameOfSection);
  return (
    <h2 className={classNames(className, "text-[18px]")}>
      {<Word color={color}>{sectionIndex}</Word>}
      <span
        className={classNames(
          "w-[90px] lg:w-[160px] h-[1px] inline-block mx-[10px] lg:mx-[32px]",
          `bg-${color}`
        )}
      />
      {nameOfSectionArr.map((word, index) => {
        return (
          <React.Fragment key={index}>
            <Word color={color}>{word}</Word>
            <span> </span>
          </React.Fragment>
        );
      })}
    </h2>
  );
}

export default SectionSmallHeader;
