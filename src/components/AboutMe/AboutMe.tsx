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
  const { animateControls, rubberBandAnimation, markAnimationAsComplete } =
    useAnimatedLetter();
  return (
    <motion.span
      animate={animateControls}
      onTap={rubberBandAnimation}
      onHoverStart={rubberBandAnimation}
      onAnimationComplete={markAnimationAsComplete}
      className={classNames(
        className,
        "inline-block text-[50vh] font-bold opacity-[0.07]"
      )}
    >
      {children}
    </motion.span>
  );
}

function BackgroundTextPartOne() {
  return (
    <span className="hidden xl:flex flex-row gap-[20px] absolute left-[-5vw] z-10">
      <BackgroundLetter className="">W</BackgroundLetter>
      <BackgroundLetter className="">H</BackgroundLetter>
      <BackgroundLetter className="">O</BackgroundLetter>
    </span>
  );
}

function BackgroundTextPartTwo() {
  return (
    <span className="hidden xl:flex flex-row gap-[20px] absolute right-[-5vw] z-10">
      <BackgroundLetter className="">I</BackgroundLetter>
      <BackgroundLetter className="">A</BackgroundLetter>
      <BackgroundLetter className="">M</BackgroundLetter>
    </span>
  );
}

function WhoIAm() {
  return (
    <div className="relative pt-5">
      <BackgroundTextPartOne />
      <div className="w-full flex flex-col gap-[20px] xl:w-[60vw] 2xl:w-[40vw] lg:ml-auto relative">
        <SectionText className="xl:text-right opacity-70">
          {
            "  Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the p"
          }
        </SectionText>
      </div>
    </div>
  );
}

const skillSetContainer = {
  inView: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.1,
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const skillSetItem = {
  hidden: { opacity: 0, x: -100 },
  inView: { opacity: 1, x: 0 },
};

function SkilLSet() {
  return (
    <div className="pt-[100px] relative">
      <BackgroundTextPartTwo />
      <div className="w-full flex flex-col gap-[20px] xl:w-[60vw] 2xl:w-[40vw]">
        <SectionHeader> My skill set</SectionHeader>

        <SectionText className="opacity-70">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galleyLorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          whe
        </SectionText>
        <motion.ul
          variants={skillSetContainer}
          viewport={{ once: true }}
          initial="hidden"
          whileInView={"inView"}
          className="flex flex-wrap gap-[20px] lg:gap-[60px] pt-[40px] opacity-[0.7]"
        >
          <motion.li variants={skillSetItem}>Javascript</motion.li>
          <motion.li variants={skillSetItem}>Typescript</motion.li>
          <motion.li variants={skillSetItem}>React</motion.li>
          <motion.li variants={skillSetItem}>React Native</motion.li>
          <motion.li variants={skillSetItem}>Gatsby</motion.li>
          <motion.li variants={skillSetItem}>React Query</motion.li>
          <motion.li variants={skillSetItem}>Framer motion</motion.li>
          <motion.li variants={skillSetItem}>Redux</motion.li>
          <motion.li variants={skillSetItem}>watermelonDB</motion.li>
          <motion.li variants={skillSetItem}>TailwindCSS</motion.li>
          <motion.li variants={skillSetItem}>Styled Components</motion.li>
          <motion.li variants={skillSetItem}>
            Firebase Auth + Firestore
          </motion.li>
        </motion.ul>
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
      <div className="flex flex-col lg:gap-y-[35vh]">
        <WhoIAm />
        <SkilLSet />
      </div>
    </SectionContainer>
  );
}

export default AboutMe;
