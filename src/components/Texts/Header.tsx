import React from "react";
import classnames from "classnames";

function Header({
  children,
  className,
  fontSize,
}: {
  children: string | React.ReactNode;
  className?: string;
  fontSize?: string;
}): JSX.Element {
  return (
    <span
      className={classnames(
        "font-bold text-left",
        fontSize ??
          "text-5xl  xs:text-6xl md:text-8xl lg:text-[110px] xl:text-[150px] 2xl:text-[180px]",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Header;
