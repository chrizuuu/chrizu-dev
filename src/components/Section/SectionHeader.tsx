import React from "react";
import classNames from "classnames";

function SectionHeader({
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
        "text-[48px] lg:text-[64px] font-bold leading-none",
        className,
        `text-${color}`
      )}
    >
      {children}
    </span>
  );
}

export default SectionHeader;
