import React from "react";
import Header from "components/Texts/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import useScrollPos from "hooks/useScrollPos";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";

function Signature() {
  return (
    <span className="signature absolute right-[5%] bottom-[8%] text-2xl md:text-3xl font-[400] text before:content-['<span>']  after:content-['</span>']">
      {"Portfolio"}
    </span>
  );
}

function MainText() {
  return (
    <h1 className="w-full relative z-50">
      <span className="inline-block z-50">
        <Header className="stroke-header">{"Web "}</Header>
        <AnimatedHeader>{"&"}</AnimatedHeader>
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
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 1800], ["0vw", "150vw"]);
  const height = useTransform(scrollY, [0, 1800], ["0vw", "150vw"]);
  const left = useTransform(scrollY, [900, 1800], ["25%", "50%"]);
  const top = useTransform(scrollY, [900, 1800], ["40%", "50%%"]);

  return (
    <section className="w-screen h-screen flex flex-col items-center justify-end p-mobileH lg:p-desktopH bg-white-900 relative">
      <MainText />
    </section>
  );
}

export default Hero;
