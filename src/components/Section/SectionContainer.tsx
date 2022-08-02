import classNames from "classnames";
import React from "react";

function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={classNames("px-defaultSpacing my-0 mx-auto", className)}>
      {children}
    </div>
  );
}

export default SectionContainer;
