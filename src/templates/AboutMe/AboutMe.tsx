import React from "react";
import SectionSmallHeader from "components/Section/SectionSmallHeader";
import SectionHeader from "components/Section/SectionHeader";
import SectionText from "components/Section/SectionText";
import SectionContainer from "components/Section/SectionContainer";

function AboutMe(): JSX.Element {
  return (
    <SectionContainer className="h-screen flex flex-col justify-start relative">
      <SectionSmallHeader
        color="black-800"
        sectionIndex={"02"}
        nameOfSection="About me"
      />
      <SectionHeader color="black-800">About me</SectionHeader>
      <SectionText color="black-800">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galleyLorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industrys standard dummy text ever since the 1500s, when an
        unknown printer took a galley
      </SectionText>
      <div className="w-full flex"></div>
    </SectionContainer>
  );
}

export default AboutMe;
