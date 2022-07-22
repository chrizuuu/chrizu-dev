import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

function useScrollPos() {
  const [scrollPos, setScrollPos] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollPos(latest);
    });
  }, []);

  return scrollPos;
}

export default useScrollPos;
