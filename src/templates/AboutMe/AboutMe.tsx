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
        "inline-block text-[50vh] font-bold text-white-700 opacity-10"
      )}
    >
      {children}
    </motion.span>
  );
}

function BackgroundTextPartOne() {
  return (
    <span className="hidden lg:flex flex-row gap-[20px] absolute left-[-5vw] z-10">
      <BackgroundLetter className="">W</BackgroundLetter>
      <BackgroundLetter className="">H</BackgroundLetter>
      <BackgroundLetter className="">O</BackgroundLetter>
    </span>
  );
}

function BackgroundTextPartTwo() {
  return (
    <span className="hidden lg:flex flex-row gap-[20px] absolute right-[-5vw] z-10">
      <BackgroundLetter className="">I</BackgroundLetter>
      <BackgroundLetter className="">A</BackgroundLetter>
      <BackgroundLetter className="">M</BackgroundLetter>
    </span>
  );
}

function WhoIAm() {
  return (
    <div className="relative pt-5">
      <SectionHeader color="white-700" className="hidden">
        Who I Am
      </SectionHeader>
      <BackgroundTextPartOne />
      <div className="w-full flex flex-col gap-[20px] lg:w-[60vw] 2xl:w-[40vw] lg:ml-auto relative">
        <span className="font-bold text-[28px] pb-5 text-white-900 lg:text-right">
          Krzysztof Bonecki
        </span>
        <SectionText color="white-700" className="lg:text-right">
          {
            "  I'm a 22-year-old student at Uniwersytet im. Adama Mickiewicza w Poznania chilo. As I've grown as a developer, I've worked alongside senior designers and developers who have raised my standards for whats expected of any web application. Through these experiences, I've had the opportunity to create memorable products that are not only enjoyable to use but are written in code that's maintainable and easy to understand."
          }
        </SectionText>
      </div>
    </div>
  );
}

function SkilLSet() {
  return (
    <div className="pt-[100px] relative">
      <BackgroundTextPartTwo />
      <div className="w-full flex flex-col gap-[20px] lg:w-[60vw] 2xl:w-[40vw] xl:mr-auto">
        <span className="font-bold text-[28px] pb-5 text-white-900">
          My skill set
        </span>
        <SectionText color="white-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galleyLorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          whe
        </SectionText>
        <motion.ul className="flex flex-wrap gap-[60px] pt-[40px]">
          <motion.li className=" text-white-700">Javascript+</motion.li>
          <motion.li className="text-white-700">HTML & CSS</motion.li>
          <motion.li className="text-white-700">React</motion.li>
          <motion.li className="text-white-700">React Native</motion.li>
          <motion.li className="text-white-700">Gatsby</motion.li>
          <motion.li className="text-white-700">React Query</motion.li>
          <motion.li className="text-white-700">Framer motion</motion.li>
          <motion.li className="text-white-700">Redux</motion.li>
          <motion.li className="text-white-700">TailwindCSS</motion.li>
          <motion.li className="text-white-700">Styled Components</motion.li>
          <motion.li className="text-white-700">Git</motion.li>
          <motion.li className="text-white-700">
            Firebase Auth + Firestore
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}

function AboutMe(): JSX.Element {
  return (
    <SectionContainer className="h-[200vh] flex flex-col justify-start relative">
      <SectionSmallHeader
        color="white-700"
        sectionIndex={"01"}
        nameOfSection="About me"
        className="pb-5"
      />
      <SectionHeader color="white-700">Briefly about me</SectionHeader>

      <WhoIAm />
      <SkilLSet />
    </SectionContainer>
  );
}

export default AboutMe;
