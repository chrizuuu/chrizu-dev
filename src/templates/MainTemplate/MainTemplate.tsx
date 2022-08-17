import React from "react";
import Navbar from "components/Navbar/Navbar";
import classNames from "classnames";

function MainTemplate({
  children,
  className,
  color,
}: {
  children: React.ReactNode;
  className?: string;
  color: string;
}): JSX.Element {
  return (
    <>
      <Navbar color={color} />
      <main className={classNames("w-full h-full", className)}>{children}</main>
    </>
  );
}

export default MainTemplate;
