import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Link } from "gatsby";

function HandEmoji() {
  const animateControls = useAnimationControls();

  return (
    <motion.span
      animate={animateControls}
      onHoverStart={() => {
        animateControls.start({
          rotateZ: [0, 20, -20, 20, -10, 10, 0, 0],
          transition: {
            ease: "easeIn",
            originX: 0.7,
            originY: 0.7,
            duration: 1.5,
          },
        });
      }}
    >
      &#128075;
    </motion.span>
  );
}

function Logo({ color }: { color?: string }): JSX.Element {
  return (
    <div>
      <Link
        className={`flex flex-row gap-[10px] text-xl lg:text-2xl font-bold ${color}`}
        to="/"
      >
        <HandEmoji />
        Krzysztof Bonecki
      </Link>
    </div>
  );
}

export default Logo;
