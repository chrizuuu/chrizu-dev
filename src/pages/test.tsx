import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Hero from "templates/Hero/Hero";
import Footer from "components/Footer/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SmoothScroll from "components/SmoothScroll/SmoothScroll";
import AboutMe from "templates/AboutMe/AboutMe";
import Projects from "templates/Projects/Projects";
import useScrollPos from "hooks/useScrollPos";

function Dot({ backgroundColor }: { backgroundColor?: string }) {
  const { scrollY } = useScroll();
  const windowHeight = window.screen.availHeight;
  const maxDimension = Math.max(
    window.screen.availHeight,
    window.screen.availWidth
  );

  const width = useTransform(
    scrollY,
    [0, windowHeight],
    [0, 1.5 * maxDimension]
  );
  const height = useTransform(
    scrollY,
    [0, windowHeight],
    [0, 1.5 * maxDimension]
  );
  const left = useTransform(
    scrollY,
    [windowHeight / 2, windowHeight],
    ["0%", "50%"]
  );
  const top = useTransform(
    scrollY,
    [windowHeight / 2, windowHeight],
    ["0%", "50%%"]
  );

  return (
    <motion.div
      style={{ width, height, top, left }}
      className={classNames(
        "absolute rounded-full transition-all duration-200 top-[50vh] translate-x-[-50%] translate-y-[-50%]",
        backgroundColor
      )}
    ></motion.div>
  );
}

const colors = {
  default: {
    bg: "black-800",
    color: "black-800",
  },
  darkBg: {
    bg: "black-800",
    color: "white-900",
  },
  lightBg: {
    bg: "background",
    color: "black-800",
  },
};

function Test(): JSX.Element {
  // ====================
  // Local State
  const [colorsSchema, setColorsSchema] = useState(colors.default);
  // ====================
  // Refs
  const projectRef = useRef(null);
  const spacerRef = useRef(null);
  const footerRef = useRef(null);
  const aboutRef = useRef(null);

  // ====================
  // Hooks

  const isSpacerInView = useInView(spacerRef, { amount: 0.6 });
  const isProjectInView = useInView(projectRef, { amount: 0.1 });
  const isAboutInView = useInView(aboutRef);
  const isFooterInView = useInView(footerRef);

  useEffect(() => {
    if (isSpacerInView) {
      setColorsSchema(colors.darkBg);
    } else if (
      !isSpacerInView &&
      !isProjectInView &&
      !isFooterInView &&
      !isAboutInView
    ) {
      setColorsSchema(colors.default);
    }
  }, [isSpacerInView]);

  useEffect(() => {
    if (isProjectInView) {
      setColorsSchema(colors.lightBg);
    }
  }, [isProjectInView]);

  useEffect(() => {
    if (isAboutInView) {
      setColorsSchema(colors.darkBg);
    }
  }, [isAboutInView]);

  useEffect(() => {
    if (isFooterInView) {
      setColorsSchema(colors.darkBg);
    }
  }, [isFooterInView]);

  // ====================
  // Transform

  return (
    <MainTemplate className="fixed top-0 left-0" color={colorsSchema.color}>
      <Dot backgroundColor={`bg-${colorsSchema.bg}`} />
      <SmoothScroll>
        <motion.div className="w-full z-20">
          <Hero />
        </motion.div>
        <div ref={spacerRef} className="h-[100vh] w-full z-20" />
        <div ref={aboutRef} id="about-me" className="w-full z-20">
          <AboutMe />
        </div>
        <div id="projects" ref={projectRef} className="w-full z-20">
          <Projects />
        </div>
        <div ref={footerRef} className="z-20 w-full h-full">
          <Footer />
        </div>
      </SmoothScroll>
    </MainTemplate>
  );
}

export default Test;
