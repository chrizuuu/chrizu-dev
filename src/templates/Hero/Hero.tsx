import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import SectionContainer from "components/Section/SectionContainer";

function BackgroundText({ className }: { className?: string }): JSX.Element {
  return (
    <motion.span
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      className={classNames(
        className,
        `text-[max(80vw,30vh)] lg:text-[max(100vh,45vw)] font-bold leading-[100vh] text-black-100 absolute top-[60px] right-0`
      )}
    >
      KB
    </motion.span>
  );
}

const topTextVariants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const topTextAni = {
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
      <motion.span variants={topTextAni} className="inline-block">
        <AnimatedHeader className="stroke-header">{"Frontend "}</AnimatedHeader>
      </motion.span>
      <motion.span variants={topTextAni} className="inline-block">
        <AnimatedHeader className="stroke-header">
          {"Developer "}
        </AnimatedHeader>
      </motion.span>
    </motion.span>
  );
}

const bottomTextVariants = {
  animate: {
    transition: {
      delayChildren: 1.1,
      staggerChildren: 0.08,
    },
  },
};

const bottomTextAni = {
  initial: { opacity: 0, x: "-30vw" },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

function MainTextBottom() {
  return (
    <motion.span
      variants={bottomTextVariants}
      initial="initial"
      animate="animate"
    >
      <motion.span variants={bottomTextAni} className="relative block">
        <AnimatedHeader>{"Krzysztof  "}</AnimatedHeader>
      </motion.span>
      <motion.span variants={bottomTextAni} className="w-full relative block">
        <AnimatedHeader>{"Bonecki"}</AnimatedHeader>
      </motion.span>
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
      <div className="flex items-center w-full h-full">
        <SectionContainer className="mx-0 my-auto">
          <MainText />
          <BackgroundText />
        </SectionContainer>
      </div>
    </AnimatePresence>
  );
}

export default Hero;
