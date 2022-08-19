import React, {
  useState,
  useRef,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
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

function ColorSwitcher({
  children,
  onChangeColor,
}: {
  children: React.ReactNode;
  onChangeColor: Dispatch<SetStateAction<{ bg: string; color: string }>>;
}) {
  const scrollPos = useScrollPos();
  const spacerRef = useRef<number | undefined>(0);
  const aboutRef = useRef<number>(0);
  const projectRef = useRef<number>(0);
  const footerRef = useRef<number>(0);

  useEffect(() => {
    spacerRef.current =
      document.getElementById("spacer")?.offsetTop || undefined;
    aboutRef.current =
      document.getElementById("about-me")?.offsetTop || 99999999;
    projectRef.current =
      document.getElementById("projects")?.offsetTop || 99999999;
    footerRef.current =
      document.getElementById("footer")?.offsetTop || 99999999;
  }, []);

  useEffect(() => {
    if (spacerRef.current) {
      if (scrollPos >= spacerRef.current && scrollPos < projectRef.current) {
        onChangeColor(colors.darkBg);
      } else if (scrollPos < spacerRef.current) {
        onChangeColor(colors.default);
      }
    }
    if (scrollPos >= aboutRef.current && scrollPos < projectRef.current) {
      onChangeColor(colors.darkBg);
    } else if (
      scrollPos >= projectRef.current &&
      scrollPos < footerRef.current
    ) {
      onChangeColor(colors.lightBg);
    } else if (scrollPos >= footerRef.current) {
      onChangeColor(colors.darkBg);
    }
  }, [scrollPos]);
  return <div>{children}</div>;
}

function IndexPage(): JSX.Element {
  // Local State
  const [colorsSchema, setColorsSchema] = useState(colors.default);

  // ====================
  // Hooks
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

  console.log("rerender");

  return (
    <MainTemplate
      className="lg:fixed lg:top-0 lg:left-0"
      color={colorsSchema.color}
    >
      <ColorSwitcher onChangeColor={setColorsSchema}>
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
      </ColorSwitcher>
    </MainTemplate>
  );
}

export default IndexPage;
