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
        delay: 0.7,
        ease: "linear",
      }}
      className={classNames(
        "text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-none",
        className,
        `text-${color}`
      )}
    >
      {children}
    </motion.span>
  );
}

export default SectionHeader;
