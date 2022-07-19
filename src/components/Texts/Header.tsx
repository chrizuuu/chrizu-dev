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
        "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-snug",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Header;
