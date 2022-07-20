import React from "react";
import classnames from "classnames";

function Header({
  children,
  className,
}: {
  children: string[] | string;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={classnames(
        "text-4xl xs:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[118px] font-bold",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Header;
