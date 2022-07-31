import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import classNames from "classnames";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import SectionContainer from "components/Section/SectionContainer";

function BackgroundText({
  children,
  className,
}: {
  children: string;
  className?: string;
}): JSX.Element {
  const { scrollY } = useScroll();
  const windowHeight = window.screen.availHeight;

  const right = useTransform(
    scrollY,
    [0, 1.5 * windowHeight],
    ["0vw", "140vw"]
  );

  return (
    <motion.span
      style={{ right }}
      className={classNames(
        className,
        `text-[max(80vw,30vh)] lg:text-[max(100vh,45vw)] font-bold leading-[100vh] text-black-100 absolute top-[60px] right-0`
      )}
    >
      {children}
    </motion.span>
  );
}

function MainText() {
  const { scrollY } = useScroll();
  const windowHeight = window.screen.availHeight;

  const branchTextScale = useTransform(
    scrollY,
    [windowHeight / 3, 1.5 * windowHeight],
    [1, 1.5]
  );

  const branchTextOpacity = useTransform(
    scrollY,
    [windowHeight, 1.5 * windowHeight],
    [1, 0.1]
  );

  const branchTextLeft = useTransform(
    scrollY,
    [windowHeight / 3, windowHeight, 1.8 * windowHeight],
    ["0vw", "8vw", "140vw"]
  );

  const opacity = useTransform(
    scrollY,
    [windowHeight, 1.1 * windowHeight],
    [1, 0]
  );

  /*
    <h1 className="w-full relative">
      <motion.span
        style={{
          scale: branchTextScale,
          left: branchTextLeft,
          opacity: branchTextOpacity,
        }}
        className="inline-block relative"
      >
        <Header className="stroke-header">{"Web "}</Header>
        <AnimatedLetter letter="&" />
        <Header className="stroke-header">{" Mobile"}</Header>
      </motion.span>
      <motion.span style={{ opacity }} className="relative block">
        <AnimatedHeader>{"Frontend  "}</AnimatedHeader>
      </motion.span>
      <span className="w-full inline-block text-center"></span>
      <motion.span style={{ opacity }} className="w-full relative block">
        <AnimatedHeader>{"Developer"}</AnimatedHeader>
      </motion.span>
    </h1>
  */

  return (
    <h1 className="w-full relative z-10">
      <motion.span
        style={{
          scale: branchTextScale,
          left: branchTextLeft,
          opacity: branchTextOpacity,
        }}
        className="flex flex-col relative"
      >
        <span className="inline-block">
          <AnimatedHeader className="stroke-header">
            {"Frontend "}
          </AnimatedHeader>
        </span>
        <span className="inline-block">
          <AnimatedHeader className="stroke-header">
            {"Developer "}
          </AnimatedHeader>
        </span>
      </motion.span>
      <motion.span style={{ opacity }} className="relative block">
        <AnimatedHeader>{"Krzysztof  "}</AnimatedHeader>
      </motion.span>
      <motion.span style={{ opacity }} className="w-full relative block">
        <AnimatedHeader>{"Bonecki"}</AnimatedHeader>
      </motion.span>
    </h1>
  );
}

function Hero(): JSX.Element {
  return (
    <SectionContainer className="w-full flex flex-col justify-end h-screen pb-mobilePadding lg:pb-[60px]">
      <MainText />
      <BackgroundText>KB</BackgroundText>
    </SectionContainer>
  );
}

export default Hero;
