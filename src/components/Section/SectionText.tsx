import React from "react";
import classNames from "classnames";

function SectionText({
  children,
  color,
  className,
}: {
  children: string;
  color?: string;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={classNames(
        `text-[16px] inline-block font-normal text-${color}`,
        className
      )}
    >
      {children}
    </span>
  );
}

export default SectionText;
