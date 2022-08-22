import React from "react";
import classNames from "classnames";

function SectionText({
  children,
  color,
  className,
}: {
  children: string | JSX.Element;
  color?: string;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={classNames(
        `text-[16px] lg:text-[18px] inline-block font-light text-${color}`,
        className
      )}
    >
      {children}
    </span>
  );
}

export default SectionText;
