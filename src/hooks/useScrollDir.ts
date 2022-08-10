import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

function useScrollDir(): string {
  const [scrollDir, setScrollDir] = useState(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollDir(latest);
    });
  }, []);

  return scrollDir;
}

export default useScrollDir;
