import React from "react";
import { motion } from "framer-motion";
import SectionSmallHeader from "components/Section/SectionSmallHeader";
import SectionHeader from "components/Section/SectionHeader";
import SectionText from "components/Section/SectionText";
import SectionContainer from "components/Section/SectionContainer";
import classNames from "classnames";
import useAnimatedLetter from "components/Texts/AnimatedLetter.tsx/useAnimatedLetter";

function BackgroundLetter({
  children,
  className,
}: {
  children: string;
  className?: string;
}): JSX.Element {
  const { animateControls, rubberBand, markAnimationAsComplete } =
    useAnimatedLetter();
  return (
    <motion.span
      animate={animateControls}
      onTap={rubberBand}
      onHoverStart={rubberBand}
      onAnimationComplete={markAnimationAsComplete}
      className={classNames(
        className,
        "inline-block text-[50vh] font-bold text-black-100"
      )}
    >
      {children}
    </motion.span>
  );
}

function BackgroundTextPartOne() {
  return (
    <span className="hidden lg:flex flex-row gap-[20px] absolute left-[-5vw]">
      <BackgroundLetter className="">W</BackgroundLetter>
      <BackgroundLetter className="">H</BackgroundLetter>
      <BackgroundLetter className="">O</BackgroundLetter>
    </span>
  );
}

function BackgroundTextPartTwo() {
  return (
    <span className="hidden lg:flex flex-row gap-[20px] absolute right-[-5vw]">
      <BackgroundLetter className="">I</BackgroundLetter>
      <BackgroundLetter className="">A</BackgroundLetter>
      <BackgroundLetter className="">M</BackgroundLetter>
    </span>
  );
}

function WhoIAm() {
  return (
    <div className="relative">
      <SectionHeader color="black-800" className="hidden">
        Who I Am
      </SectionHeader>
      <BackgroundTextPartOne />
      <div className="w-full flex flex-col gap-[20px] xl:w-[40vw] xl:ml-auto relative">
        <span className="font-bold text-[28px] pb-5">Krzysztof Bonecki</span>
        <SectionText color="black-800">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galleyLorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley Lorem Ipsum is simply dummy text
          of the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s, when an unknown
          printer took a galleyLorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
        </SectionText>
      </div>
    </div>
  );
}

function SkilLSet() {
  return (
    <div className="pt-[100px] relative">
      <BackgroundTextPartTwo />
      <div className="w-full flex flex-col gap-[20px] xl:w-[40vw] xl:mr-auto">
        <span className="font-bold text-[28px] pb-5">My skill set</span>
        <SectionText color="black-800 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galleyLorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley Lorem Ipsum is simply dummy text
          of the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s, when an unknown
          printer took a galleyLorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
        </SectionText>
      </div>
    </div>
  );
}

function AboutMe(): JSX.Element {
  return (
    <SectionContainer className="h-[200vh] flex flex-col justify-start relative">
      <SectionSmallHeader
        color="black-800"
        sectionIndex={"02"}
        nameOfSection="About me"
        className="pb-5"
      />
      <SectionHeader color="black-800 pb-[80px]">
        Briefly about me
      </SectionHeader>

      <WhoIAm />
      <SkilLSet />
    </SectionContainer>
  );
}

export default AboutMe;
