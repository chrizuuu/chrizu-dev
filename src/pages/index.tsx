import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Hero from "templates/Hero/Hero";
import Projects from "templates/Projects/Projects";
import Footer from "components/Footer/Footer";
import useScrollPos from "hooks/useScrollPos";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

function Dot({ backgroundColor }: { backgroundColor?: string }) {
  const { scrollY } = useScroll();
  const size = window.screen.availHeight;

  const width = useTransform(scrollY, [0, size], ["0vw", "150vw"]);
  const height = useTransform(scrollY, [0, size], ["0vw", "150vw"]);
  const left = useTransform(scrollY, [size / 2, size], ["0%", "50%"]);
  const top = useTransform(scrollY, [size / 2, size], ["0%", "50%%"]);

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

function ScrollInner({ children }: { children: React.ReactNode }): JSX.Element {
  const { scrollY } = useScroll();
  const scrollPos = useScrollPos();

  const y = useTransform(
    scrollY,
    [0, document.documentElement.clientHeight],
    [0, -scrollPos]
  );

  return (
    <motion.div className="z-10" style={{ y }}>
      {children}
    </motion.div>
  );
}

// change navbar font color when dot has benn growing
// add animation inView for section
// Change bg-color on white in about me section
//

function IndexPage(): JSX.Element {
  // ====================
  // Local State
  const [dotColor, setDotColor] = useState("bg-black-800");
  // ====================
  // Refs
  const projectRef = useRef(null);
  const spacerRef = useRef(null);

  // ====================
  // Hooks
  const isSpacerInView = useInView(spacerRef);
  const isProjectInView = useInView(projectRef);

  useEffect(() => {
    if (isSpacerInView) {
      setDotColor("bg-black-800");
    }
  }, [isSpacerInView]);

  useEffect(() => {
    if (isProjectInView) {
      setDotColor("bg-background");
    } else {
      setDotColor("bg-black-800");
    }
  }, [isProjectInView]);
  return (
    <MainTemplate className="fixed top-0 left-0">
      <Dot backgroundColor={dotColor} />
      <div className="w-full z-20">
        <Hero />
      </div>
      <ScrollInner>
        <div ref={spacerRef} className="h-[100vh] w-full z-20" />
        <div ref={projectRef} className="w-full z-20">
          <Projects />
        </div>
        <div className="z-20">
          <Footer />
        </div>
      </ScrollInner>
    </MainTemplate>
  );
}

export default IndexPage;
