import classNames from "classnames";
import useAnimatedLetter from "components/Texts/AnimatedLetter.tsx/useAnimatedLetter";
import { motion } from "framer-motion";
import React from "react";

function BackgroundLetter({
  children,
  className,
}: {
  children: string;
  className?: string;
}): JSX.Element {
  const { animateControls, rubberBandAnimation, markAnimationAsComplete } =
    useAnimatedLetter();
  return (
    <motion.span
      animate={animateControls}
      onTap={rubberBandAnimation}
      onHoverStart={rubberBandAnimation}
      onAnimationComplete={markAnimationAsComplete}
      className={classNames(
        className,
        "inline-block lg:text-[30vw]  xl:text-[55vh] font-bold opacity-[0.07]"
      )}
    >
      {children}
    </motion.span>
  );
}

export default BackgroundLetter;
