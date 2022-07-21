import React from "react";
import classnames from "classnames";
import { motion, useAnimationControls } from "framer-motion";

function AnimatedLetter({
  letter,
  className,
}: {
  letter: string;
  className?: string;
}) {
  const animateControls = useAnimationControls();

  return (
    <motion.span
      animate={animateControls}
      onHoverStart={() => {
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
      }}
      className={classnames(
        "text-4xl xs:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[118px] font-bold tracking-widest",
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
  console.log(stringArray);
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
