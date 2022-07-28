import React from "react";
import classNames from "classnames";

function SectionText({
  children,
  color,
  className,
}: {
  children: string;
  color: string;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={classNames(
        `text-[20px] lg:text-[28px] inline-block font-normal text-${color}`,
        className
      )}
    >
      {children}
    </span>
  );
}

export default SectionText;
