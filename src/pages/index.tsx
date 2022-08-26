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
import Projects from "templates/Projects";
import useWindowSize from "hooks/useWindowsSize";
import AnimatedDot from "components/AnimatedDot/AnimatedDot";
import useScrollPos from "hooks/useScrollPos";
import Seo from "components/Seo/Seo";

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
  onColorChange,
}: {
  children: React.ReactNode;
  onColorChange: Dispatch<SetStateAction<{ bg: string; color: string }>>;
}) {
  const scrollPos = useScrollPos();
  const heroRef = useRef<{ top: number; bottom: number }>({
    top: 0,
    bottom: 0,
  });
  const aboutRef = useRef<{ top: number; bottom: number }>({
    top: 0,
    bottom: 0,
  });
  const projectRef = useRef<{ top: number; bottom: number }>({
    top: 0,
    bottom: 0,
  });
  const footerRef = useRef<{ top: number; bottom: number }>({
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    const heroElem = document.getElementById("hero");
    const aboutElem = document.getElementById("about-me");
    const projectElem = document.getElementById("projects");
    const footerElem = document.getElementById("footer");

    if (heroElem) {
      const heroPos = heroElem.getBoundingClientRect();
      heroRef.current = {
        top: Math.round(heroPos.top),
        bottom: Math.round(heroPos.bottom),
      };
    }
    if (aboutElem) {
      const aboutPos = aboutElem.getBoundingClientRect();
      aboutRef.current = {
        top: Math.round(aboutPos.top),
        bottom: Math.round(aboutPos.bottom),
      };
    }
    if (projectElem) {
      const projectPos = projectElem.getBoundingClientRect();
      projectRef.current = {
        top: Math.round(projectPos.top),
        bottom: Math.round(projectPos.bottom),
      };
    }
    if (footerElem) {
      const footerPos = footerElem.getBoundingClientRect();
      footerRef.current = {
        top: Math.round(footerPos.top),
        bottom: Math.round(footerPos.bottom),
      };
    }
  }, []);

  useEffect(() => {
    if (
      scrollPos >= heroRef.current.top &&
      scrollPos < heroRef.current.bottom
    ) {
      onColorChange(colors.default);
    } else if (
      scrollPos >= aboutRef.current.top &&
      scrollPos < aboutRef.current.bottom
    ) {
      onColorChange(colors.darkBg);
    } else if (
      scrollPos >= projectRef.current.top &&
      scrollPos < projectRef.current.bottom
    ) {
      onColorChange(colors.lightBg);
    } else if (
      scrollPos >= footerRef.current.top &&
      scrollPos <= footerRef.current.bottom
    ) {
      onColorChange(colors.darkBg);
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
    [0.8 * windowSize.height, 1.5 * windowSize.height],
    [0, -1.5 * maxDimension]
  );

  return (
    <MainTemplate
      className="lg:fixed lg:top-0 lg:left-0"
      color={colorsSchema.color}
    >
      <ColorSwitcher onColorChange={setColorsSchema}>
        <AnimatedDot backgroundColor={`bg-${colorsSchema.bg}`} />
        <motion.section
          style={{ y: yHero }}
          id="hero"
          className="w-full h-[100vh] relative lg:top-[max(100px,10vh)] bg-background lg:bg-transparent "
        >
          <Hero />
        </motion.section>
        <SmoothScroll>
          <section
            id="spacer"
            className="hidden lg:block w-full lg:h-[40vh] pb-defaultSpacing"
          ></section>
          <section
            id="about-me"
            className={classNames(
              "w-full h-auto lg:h-[240vh] z-20 bg-black-900 lg:bg-transparent",
              `text-${colorsSchema.color}`
            )}
          >
            <AboutMe color={colorsSchema.color} />
          </section>
          <section
            id="projects"
            className="w-full lg:h-[340vh] z-20 bg-background lg:bg-transparent  "
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

export const Head = (): JSX.Element => (
  <Seo>
    <title lang="en">Krzysztof Bonecki - Portfolio</title>
    <meta property="og:title" content="Krzysztof Bonecki - Portfolio" />
  </Seo>
);

export default IndexPage;
