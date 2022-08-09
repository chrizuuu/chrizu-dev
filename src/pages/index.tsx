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
import AnimatedDot from "components/AnimatedDot/AnimatedDot";

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
  const isAboutInView = useInView(aboutRef, { amount: 0.1 });
  const isProjectInView = useInView(projectRef, { amount: 0.1 });
  const isFooterInView = useInView(footerRef, { amount: 0.99 });

  useEffect(() => {
    if (!isAboutInView && !isProjectInView && !isFooterInView) {
      setColorsSchema(colors.default);
    } else if (isAboutInView && !isProjectInView) {
      setColorsSchema(colors.darkBg);
    } else if (isProjectInView && !isAboutInView) {
      setColorsSchema(colors.lightBg);
    } else if (isFooterInView) {
      setColorsSchema(colors.darkBg);
    }
  }, [isAboutInView, isProjectInView, isFooterInView]);

  // ====================
  // TransformY Hero section
  const maxDimension = Math.max(windowSize.height, windowSize.width);

  const yHero = useTransform(
    scrollY,
    [windowSize.height, 1.8 * windowSize.height],
    [0, -1.5 * maxDimension]
  );

  return (
    <MainTemplate
      className="lg:fixed lg:top-0 lg:left-0"
      color={colorsSchema.color}
    >
      <AnimatedDot backgroundColor={`bg-${colorsSchema.bg}`} />
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
          className="hidden lg:block w-full lg:h-[100vh] pb-defaultSpacing"
        ></section>
        <section
          ref={aboutRef}
          id="about-me"
          className={classNames(
            "w-full h-auto py-defaultSpacing lg:py-0 lg:h-[240vh] z-20 bg-black-900 lg:bg-transparent",
            `text-${colorsSchema.color}`
          )}
        >
          <AboutMe color={colorsSchema.color} />
        </section>
        <section
          id="projects"
          ref={projectRef}
          className="w-full lg:h-[440vh] z-20 py-defaultSpacing lg:p-0 bg-background lg:bg-transparent"
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
