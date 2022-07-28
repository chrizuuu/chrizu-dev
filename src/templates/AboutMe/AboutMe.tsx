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
        "absolute text-[25vw] font-bold leading-none text-black-500"
      )}
    >
      {children}
    </motion.span>
  );
}

function BackgroundText() {
  return (
    <span className="hidden lg:flex relative flex-col opacity-[0.25]">
      <BackgroundLetter className="left-[-12.5vw]">W</BackgroundLetter>
      <BackgroundLetter className="left-[10vw] top-[]">H</BackgroundLetter>
      <BackgroundLetter className="left-[27.5vw] top-[]">O</BackgroundLetter>
      <BackgroundLetter className="left-[32.5vw] top-[22.5vw]">
        I
      </BackgroundLetter>
      <BackgroundLetter className="left-[40vw] top-[22.5vw]">
        A
      </BackgroundLetter>
      <BackgroundLetter className="left-[55vw] top-[22.5vw]">
        M
      </BackgroundLetter>
    </span>
  );
}

function WhoIAm() {
  return (
    <div className="relative">
      <SectionHeader color="black-800" className="hidden">
        Who I Am
      </SectionHeader>
      <BackgroundText />
      <div className="w-full flex flex-col gap-[20px] xl:w-[40vw] xl:ml-auto relative">
        <span className="font-bold text-[28px] pb-5">Krzysztof Bonecki</span>
        <SectionText color="black-800">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients. I also recently launched a course that covers
          everything you need to build a web app with the Spotify API using Node
          & React.
        </SectionText>
      </div>
    </div>
  );
}

function SkilLSet() {
  return (
    <div className="pt-[100px]">
      <SectionHeader color="black-800 flex-1">My skill set</SectionHeader>
      <div className="w-full flex flex-col gap-[20px] lg:w-[40vw] lg:mr-auto">
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

function AboutMe(): JSX.Element {
  return (
    <SectionContainer className="h-[200vh] flex flex-col justify-start relative ">
      <SectionSmallHeader
        color="black-800"
        sectionIndex={"02"}
        nameOfSection="About me"
        className="pb-5"
      />
      <WhoIAm />
      <SkilLSet />
    </SectionContainer>
  );
}

export default AboutMe;
