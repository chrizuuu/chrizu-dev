import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

function SectionHeader({
  children,
  color,
  className,
}: {
  children: string;
  color?: string;
  className?: string;
}): JSX.Element {
  return (
    <motion.span
      initial={{
        opacity: 0,
        y: "50%",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: 0.25,
        ease: "linear",
      }}
      className={classNames(
        "text-[clamp(36px,4vw,8vh)] font-bold leading-none",
        className,
        `text-${color}`
      )}
    >
      {children}
    </motion.span>
  );
}

export default SectionHeader;
