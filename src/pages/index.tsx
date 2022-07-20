import React from "react";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Hero from "templates/Hero/Hero";
import Projects from "templates/Projects/Projects";

function IndexPage(): JSX.Element {
  return (
    <MainTemplate>
      <Hero />
      <Projects />
    </MainTemplate>
  );
}

export default IndexPage;
