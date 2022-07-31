import React from "react";
import useScrollPos from "hooks/useScrollPos";
import { motion, useScroll, useTransform } from "framer-motion";

function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { scrollY } = useScroll();
  const scrollPos = useScrollPos();

  const y = useTransform(
    scrollY,
    [0, document.documentElement.clientHeight],
    [0, -scrollPos]
  );

  return <motion.div style={{ y }}>{children}</motion.div>;
}

export default SmoothScroll;
