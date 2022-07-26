import React from "react";
import Navbar from "components/Navbar/Navbar";
import SocialList from "components/SocialList/SocialList";
import classNames from "classnames";

function MainTemplate({
  children,
  displayNavbar = true,
  displaySocialList = true,
  className,
  navbarColor,
}: {
  children: React.ReactNode;
  displayNavbar?: boolean;
  displaySocialList?: boolean;
  className: string;
  navbarColor?: string;
}): JSX.Element {
  return (
    <>
      {displayNavbar && <Navbar color={navbarColor} />}
      {displaySocialList && (
        <SocialList className={"hidden fixed bottom-[40px] right-desktopH"} />
      )}
      <main className={classNames("w-full h-full", className)}>{children}</main>
    </>
  );
}

export default MainTemplate;
