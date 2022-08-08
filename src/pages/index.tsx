import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SmoothScroll from "components/SmoothScroll/SmoothScroll";
import AboutMe from "components/AboutMe/AboutMe";
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
        "hidden lg:block absolute rounded-full transition-colors duration-500 ease-linear top-[50vh] translate-x-[-50%] translate-y-[-50%]",
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
  const heroRef = useRef(null);
  const projectRef = useRef(null);
  const spacerRef = useRef(null);
  const footerRef = useRef(null);
  const aboutRef = useRef(null);

  // Hooks
  const { scrollY } = useScroll();
  const windowSize = useWindowSize();
  const isHeroInView = useInView(heroRef);
  const isSpacerInView = useInView(spacerRef);
  const isAboutInView = useInView(aboutRef, {
    amount: windowSize.width > 1024 ? 0.25 : 0.5,
  });
  const isProjectInView = useInView(projectRef, {
    amount: windowSize.width > 1024 ? 0.24 : 0.1,
  });
  const isFooterInView = useInView(footerRef, { amount: 0.99 });

  useEffect(() => {
    if (isHeroInView) {
      setColorsSchema(colors.default);
    }
  }, [isHeroInView]);

  useEffect(() => {
    if (isSpacerInView) {
      setColorsSchema(colors.darkBg);
    }
  }, [isSpacerInView]);

  useEffect(() => {
    if (isAboutInView) {
      setColorsSchema(colors.darkBg);
    }
  }, [isAboutInView]);

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
  // TransformY Hero section
  const maxDimension = Math.max(windowSize.height, windowSize.width);

  const yHero = useTransform(
    scrollY,
    [0.75 * windowSize.height, 1.3 * windowSize.height],
    [0, -1.5 * maxDimension]
  );

  return (
    <MainTemplate
      className="lg:fixed lg:top-0 lg:left-0"
      color={colorsSchema.color}
    >
      <Dot backgroundColor={`bg-${colorsSchema.bg}`} />
      <motion.section
        ref={heroRef}
        style={{ y: yHero }}
        className="w-full h-[100vh] relative lg:top-[50vh] 2xl:top-[30vh] bg-background lg:bg-transparent"
      >
        <Hero />
      </motion.section>
      <SmoothScroll>
        <section
          ref={spacerRef}
          id="space"
          className="hidden lg:block w-full lg:h-[50vh] pb-defaultSpacing"
        ></section>
        <section
          ref={aboutRef}
          id="about-me"
          className={classNames(
            "w-full h-auto py-defaultSpacing lg:py-0 lg:h-[200vh] z-20 bg-black-900 lg:bg-transparent",
            `text-${colorsSchema.color}`
          )}
        >
          <AboutMe color={colorsSchema.color} />
        </section>
        <section
          id="projects"
          ref={projectRef}
          className="w-full z-20 py-defaultSpacing lg:p-0 bg-background lg:bg-transparent"
        >
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
