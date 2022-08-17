import React, { useEffect, useState } from "react";
import useScrollPos from "hooks/useScrollPos";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import useWindowSize from "hooks/useWindowsSize";

function useDocumentHeight(): number {
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    setDocumentHeight(document.documentElement.clientHeight);
  }, []);

  return documentHeight;
}

function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { scrollY } = useScroll();
  const scrollPos = useScrollPos();
  const windowSize = useWindowSize();
  const documentHeight = useDocumentHeight();

  let y: MotionValue | undefined = useTransform(
    scrollY,
    [0, documentHeight],
    [0, -scrollPos]
  );

  if (windowSize.width < 1024) {
    y = undefined;
  }

  return <motion.div style={{ y }}>{children}</motion.div>;
}

export default SmoothScroll;
