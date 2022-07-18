import React from "react";
import PageLayout from "layouts/PageLayout";
import Header from "components/Texts/Header";
import StrokeHeader from "components/Texts/StrokeHeader";
// markup
const IndexPage = () => {
  return (
    <PageLayout>
      <div className="w-screen h-screen flex items-center justify-center">
        <h1 className="text-center">
          <Header> {"<FrontendDev />"}</Header>
          <br />
          <StrokeHeader>{"React "}</StrokeHeader>
          <StrokeHeader>{"ReactNative"}</StrokeHeader>
          <br />
          <Header> {"Junior? />"}</Header>
        </h1>
      </div>
      <div className="h-[1500px] w-screen" />
    </PageLayout>
  );
};

export default IndexPage;
