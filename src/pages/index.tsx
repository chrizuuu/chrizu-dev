import React from "react";
import PageLayout from "layouts/PageLayout";
import Header from "components/Texts/Header";

const IndexPage = () => {
  return (
    <PageLayout>
      <div className="w-screen h-screen flex items-center justify-center bg-white-900">
        <h1 className="text-center">
          <Header> {"<FrontendDev />"}</Header>
          <br />
          <Header className="stroke-header">{"React "}</Header>
          <Header className="stroke-header">{"ReactNative"}</Header>
          <br />
          <Header> {"Junior? />"}</Header>
        </h1>
      </div>
      <div className="h-[1500px] w-screen" />
    </PageLayout>
  );
};

export default IndexPage;
