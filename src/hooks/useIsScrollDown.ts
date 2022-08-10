import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

function useIsScrollDown(): boolean {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;

      if (scrollY.getPrevious() - latest < 0) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    });
  }, []);

  return isScrollDown;
}

export default useIsScrollDown;
