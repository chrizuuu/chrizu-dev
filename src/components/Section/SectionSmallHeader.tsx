import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function SectionSmallHeader({
  sectionIndex,
  nameOfSection,
  color,
  className,
}: {
  sectionIndex: string;
  nameOfSection: string;
  color: string;
  className?: string;
}): JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.h2
      ref={ref}
      className={classNames(className, "text-[16px] flex flex-row")}
    >
      <motion.span
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(50%)",
          transition: "all 0.4s linear",
        }}
        className={classNames(
          `inline-block font-bold text-${color} transition-colors`
        )}
      >
        {sectionIndex}
      </motion.span>
      <motion.span
        style={{
          scaleX: isInView ? 1 : 0,
          transition: "transform 0.4s linear 0.3s",
        }}
        className={classNames(
          "w-[90px] lg:w-[160px] h-[1px] my-auto inline-block mx-[10px] lg:mx-[32px]",
          `bg-${color} transition-colors`
        )}
      />
      <motion.span
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(50%)",
          transition: "all 0.4s linear 0.6s",
        }}
        className={classNames(
          `inline-block font-bold text-${color} transition-colors`
        )}
      >
        {nameOfSection}
      </motion.span>
    </motion.h2>
  );
}

export default SectionSmallHeader;
