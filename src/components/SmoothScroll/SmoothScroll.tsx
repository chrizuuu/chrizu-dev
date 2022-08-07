import React, { useEffect, useState } from "react";
import useScrollPos from "hooks/useScrollPos";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const documentHeight = useDocumentHeight();

  const y = useTransform(scrollY, [0, documentHeight], [0, -scrollPos]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}

export default SmoothScroll;
