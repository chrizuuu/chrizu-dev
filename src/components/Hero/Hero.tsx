import React from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
} from "framer-motion";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import SectionContainer from "components/Section/SectionContainer";
import Header from "components/Texts/Header";
import useWindowSize from "hooks/useWindowsSize";

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
  const windowSize = useWindowSize();
  const { scrollY } = useScroll();
  const krzysztofTransform = useTransform(
    scrollY,
    [0.6 * windowSize.height, 1.8 * windowSize.height],
    [0, -1.5 * windowSize.width]
  );

  const boneckiTransform = useTransform(
    scrollY,
    [0.8 * windowSize.height, 2 * windowSize.height],
    [0, 1.5 * windowSize.width]
  );

  return (
    <motion.span
      initial="initial"
      animate="animate"
      variants={topTextVariants}
      className="flex flex-col relative"
    >
      <motion.span
        style={{ x: krzysztofTransform }}
        variants={topTextAnimation}
      >
        <AnimatedHeader
          fontSize="text-[clamp(7vw,11.5vw,20vh)]"
          className="inline-block uppercase"
        >
          {"Krzysztof "}
        </AnimatedHeader>
      </motion.span>
      <motion.span style={{ x: boneckiTransform }} variants={topTextAnimation}>
        <AnimatedHeader
          fontSize="text-[clamp(7vw,11.5vw,20vh)]"
          className="inline-block uppercase"
        >
          {"Bonecki"}
        </AnimatedHeader>
      </motion.span>
    </motion.span>
  );
}

function MainTextBottom() {
  const windowSize = useWindowSize();
  const { scrollY } = useScroll();

  const frontTransform = useTransform(
    scrollY,
    [1 * windowSize.height, 2.2 * windowSize.height],
    [0, -1.5 * windowSize.width]
  );

  const devTransform = useTransform(
    scrollY,
    [1.2 * windowSize.height, 2.4 * windowSize.height],
    [0, 1.5 * windowSize.width]
  );
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
      <motion.span style={{ x: frontTransform }}>
        <Header
          fontSize="text-[clamp(7vw,11.5vw,20vh)]"
          className="stroke-header uppercase"
        >
          {"Front-end "}
        </Header>
      </motion.span>
      <motion.span style={{ x: devTransform }}>
        <Header
          fontSize="text-[clamp(7vw,11.5vw,20vh)]"
          className="stroke-header uppercase "
        >
          {"Developer"}
        </Header>
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
      <SectionContainer className="h-full py-[80px] lg:py-0">
        <div className="flex items-center w-full h-full">
          <MainText />
        </div>
      </SectionContainer>
    </AnimatePresence>
  );
}

export default Hero;
