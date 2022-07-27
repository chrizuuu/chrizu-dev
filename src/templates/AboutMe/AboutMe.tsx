import React from "react";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import Header from "components/Texts/Header";
import SectionSmallHeader from "components/Section/SectionSmallHeader";
import SectionHeader from "components/Section/SectionHeader";

function AboutMe(): JSX.Element {
  return (
    <section className="w-full h-screen flex flex-col justify-start p-mobileH lg:p-desktopH relative bg-[gray]">
      <SectionSmallHeader
        color="black-800"
        sectionIndex={"02"}
        nameOfSection="About me"
      />
      <SectionHeader color="black-800">About me</SectionHeader>
      <div className="w-full flex"></div>
    </section>
  );
}

export default AboutMe;
