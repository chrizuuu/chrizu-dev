import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionContainer from "components/Section/SectionContainer";
import Header from "components/Texts/Header";

function MainText() {
  return (
    <motion.span className="relative flex flex-col">
      <motion.span
        initial={{ opacity: 0, x: "-30vw" }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 1.5,
            delay: 0.4,
          },
        }}
      >
        <Header
          fontSize="text-[clamp(7vw,9vw,18vh)]"
          className="stroke-header uppercase leading-none"
        >
          {"Hello there,"}
        </Header>
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: "-30vw" }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 1.5,
            delay: 0.4,
          },
        }}
      >
        <Header
          fontSize="text-[clamp(7vw,9vw,18vh)]"
          className="stroke-header uppercase leading-none"
        >
          {"I'm Krzysztof,"}
        </Header>
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: "30vh" }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 1.5,
            delay: 0.8,
          },
        }}
      >
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
