import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import SectionContainer from "components/Section/SectionContainer";
import Header from "components/Texts/Header";

const topTextVariants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const topTextAnimation = {
  initial: { opacity: 0, y: "50%" },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

function MainTextTop() {
  return (
    <motion.span
      initial="initial"
      animate="animate"
      variants={topTextVariants}
      className="flex flex-col relative"
    >
      <motion.span variants={topTextAnimation}>
        <AnimatedHeader
          fontSize="text-[14vw] lg:text-[12.5vw] 2xl:text-[11.5vw] leading-[14vw]"
          className="inline-block uppercase"
        >
          {"Front-end "}
        </AnimatedHeader>
      </motion.span>
      <motion.span variants={topTextAnimation}>
        <AnimatedHeader
          fontSize="text-[14vw] lg:text-[12.5vw] 2xl:text-[11.5vw] leading-[14vw]"
          className="inline-block uppercase"
        >
          {"Developer,"}
        </AnimatedHeader>
      </motion.span>
    </motion.span>
  );
}

function MainTextBottom() {
  return (
    <motion.span
      initial={{ opacity: 0, x: "-30vw" }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          ease: "easeInOut",
          duration: 1.5,
          delay: 1.1,
        },
      }}
      className="relative flex flex-col"
    >
      <Header
        fontSize="text-[14vw] lg:text-[12.5vw] 2xl:text-[11.5vw]"
        className="stroke-header uppercase leading-[14vw]"
      >
        {"Student "}
      </Header>
      <Header
        fontSize="text-[14vw] lg:text-[12.5vw] 2xl:text-[11.5vw]"
        className="stroke-header uppercase leading-[14vw]"
      >
        {" and"}
      </Header>
      <Header
        fontSize="text-[14vw] lg:text-[12.5vw] 2xl:text-[11.5vw]"
        className="stroke-header uppercase leading-[14vw]"
      >
        {"minimalist"}
      </Header>
    </motion.span>
  );
}

function MainText() {
  return (
    <h1 className="w-full relative m-auto z-10">
      <MainTextTop />
      <MainTextBottom />
    </h1>
  );
}

function Hero(): JSX.Element {
  return (
    <AnimatePresence>
      <SectionContainer className="h-full my-auto">
        <div className="flex items-center w-full h-full">
          <MainText />
        </div>
      </SectionContainer>
    </AnimatePresence>
  );
}

export default Hero;
