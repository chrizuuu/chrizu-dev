import React from "react";
import Header from "components/Texts/Header";
import { motion } from "framer-motion";
import AnimatedHeader from "components/Texts/AnimatedHeader";

/*
function Signature() {
  return (
    <span className="signature absolute right-[5%] bottom-[8%] text-2xl md:text-3xl font-[400] text before:content-['<span>']  after:content-['</span>']">
      {"Portfolio"}
    </span>
  );
}
*/

function MainText() {
  return (
    <h1 className="w-full relative">
      <span className="inline-block">
        <Header className="stroke-header">{"Xyz "}</Header>
        <AnimatedHeader>{"&"}</AnimatedHeader>
        <Header className="stroke-header">{" Xyzxyz"}</Header>
      </span>
      <motion.span className="relative block">
        <AnimatedHeader>{"Xyzxyzxy  "}</AnimatedHeader>
      </motion.span>
      <span className="w-full inline-block text-center"></span>
      <motion.span className="w-full relative block">
        <AnimatedHeader>{"Xyzxyzxyz"}</AnimatedHeader>
      </motion.span>
    </h1>
  );
}

function Hero(): JSX.Element {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-end p-mobileH lg:p-desktopH relative z-20">
      <MainText />
    </section>
  );
}

export default Hero;
