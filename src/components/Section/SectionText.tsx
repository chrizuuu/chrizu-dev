import React from "react";
import classNames from "classnames";

function SectionText({
  children,
  color,
}: {
  children: string;
  color: string;
}): JSX.Element {
  return (
    <span
      className={classNames(
        `text-[20px] lg:text-[28px] inline-block font-bold text-${color}`
      )}
    >
      {children}
    </span>
  );
}

export default SectionText;
