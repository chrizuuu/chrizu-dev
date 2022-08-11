import React, { useState, useEffect, useRef } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const resetTimeout = (timeoutId: ReturnType<typeof setTimeout> | null) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  useEffect(() => {
    let timeoutId: null | ReturnType<typeof setTimeout> = null;

    if (isAutoPlay) {
      resetTimeout(timeoutId);
      timeoutId = setTimeout(
        () =>
          setCurrentSlide((prevSlide) =>
            prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1
          ),
        2000
      );
    } else {
      resetTimeout(timeoutId);
      setCurrentSlide(0);
    }
    return () => {
      resetTimeout(timeoutId);
    };
  }, [currentSlide, isAutoPlay]);

  return (
    <div
      onMouseEnter={() => setIsAutoPlay(true)}
      onMouseLeave={() => setIsAutoPlay(false)}
      className="group relative rotate-2 rounded hover:rotate-0 transition-transform duration-500"
    >
      {slideImages.length ? (
        <div className="overflow-hidden absolute top-0 bottom-0 left-0 right-0 z-10 scale-0 group-hover:scale-100 duration-500 transition-transform">
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
            "group-hover:opacity-0 transition-opacity duration-500",
          "border-[1px] border-black-100 -z-10"
        )}
      >
        <GatsbyImage image={mainImage.image} alt={mainImage.alt} />
      </div>
    </div>
  );
}

export default ImageSlider;
