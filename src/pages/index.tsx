import React from "react";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Hero from "templates/Hero/Hero";

function IndexPage(): JSX.Element {
  return (
    <MainTemplate>
      <Hero />
      <div className="h-[1500px] w-screen" />
    </MainTemplate>
  );
}

export default IndexPage;
