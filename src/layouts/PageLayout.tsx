import React from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import SocialList from "components/SocialList/SocialList";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background">
      <Navbar />
      <SocialList className="z-50 hidden md:block fixed bottom-[40px] left-desktopH" />
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  );
}

export default PageLayout;
