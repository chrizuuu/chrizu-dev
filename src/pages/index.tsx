import * as React from "react";
import Navbar from "components/Navbar/Navbar";
// markup
const IndexPage = () => {
  return (
    <div className="w-screen h-screen bg-background">
      <Navbar />
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center leading-snug">
          {"<FrontendDev />"} <br />
          <span className="stroke-header">{"React   "}</span>
          <span className="stroke-header">{"ReactNative"}</span>
          <br />
          {"Junior? />"}
        </h1>
      </div>
    </div>
  );
};

export default IndexPage;
