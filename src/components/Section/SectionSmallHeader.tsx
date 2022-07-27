import classNames from "classnames";
import React from "react";
import splitByLetter from "utils/splitByLetter";

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
}: {
  sectionIndex: string;
  nameOfSection: string;
  color: string;
}): JSX.Element {
  const nameOfSectionArr = splitByLetter(nameOfSection);
  return (
    <h2 className="text-[14px]">
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
