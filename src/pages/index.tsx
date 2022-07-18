import React from "react";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Header from "components/Texts/Header";
import Hero from "templates/Hero/Hero";

const IndexPage = () => {
  return (
    <MainTemplate>
      <Hero />
      <div className="h-[1500px] w-screen" />
    </MainTemplate>
  );
};

export default IndexPage;
