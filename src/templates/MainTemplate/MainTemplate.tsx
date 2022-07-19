import React from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import SocialList from "components/SocialList/SocialList";

function MainTemplate({
  children,
  displayNavbar = true,
  displaySocialList = true,
}: {
  children: React.ReactNode;
  displayNavbar?: boolean;
  displaySocialList?: boolean;
}): JSX.Element {
  return (
    <div className=" bg-background overflow-x-hidden">
      {displayNavbar && <Navbar />}
      {displaySocialList && (
        <SocialList
          className={"hidden sm:block fixed bottom-[40px] left-desktopH z-10"}
        />
      )}
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainTemplate;
