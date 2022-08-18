import React from "react";
import Navbar from "components/Navbar/Navbar";
import classNames from "classnames";
import Seo from "components/Seo/Seo";

function MainTemplate({
  title,
  children,
  className,
  color,
  displayNavigation = true,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  color: string;
  displayNavigation?: boolean;
}): JSX.Element {
  return (
    <>
      <Seo title={title} />
      <Navbar color={color} displayNavigation={displayNavigation} />
      <main id="main" className={classNames("w-full h-full", className)}>
        {children}
      </main>
    </>
  );
}

export default MainTemplate;
