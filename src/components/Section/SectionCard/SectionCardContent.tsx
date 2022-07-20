import React from "react";
import classNames from "classnames";

function SectionCardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={classNames(
        "flex flex-col h-full p-4 justify-between",
        className
      )}
    >
      {children}
    </div>
  );
}

export default SectionCardContent;
