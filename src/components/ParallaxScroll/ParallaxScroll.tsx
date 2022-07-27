import React from "react";
import useScrollPos from "hooks/useScrollPos";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxScroll({
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

  return (
    <motion.div className="z-10" style={{ y }}>
      {children}
    </motion.div>
  );
}

export default ParallaxScroll;
