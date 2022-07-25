import React from "react";
import classnames from "classnames";
import { motion } from "framer-motion";
import useAnimatedLetter from "./useAnimatedLetter";

function AnimatedLetter({
  letter,
  className,
}: {
  letter: string;
  className?: string;
}): JSX.Element {
  const { animateControls, rubberBand, markAnimationAsComplete } =
    useAnimatedLetter();
  return (
    <motion.span
      animate={animateControls}
      onTap={rubberBand}
      onHoverStart={rubberBand}
      onAnimationComplete={markAnimationAsComplete}
      className={classnames(
        "inline-block text-5xl xs:text-5xl md:text-6xl lg:text-7xl xl:text-[160px] 2xl:text-[180px] font-bold",
        className
      )}
    >
      {letter}
    </motion.span>
  );
}

export default AnimatedLetter;
