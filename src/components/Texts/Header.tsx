import React from "react";
import classnames from "classnames";

function Header({
  children,
  className,
}: {
  children: string | React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={classnames(
        "text-4xl xs:text-5xl md:text-6xl lg:text-7xl xl:text-[160px] 2xl:text-[180px] font-bold",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Header;
