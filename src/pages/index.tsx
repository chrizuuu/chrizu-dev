import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Hero from "templates/Hero/Hero";
import Footer from "components/Footer/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SmoothScroll from "components/SmoothScroll/SmoothScroll";
import AboutMe from "templates/AboutMe/AboutMe";
import Projects from "templates/Projects/Projects";

function Dot({ backgroundColor }: { backgroundColor?: string }) {
  const { scrollY } = useScroll();
  const windowHeight = window.screen.availHeight;
  const maxDimension = Math.max(
    window.screen.availHeight,
    window.screen.availWidth
  );

  const width = useTransform(
    scrollY,
    [0, 0.75 * windowHeight],
    [0, 1.5 * maxDimension]
  );
  const height = useTransform(
    scrollY,
    [0, 0.75 * windowHeight],
    [0, 1.5 * maxDimension]
  );
  const left = useTransform(
    scrollY,
    [windowHeight / 2, 0.75 * windowHeight],
    ["0%", "50%"]
  );
  const top = useTransform(
    scrollY,
    [windowHeight / 2, 0.75 * windowHeight],
    ["0%", "50%%"]
  );

  return (
    <motion.div
      style={{ width, height, top, left }}
      className={classNames(
        "absolute rounded-full transition-all duration-500 top-[50vh] translate-x-[-50%] translate-y-[-50%]",
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
  const isSpacerInView = useInView(spacerRef, { amount: 0.6 });
  const isProjectInView = useInView(projectRef, { amount: 0.1 });
  const isAboutInView = useInView(aboutRef);
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
  const windowHeight = window.screen.availHeight;
  const maxDimension = Math.max(
    window.screen.availHeight,
    window.screen.availWidth
  );

  const yHero = useTransform(
    scrollY,
    [0.75 * windowHeight, 1.3 * windowHeight],
    [0, -1.2 * maxDimension]
  );

  return (
    <MainTemplate className="fixed top-0 left-0" color={colorsSchema.color}>
      <Dot backgroundColor={`bg-${colorsSchema.bg}`} />
      <motion.section
        style={{ y: yHero }}
        className="w-full h-[100vh] relative top-[40vh]"
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
