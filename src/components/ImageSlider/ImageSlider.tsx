import React, { useState, useEffect, useRef } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import classNames from "classnames";

function ImageSlider({
  slideImages,
}: {
  slideImages: Array<IGatsbyImageData>;
}): JSX.Element {
  // ====================
  // Local State
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // ====================
  // Ref
  const ref = useRef(null);

  // ====================
  // Hooks
  const isInView = useInView(ref);

  const resetTimeout = (timeoutId: ReturnType<typeof setTimeout> | null) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  useEffect(() => {
    let timeoutId: null | ReturnType<typeof setTimeout> = null;

    if (isPlaying) {
      timeoutId = setTimeout(
        () =>
          setCurrentSlide((prevSlide) =>
            prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1
          ),
        2000
      );
    } else {
      setCurrentSlide(0);
    }
    return () => {
      resetTimeout(timeoutId);
    };
  }, [currentSlide, isPlaying]);

  useEffect(() => {
    if (isInView) {
      setIsPlaying(true);
    } else if (!isInView) {
      setIsPlaying(false);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="absolute top-0 bottom-0 left-0 right-0 z-10">
      <AnimatePresence>
        {slideImages.map((image, index) => {
          return (
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                className={classNames(
                  "absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center "
                )}
              >
                <GatsbyImage
                  className="rounded-md border-[1px] border-black-100"
                  image={image}
                  alt="Slider photo"
                />
              </motion.div>
            )
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default ImageSlider;
