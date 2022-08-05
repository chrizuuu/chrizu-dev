import React from "react";
import Navbar from "components/Navbar/Navbar";
import SocialList from "components/SocialList/SocialList";
import classNames from "classnames";

function MainTemplate({
  children,
  displayNavbar = true,
  displaySocialList = true,
  className,
  color,
}: {
  children: React.ReactNode;
  displayNavbar?: boolean;
  displaySocialList?: boolean;
  className?: string;
  color: string;
}): JSX.Element {
  return (
    <>
      {displayNavbar && <Navbar color={color} />}
      <main className={classNames("w-full h-full", className)}>{children}</main>
    </>
  );
}

export default MainTemplate;
