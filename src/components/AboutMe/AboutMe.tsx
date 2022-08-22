import React from "react";
import SectionSmallHeader from "components/Section/SectionSmallHeader";
import SectionHeader from "components/Section/SectionHeader";
import SectionText from "components/Section/SectionText";
import SectionContainer from "components/Section/SectionContainer";
import classNames from "classnames";
import BackgroundLetter from "./BackgroundLetter";
import MainSkills from "./MainSkills";

function BackgroundText() {
  return (
    <span className="hidden lg:flex flex-row gap-[20px] absolute right-[-5vw] z-10">
      <BackgroundLetter className="">W</BackgroundLetter>
      <BackgroundLetter className="">H</BackgroundLetter>
      <BackgroundLetter className="">O</BackgroundLetter>
    </span>
  );
}

function WhoIAm() {
  return (
    <div className="relative pt-[40px]">
      <BackgroundText />
      <div className="w-full flex flex-col lg:w-[40vw] 2xl:w-[30vw] relative">
        <SectionText className="opacity-80">
          <p>
            Hello, My name is Krzysztof and I’m a frontend developer. Well
            organised person, problem solver, with high attention to details.{" "}
            <br />
            Currently studying at the University of Adam Mickiewicz in Poznań.
            My programming adventure began in 2013, when I wrote simple scripts
            for servers in Minecraft. I have been systematically learning the
            frontend since 2019 starting from the basics of HTML / CSS / JS to
            creating web and mobile applications using React and React Native.{" "}
            <br />
            I am currently looking for my first experience in a commercial
            project.
            <br />
          </p>
        </SectionText>
      </div>
    </div>
  );
}

function AboutMe({ color }: { color: string }): JSX.Element {
  return (
    <SectionContainer
      className={classNames(
        "w-full h-full flex flex-col justify-center py-defaultSpacing relative transition-colors text-white-900 lg:text-inherit lg:py-0"
      )}
    >
      <SectionSmallHeader
        color={color}
        sectionIndex={"01"}
        nameOfSection="About me"
        className="pb-5"
      />
      <SectionHeader>Briefly about me</SectionHeader>
      <div className="flex flex-col lg:gap-y-[40vh]">
        <WhoIAm />
        <MainSkills />
      </div>
    </SectionContainer>
  );
}

export default AboutMe;
