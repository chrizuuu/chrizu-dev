/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SectionSmallHeader from "components/Section/SectionSmallHeader";
import SectionText from "components/Section/SectionText";
import SectionContainer from "components/Section/SectionContainer";
import Header from "components/Texts/Header";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData, getImage } from "gatsby-plugin-image";
import SectionHeader from "components/Section/SectionHeader";
import SectionLinkBtn from "components/Section/SectionLinkBtn";
import { motion } from "framer-motion";
import ImageSlider from "components/ImageSlider/ImageSlider";
import AnimatedHeader from "components/Texts/AnimatedHeader";

interface ProjectData {
  index: string;
  title: string;
  tagline: string;
  repo: string;
  live: string;
  description: string;
  main_image: any;
  main_image_alt: string;
  images: Array<IGatsbyImageData>;
}

const buttonsVariants = {
  initial: { opacity: 0, y: "50%" },
  inView: { opacity: 1, y: 0 },
};

const imageVariants = {
  initial: { y: "50%" },
  inView: { y: 0 },
};

function ProjectItem({ project }: { project: ProjectData }) {
  const {
    index,
    title,
    tagline,
    repo,
    live,
    description,
    main_image,
    main_image_alt,
    images,
  } = project;
  const image = getImage(main_image);
  const slideImages: Array<IGatsbyImageData> = [];

  images.forEach((img) => {
    const sharpImage = getImage(img);
    if (sharpImage) {
      slideImages.push(sharpImage);
    }
  });

  return (
    <div
      key={index}
      className="w-full lg:h-[50vh] flex flex-col justify-center"
    >
      <div className="flex flex-col justify-center lg:w-[50vw] relative">
        <SectionSmallHeader
          color="black-900"
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
    </div>
  );
}

function Projects(): JSX.Element {
  const data = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { fields: [frontmatter___index], order: [ASC] }
      ) {
        edges {
          node {
            id
            frontmatter {
              index
              title
              technologies
              tagline
              description
              repo
              live
              main_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              main_image_alt
              images {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);
  const projectData = data.projects.edges;
  return (
    <SectionContainer className="h-full flex flex-col justify-end gap-[40vh] py-defaultSpacing ">
      <div className="flex flex-col">
        <SectionSmallHeader
          sectionIndex={"02"}
          nameOfSection="Projects"
          className="pb-5 pt-5"
          color="black-900"
        />
        <SectionHeader>{"Some Things I've Built"}</SectionHeader>
      </div>
      <div className="flex flex-col  gap-y-[min(20vh,120px)]">
        {projectData &&
          projectData.map(({ node }: { node: any }) => {
            const { frontmatter } = node;
            return <ProjectItem project={frontmatter} key={node.id} />;
          })}
      </div>
    </SectionContainer>
  );
}

export default Projects;
