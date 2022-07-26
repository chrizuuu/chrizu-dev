import React, { useState } from "react";
import classNames from "classnames";
import { motion, useAnimationControls } from "framer-motion";
import { Link } from "gatsby";

function HandEmoji() {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const animateControls = useAnimationControls();

  const startAnimation = () => {
    if (!isAnimationPlaying) {
      setIsAnimationPlaying(true);
      animateControls.start({
        rotateZ: [0, 20, -20, 20, -10, 10, 0, 0],
        transition: {
          ease: "easeIn",
          originX: 0.7,
          originY: 0.7,
          duration: 1.5,
        },
      });
    }
  };

  return (
    <motion.span
      animate={animateControls}
      onHoverStart={startAnimation}
      onTap={startAnimation}
      onAnimationComplete={() => setIsAnimationPlaying(false)}
    >
      &#128075;
    </motion.span>
  );
}

function Logo({ color }: { color: string }): JSX.Element {
  return (
    <span
      className={classNames(
        "flex flex-row gap-[10px] text-xl font-bold",
        color
      )}
    >
      <Link to="/">Krzysztof Bonecki</Link>
    </span>
  );
}

export default Logo;
