import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Hero from "templates/Hero/Hero";
import Footer from "components/Footer/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SmoothScroll from "components/SmoothScroll/SmoothScroll";
import AboutMe from "templates/AboutMe/AboutMe";
import Projects from "templates/Projects/Projects";
import useWindowSize from "hooks/useWindowsSize";

function Dot({ backgroundColor }: { backgroundColor?: string }) {
  const { scrollY } = useScroll();
  const windowSize = useWindowSize();
  const maxDimension = Math.max(windowSize.width, windowSize.height);

  const width = useTransform(
    scrollY,
    [0, 0.75 * windowSize.height],
    [0, 1.5 * maxDimension]
  );
  const height = useTransform(
    scrollY,
    [0, 0.75 * windowSize.height],
    [0, 1.5 * maxDimension]
  );
  const left = useTransform(
    scrollY,
    [0, 0.9 * windowSize.height],
    ["0%", "50%"]
  );
  const top = useTransform(
    scrollY,
    [0, 0.9 * windowSize.height],
    ["0%", "50%%"]
  );

  return (
    <motion.div
      style={{ width, height, top, left }}
      className={classNames(
        "absolute rounded-full transition-colors duration-500 ease-linear top-[50vh] translate-x-[-50%] translate-y-[-50%]",
        backgroundColor
      )}
    ></motion.div>
  );
}

const colors = {
  default: {
    bg: "black-900",
    color: "black-900",
  },
  darkBg: {
    bg: "black-900",
    color: "white-900",
  },
  lightBg: {
    bg: "background",
    color: "black-900",
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
  const aboutRef = useRef(null);

  // ====================
  // Hooks
  const isSpacerInView = useInView(spacerRef, { amount: 0.5 });
  const isAboutInView = useInView(aboutRef, { amount: "some" });
  const isProjectInView = useInView(projectRef, { amount: 0.1 });
  const isFooterInView = useInView(footerRef, { amount: 1 });

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
  // TransformY Hero section
  const { scrollY } = useScroll();
  const windowSize = useWindowSize();
  const maxDimension = Math.max(windowSize.height, windowSize.width);

  const yHero = useTransform(
    scrollY,
    [0.75 * windowSize.height, 1.3 * windowSize.height],
    [0, -1.2 * maxDimension]
  );

  return (
    <MainTemplate className="fixed top-0 left-0" color={colorsSchema.color}>
      <Dot backgroundColor={`bg-${colorsSchema.bg}`} />
      <motion.section
        style={{ y: yHero }}
        className="w-full h-[100vh] relative lg:top-[50vh] 2xl:top-[30vh]"
      >
        <Hero />
      </motion.section>
      <SmoothScroll>
        <section
          ref={spacerRef}
          id="space"
          className="w-full h-[100vh]"
        ></section>
        <section ref={aboutRef} id="about-me" className="w-full z-20">
          <AboutMe />
        </section>
        <section id="projects" ref={projectRef} className="w-full z-20">
          <Projects />
        </section>
        <motion.section id="footer" ref={footerRef} className="z-20 w-full">
          <Footer />
        </motion.section>
      </SmoothScroll>
    </MainTemplate>
  );
}

export default IndexPage;
