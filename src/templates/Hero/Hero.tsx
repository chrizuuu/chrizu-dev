import React from "react";
import Header from "components/Texts/Header";
import { motion } from "framer-motion";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import AnimatedLetter from "components/Texts/AnimatedLetter.tsx/AnimatedLetter";

//Podzielic slowa na litery
// Dla kazdej litery dodac animację
// Kazda kolejna litera ma mieć większe opóźnienie

function MainText() {
  return (
    <h1 className="w-full relative">
      <span className="inline-block">
        <Header className="stroke-header">{"Web "}</Header>
        <AnimatedLetter letter="&" />
        <Header className="stroke-header">{" Mobile"}</Header>
      </span>
      <motion.span className="relative block">
        <AnimatedHeader>{"Frontend  "}</AnimatedHeader>
      </motion.span>
      <span className="w-full inline-block text-center"></span>
      <motion.span className="w-full relative block">
        <AnimatedHeader>{"Developer"}</AnimatedHeader>
      </motion.span>
    </h1>
  );
}

function Hero(): JSX.Element {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-end p-mobileH lg:p-desktopH relative">
      <MainText />
    </section>
  );
}

export default Hero;
