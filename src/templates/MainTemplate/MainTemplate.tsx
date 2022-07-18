import React from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import SocialList from "components/SocialList/SocialList";

function MainTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-background overflow-x-hidden">
      <Navbar />
      <SocialList
        className={"hidden sm:block fixed bottom-[40px] left-desktopH z-10"}
      />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainTemplate;
