import React from "react";
import Navbar from "components/Navbar/Navbar";
import classNames from "classnames";

function MainTemplate({
  children,
  className,
  color,
  displayNavigation = true,
}: {
  children: React.ReactNode;
  className?: string;
  color: string;
  displayNavigation?: boolean;
}): JSX.Element {
  return (
    <>
      <Navbar color={color} displayNavigation={displayNavigation} />
      <main id="main" className={classNames("w-full h-full", className)}>
        {children}
      </main>
    </>
  );
}

export default MainTemplate;
