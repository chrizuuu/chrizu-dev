import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import classNames from "classnames";

function SectionHeader({
  children,
  color,
  className,
}: {
  children: string;
  color: string;
  className?: string;
}): JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.span
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(50%)",
        transition: "all 0.4s linear 1s",
      }}
      ref={ref}
      className={classNames(
        "text-[48px] lg:text-[64px] font-bold leading-none",
        className,
        `text-${color}`
      )}
    >
      {children}
    </motion.span>
  );
}

export default SectionHeader;
