import React from "react";
import PageLayout from "layouts/PageLayout";

// markup
const IndexPage = () => {
  return (
    <PageLayout>
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center leading-snug">
          {"<FrontendDev />"} <br />
          <span className="stroke-header">{"React   "}</span>
          <span className="stroke-header">{"ReactNative"}</span>
          <br />
          {"Junior? />"}
        </h1>
      </div>
      <div className="h-[1500px] w-screen bg-white-300" />
    </PageLayout>
  );
};

export default IndexPage;
