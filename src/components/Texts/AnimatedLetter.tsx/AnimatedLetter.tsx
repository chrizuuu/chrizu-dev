import React from "react";
import classnames from "classnames";
import { motion } from "framer-motion";
import useAnimatedLetter from "./useAnimatedLetter";

function AnimatedLetter({
  letter,
  className,
  fontSize,
}: {
  letter: string;
  className?: string;
  fontSize?: string;
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
        "inline-block font-bold",
        fontSize ??
          "text-5xl xs:text-6xl md:text-8xl lg:text-[110px] xl:text-[150px] 2xl:text-[180px]",
        className
      )}
    >
      {letter}
    </motion.span>
  );
}

export default AnimatedLetter;
