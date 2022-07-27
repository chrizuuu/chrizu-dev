import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Hero from "templates/Hero/Hero";
import Projects from "templates/Projects/Projects";
import Footer from "components/Footer/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ParallaxScroll from "components/ParallaxScroll/ParallaxScroll";
import AboutMe from "templates/AboutMe/AboutMe";

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

function IndexPage(): JSX.Element {
  // ====================
  // Local State
  const [colorsSchema, setColorsSchema] = useState(colors.default);
  // ====================
  // Refs
  const projectRef = useRef(null);
  const spacerRef = useRef(null);
  const footerRef = useRef(null);

  // ====================
  // Hooks

  const isSpacerInView = useInView(spacerRef, { amount: 0.6 });
  const isProjectInView = useInView(projectRef, { amount: 0.1 });
  const isFooterInView = useInView(footerRef);

  useEffect(() => {
    if (isSpacerInView) {
      setColorsSchema(colors.darkBg);
    } else if (!isSpacerInView && !isProjectInView && !isFooterInView) {
      setColorsSchema(colors.default);
    }
  }, [isSpacerInView]);

  useEffect(() => {
    if (isProjectInView) {
      setColorsSchema(colors.lightBg);
    }
  }, [isProjectInView]);

  useEffect(() => {
    if (isFooterInView) {
      setColorsSchema(colors.darkBg);
    }
  }, [isFooterInView]);

  // ====================
  // Transform

  return (
    <MainTemplate
      className="fixed top-0 left-0"
      navbarColor={colorsSchema.color}
    >
      <Dot backgroundColor={`bg-${colorsSchema.bg}`} />
      <motion.div className="w-full z-20">
        <Hero />
      </motion.div>
      <ParallaxScroll>
        <div ref={spacerRef} className="h-[140vh] w-full z-20" />
        <div id="projects" ref={projectRef} className="w-full z-20">
          <Projects />
        </div>
        <div id="about-me" className="w-full z-20">
          <AboutMe />
        </div>
        <div ref={footerRef} className="mt-[200px] z-20 w-full h-full">
          <Footer />
        </div>
      </ParallaxScroll>
    </MainTemplate>
  );
}

export default IndexPage;
