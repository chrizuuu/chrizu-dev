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
        "p-mobileH lg:p-desktopH my-0 mx-auto lg:mx-[100px]",
        className
      )}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
