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

function MainText() {
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
          fontSize="text-[clamp(7vw,9vw,18vh)]"
          className="stroke-header uppercase leading-none"
        >
          {"Hello there,"}
        </Header>
      </motion.span>
      <motion.span style={{ x: devTransform }}>
        <Header
          fontSize="text-[clamp(7vw,9vw,18vh)]"
          className="stroke-header uppercase leading-none"
        >
          {"I'm Krzysztof,"}
        </Header>
      </motion.span>
      <motion.span style={{ x: devTransform }}>
        <Header
          fontSize="text-[clamp(7vw,9vw,18vh)]"
          className="uppercase leading-none"
        >
          {"frontend developer"}
        </Header>
      </motion.span>
    </motion.span>
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
