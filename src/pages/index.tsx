import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import SmoothScroll from "components/SmoothScroll/SmoothScroll";
import AboutMe from "components/AboutMe/AboutMe";
import Projects from "templates/Projects/Projects";
import useWindowSize from "hooks/useWindowsSize";
import AnimatedDot from "components/AnimatedDot/AnimatedDot";
import useScrollPos from "hooks/useScrollPos";

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

const useColorSchema = () => {
  const scrollPos = useScrollPos();
  const [colorsSchema, setColorsSchema] = useState(colors.default);

  const spacerRef = useRef<number>(0);
  const aboutRef = useRef<number>(0);
  const projectRef = useRef<number>(0);
  const footerRef = useRef<number>(0);

  useEffect(() => {
    spacerRef.current =
      document.getElementById("spacer")?.offsetTop || 99999999;
    aboutRef.current =
      document.getElementById("about-me")?.offsetTop || 99999999;
    projectRef.current =
      document.getElementById("projects")?.offsetTop || 99999999;
    footerRef.current =
      document.getElementById("footer")?.offsetTop || 99999999;
  }, []);

  useEffect(() => {
    if (scrollPos < aboutRef.current) {
      setColorsSchema(colors.default);
    }
    if (scrollPos > spacerRef.current) {
      setColorsSchema(colors.darkBg);
    }
    if (scrollPos > aboutRef.current && scrollPos < projectRef.current) {
      setColorsSchema(colors.darkBg);
    } else if (
      scrollPos >= projectRef.current &&
      scrollPos < footerRef.current
    ) {
      setColorsSchema(colors.lightBg);
    } else if (scrollPos >= footerRef.current) {
      setColorsSchema(colors.darkBg);
    }
  }, [scrollPos]);

  return colorsSchema;
};

function IndexPage(): JSX.Element {
  // Hooks
  const colorsSchema = useColorSchema();
  const { scrollY } = useScroll();
  const windowSize = useWindowSize();
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
        id="hero"
        style={{ y: yHero }}
        className="w-full h-[100vh] relative lg:top-[50vh] 2xl:top-[30vh] bg-background lg:bg-transparent"
      >
        <Hero />
      </motion.section>
      <SmoothScroll>
        <section
          id="spacer"
          className="hidden lg:block w-full lg:h-[100vh] pb-defaultSpacing"
        ></section>
        <section
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
          className="w-full lg:h-[440vh] z-20 py-defaultSpacing lg:p-0 bg-background lg:bg-transparent"
        >
          <Projects />
        </section>
        <motion.section id="footer" className="z-20 w-full">
          <Footer />
        </motion.section>
      </SmoothScroll>
    </MainTemplate>
  );
}

export default IndexPage;
