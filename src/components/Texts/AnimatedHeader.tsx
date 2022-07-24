import React, { useState } from "react";
import classnames from "classnames";
import { motion, useAnimationControls } from "framer-motion";

function AnimatedLetter({
  letter,
  className,
}: {
  letter: string;
  className?: string;
}) {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const animateControls = useAnimationControls();

  const startAnimation = () => {
    if (!isAnimationPlaying) {
      setIsAnimationPlaying(true);
      animateControls.start({
        scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
        scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
        transition: {
          ease: "easeIn",
          originX: 0.7,
          originY: 0.7,
          duration: 1,
        },
      });
    }
  };

  return (
    <motion.span
      animate={animateControls}
      onTap={startAnimation}
      onHoverStart={startAnimation}
      onAnimationComplete={() => setIsAnimationPlaying(false)}
      className={classnames(
        "inline-block text-5xl xs:text-5xl md:text-6xl lg:text-7xl xl:text-[160px] 2xl:text-[180px] font-bold",
        className
      )}
    >
      {letter}
    </motion.span>
  );
}

function AnimatedHeader({
  children,
  className,
}: {
  children: string;
  className?: string;
}): JSX.Element {
  const stringArray = children.split("");
  return (
    <>
      {stringArray.map((letter, index) => {
        return (
          <AnimatedLetter key={index} letter={letter} className={className} />
        );
      })}
    </>
  );
}

export default AnimatedHeader;
