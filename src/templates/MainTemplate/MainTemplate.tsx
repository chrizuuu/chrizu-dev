import React from "react";
import Navbar from "components/Navbar/Navbar";
import classNames from "classnames";
import Seo from "components/Seo/Seo";

function MainTemplate({
  title,
  children,
  className,
  color,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  color: string;
}): JSX.Element {
  return (
    <>
      <Seo title={title} />
      <Navbar color={color} />
      <main className={classNames("w-full h-full", className)}>{children}</main>
    </>
  );
}

export default MainTemplate;
