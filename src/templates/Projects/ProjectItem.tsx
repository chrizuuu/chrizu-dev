import React, { useState } from "react";
import ImageSlider from "components/ImageSlider/ImageSlider";
import SectionLinkBtn from "components/Section/SectionLinkBtn";
import SectionSmallHeader from "components/Section/SectionSmallHeader";
import SectionText from "components/Section/SectionText";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import { motion, AnimatePresence } from "framer-motion";
import { IGatsbyImageData, getImage } from "gatsby-plugin-image";
import useMousePosRelativeTo from "hooks/useMousePosRelativeTo";

interface ProjectData {
  index: string;
  title: string;
  tagline: string;
  repo: string;
  live: string;
  description: string;
  images: Array<IGatsbyImageData>;
}

const buttonsVariants = {
  initial: { opacity: 0, y: "50%" },
  inView: { opacity: 1, y: 0 },
};

function ProjectImagesContainer({
  children,
  posRelatedTo,
}: {
  children: React.ReactNode;
  posRelatedTo: string;
}) {
  const mousePos = useMousePosRelativeTo(posRelatedTo);
  return (
    <motion.div
      style={{
        x: -mousePos.x / 2,
        y: -mousePos.y / 2,
      }}
      className=" rounded-md z-0"
    >
      {children}
    </motion.div>
  );
}

function ProjectImages({
  images,
  posRelatedTo,
}: {
  images: Array<IGatsbyImageData>;
  posRelatedTo: string;
}) {
  if (!images.length) {
    return null;
  }
  const slideImages: Array<IGatsbyImageData> = [];

  images.forEach((img) => {
    const sharpImage = getImage(img);
    if (sharpImage) {
      slideImages.push(sharpImage);
    }
  });

  return (
    <ProjectImagesContainer posRelatedTo={posRelatedTo}>
      <ImageSlider slideImages={slideImages} />
    </ProjectImagesContainer>
  );
}

function ProjectItem({ project }: { project: ProjectData }): JSX.Element {
  const { index, title, tagline, repo, live, description, images } = project;
  const [isImage, setIsImageDisplay] = useState<boolean>(false);
  return (
    <div
      key={index}
      className="group relative w-full lg:h-[50vh] flex flex-col justify-center"
    >
      <div
        id={`project-${index}`}
        onMouseEnter={() => setIsImageDisplay(true)}
        onMouseLeave={() => setIsImageDisplay(false)}
        className="flex flex-col justify-center relative lg:w-[50%] 2xl:w-[40%] z-10 py-mobilePadding lg:py-desktopPadding"
      >
        <SectionSmallHeader
          color="black-900"
          className="uppercase"
          sectionIndex={tagline}
          nameOfSection={""}
        />
        <AnimatedHeader
          fontSize="text-3xl xs:text-4xl md:text-6xl lg:text-7xl pt-[20px] pb-[40px]"
          className="text-black-800"
        >
          {title}
        </AnimatedHeader>
        <SectionText color="black-800 ">{description}</SectionText>
        <div className="flex gap-[20px] pt-[40px]">
          {repo && (
            <motion.span
              variants={buttonsVariants}
              viewport={{ once: true }}
              initial="initial"
              whileInView="inView"
              transition={{
                duration: 0.4,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              <SectionLinkBtn
                text="Repository"
                background="transparent"
                color="black-900"
                route={repo}
                className="border-2 border-black-900 hover:scale-[1.05] duration-500"
              />
            </motion.span>
          )}
          {live && (
            <motion.span
              variants={buttonsVariants}
              viewport={{ once: true }}
              initial="initial"
              whileInView="inView"
              transition={{
                duration: 0.4,
                delay: 0.6,
                ease: "easeOut",
              }}
            >
              <SectionLinkBtn
                text="View live"
                background="black-900"
                color="white-900"
                route={live}
                className="hover:scale-[1.05] duration-500"
              />
            </motion.span>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isImage ? (
          <motion.div
            key="project-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="hidden lg:block lg:w-[70%] absolute right-[-8.5vw]"
          >
            <ProjectImages posRelatedTo={`project-${index}`} images={images} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default ProjectItem;
