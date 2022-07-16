import React, { useState } from "react";

import Navbar from "components/Navbar/Navbar";
import SocialList from "components/SocialList/SocialList";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen bg-background">
      <Navbar />
      <SocialList />
      <div className="w-full h-full">{children}</div>
    </div>
  );
}

export default PageLayout;
