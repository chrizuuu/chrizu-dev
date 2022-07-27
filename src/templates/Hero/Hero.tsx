import React from "react";
import Header from "components/Texts/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import AnimatedLetter from "components/Texts/AnimatedLetter.tsx/AnimatedLetter";
import SectionContainer from "components/Section/SectionContainer";

function MainText() {
  const { scrollY } = useScroll();
  const windowHeight = window.screen.availHeight;
  const windowWidth = window.screen.availWidth;

  const scale = useTransform(
    scrollY,
    [windowHeight, 2 * windowHeight],
    [1, 1.5]
  );

  const branchTextOpacity = useTransform(
    scrollY,
    [windowHeight, 2 * windowHeight],
    [1, 0.25]
  );

  const left = useTransform(
    scrollY,
    [windowHeight, 2 * windowHeight, 4 * windowHeight],
    [0, 120, windowWidth + 400]
  );

  const opacity = useTransform(
    scrollY,
    [windowHeight, 1.1 * windowHeight],
    [1, 0]
  );

  return (
    <h1 className="w-full relative">
      <motion.span
        style={{ scale, left, opacity: branchTextOpacity }}
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
  );
}

function Hero(): JSX.Element {
  return (
    <SectionContainer className="flex flex-col justify-end h-screen">
      <MainText />
    </SectionContainer>
  );
}

export default Hero;
