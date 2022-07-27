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
    <section
      className={classNames(
        "px-mobileH lg:px-desktopH my-0 mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
