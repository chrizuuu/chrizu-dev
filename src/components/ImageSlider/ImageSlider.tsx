import React, { useState, useEffect, useRef } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import classNames from "classnames";
import useWindowSize from "hooks/useWindowsSize";

function ImageSlider({
  mainImage,
  slideImages,
}: {
  mainImage: {
    image: IGatsbyImageData;
    alt: string;
  };
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
  const windowSize = useWindowSize();
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
    if (isInView && windowSize.width < 1024) {
      setIsPlaying(true);
    } else if (!isInView) {
      setIsPlaying(false);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        setIsPlaying(true);
      }}
      onMouseLeave={() => {
        if (windowSize.width > 1024) {
          setIsPlaying(false);
        }
      }}
      className="group relative rounded lg:hover:rotate-0 lg:rotate-2 lg:transition-transform lg:duration-500"
    >
      {slideImages.length ? (
        <div className="overflow-hidden absolute top-0 bottom-0 left-0 right-0 z-10 lg:scale-0 lg:group-hover:scale-100 lg:duration-500 lg:transition-transform">
          <AnimatePresence>
            {slideImages.map((image, index) => {
              return (
                index === currentSlide && (
                  <motion.div
                    key={index}
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    className={classNames(
                      "absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center"
                    )}
                  >
                    <GatsbyImage image={image} alt="Slider photo" />
                  </motion.div>
                )
              );
            })}
          </AnimatePresence>
        </div>
      ) : null}
      <div
        className={classNames(
          slideImages.length &&
            "opacity-0 lg:opacity-100 lg:group-hover:opacity-0 lg:transition-opacity lg:duration-500",
          "border-[1px] border-black-100 -z-10"
        )}
      >
        <GatsbyImage image={mainImage.image} alt={mainImage.alt} />
      </div>
    </div>
  );
}

export default ImageSlider;
