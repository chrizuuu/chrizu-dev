import React from "react";
import classNames from "classnames";
import { useScroll, useTransform, motion } from "framer-motion";
import useWindowSize from "hooks/useWindowsSize";

function AnimatedDot({
  backgroundColor,
}: {
  backgroundColor?: string;
}): JSX.Element {
  const { scrollY } = useScroll();
  const windowSize = useWindowSize();
  const maxDimension = Math.max(windowSize.width, windowSize.height);

  const size = useTransform(
    scrollY,
    [0, 0.75 * windowSize.height],
    [0, 1.5 * maxDimension]
  );

  const left = useTransform(
    scrollY,
    [0, 0.9 * windowSize.height],
    ["20%", "50%"]
  );
  const top = useTransform(
    scrollY,
    [0, 0.9 * windowSize.height],
    ["0%", "50%%"]
  );

  return (
    <motion.div
      style={{ width: size, height: size, top, left }}
      className={classNames(
        "hidden lg:block absolute rounded-full transition-colors duration-500 ease-linear top-[50vh] translate-x-[-50%] translate-y-[-50%]",
        backgroundColor
      )}
    ></motion.div>
  );
}

export default AnimatedDot;
