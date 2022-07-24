import React from "react";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Hero from "templates/Hero/Hero";
import Projects from "templates/Projects/Projects";
import Footer from "components/Footer/Footer";
import useScrollPos from "hooks/useScrollPos";
import { motion, useScroll, useTransform } from "framer-motion";

function ScrollInner({ children }: { children: React.ReactNode }): JSX.Element {
  const { scrollY } = useScroll();
  const scrollPos = useScrollPos();

  const y = useTransform(
    scrollY,
    [0, document.documentElement.clientHeight],
    [0, -scrollPos]
  );

  return <motion.div style={{ y }}>{children}</motion.div>;
}

function IndexPage(): JSX.Element {
  return (
    <MainTemplate>
      <Hero />
      <ScrollInner>
        <div className="h-[200vh] w-full"></div>
        <div className="z-20">
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
