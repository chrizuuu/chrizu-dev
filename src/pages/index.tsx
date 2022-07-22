import React from "react";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import Hero from "templates/Hero/Hero";
import Projects from "templates/Projects/Projects";
import { motion, useScroll, useTransform } from "framer-motion";
import classNames from "classnames";
import useScrollPos from "hooks/useScrollPos";

function ScrollInner({ children }: { children: React.ReactNode }): JSX.Element {
  const { scrollY } = useScroll();
  const scrollPos = useScrollPos();
  var body = document.documentElement.clientHeight;

  console.log(body);
  const translateY = useTransform(scrollY, [0, body], [0, scrollPos]);

  return <motion.div style={{ translateY }}>{children}</motion.div>;
}

function IndexPage(): JSX.Element {
  return (
    <MainTemplate>
      <Hero />
      <Projects />
      <div className="h-[4000px] w-full"></div>
    </MainTemplate>
  );
}

export default IndexPage;
