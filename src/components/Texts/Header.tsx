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
        "text-5xl  xs:text-6xl md:text-8xl lg:text-[120px] xl:text-[160px] 2xl:text-[180px] font-bold",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Header;
