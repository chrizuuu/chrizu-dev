import { useState } from "react";
import { useAnimationControls } from "framer-motion";

function useAnimatedLetter(): {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animateControls: any;
  rubberBandAnimation: () => void;
  markAnimationAsComplete: () => void;
} {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const animateControls = useAnimationControls();

  const rubberBandAnimation = () => {
    if (!isAnimationPlaying) {
      setIsAnimationPlaying(true);
      animateControls.start({
        scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
        scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
        transition: {
          ease: "easeIn",
          originX: 0.7,
          originY: 0.7,
          duration: 1,
        },
      });
    }
  };

  const markAnimationAsComplete = () => setIsAnimationPlaying(false);

  return { animateControls, rubberBandAnimation, markAnimationAsComplete };
}

export default useAnimatedLetter;
