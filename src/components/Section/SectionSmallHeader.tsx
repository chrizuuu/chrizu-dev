import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import splitByWord from "utils/splitByWord";

function Word({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <span className={classNames(`inline-block font-bold text-${color}`)}>
      {children}
    </span>
  );
}

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
  const nameOfSectionArr = splitByWord(nameOfSection);
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.h2
      ref={ref}
      className={classNames(className, "text-[18px] flex flex-row")}
    >
      <motion.span
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(50%)",
          transition: "all 0.4s linear",
        }}
      >
        <Word color={color}>{sectionIndex}</Word>
      </motion.span>
      <motion.span
        style={{
          scaleX: isInView ? 1 : 0,
          transition: "transform 0.4s linear 0.3s",
        }}
        className={classNames(
          "w-[90px] lg:w-[160px] h-[1px] my-auto inline-block mx-[10px] lg:mx-[32px]",
          `bg-${color}`
        )}
      />
      <motion.div
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(50%)",
          transition: "all 0.4s linear 0.6s",
        }}
        className="inline-block"
      >
        {nameOfSectionArr.map((word, index) => {
          return (
            <React.Fragment key={index}>
              <Word color={color}>{word}</Word>
              <span> </span>
            </React.Fragment>
          );
        })}
      </motion.div>
    </motion.h2>
  );
}

export default SectionSmallHeader;
