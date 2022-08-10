/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import SectionSmallHeader from "components/Section/SectionSmallHeader";
import SectionText from "components/Section/SectionText";
import SectionContainer from "components/Section/SectionContainer";
import Header from "components/Texts/Header";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SectionHeader from "components/Section/SectionHeader";
import SectionLinkBtn from "components/Section/SectionLinkBtn";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import useScrollPos from "hooks/useScrollPos";
import useWindowSize from "hooks/useWindowsSize";

interface ProjectData {
  index: string;
  title: string;
  tagline: string;
  repo: string;
  live: string;
  description: string;
  main_image: any;
  main_image_alt: string;
}

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
  } = project;
  const image = getImage(main_image);

  // Refs
  // ===========================================================================
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  // Hooks
  // ===========================================================================
  const isButtonsInView = useInView(buttonsRef, { once: true });
  const isImageInView = useInView(imageRef, { once: true });

  return (
    <div
      key={index}
      className="w-full h-[100vh] flex flex-col gap-[40px] lg:gap-[80px] lg:flex-row lg:items-center"
    >
      <div className="flex flex-col justify-center lg:w-[40vw] relative ">
        <SectionSmallHeader
          color="black-900"
          sectionIndex={tagline}
          nameOfSection={""}
        />
        <Header
          fontSize="text-3xl xs:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          className="text-black-800"
        >
          {title}
        </Header>
        <SectionText color="black-800 ">{description}</SectionText>
        <div ref={buttonsRef} className="flex gap-[20px] pt-[40px]">
          {repo && (
            <motion.span
              style={{
                opacity: isButtonsInView ? 1 : 0,
                transform: isButtonsInView ? "none" : "translateY(25%)",
                transition: "all 0.4s ease-out 0.4s",
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
              style={{
                opacity: isButtonsInView ? 1 : 0,
                transform: isButtonsInView ? "none" : "translateY(25%)",
                transition: "all 0.4s ease-out 0.8s",
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
      <motion.div
        style={{
          transform: isImageInView ? "none" : "translateY(50%)",
          transition: "all 1s linear",
        }}
        className="lg:w-[60vw]"
      >
        {image && (
          <a ref={imageRef} target="_blank" rel="noreferrer" href={live}>
            <div className="group relative border-[1px] border-black-100 rotate-2 rounded hover:rotate-0 transition-transform duration-500">
              <GatsbyImage image={image} alt={main_image_alt} />
            </div>
          </a>
        )}
      </motion.div>
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
            }
          }
        }
      }
    }
  `);
  const projectData = data.projects.edges;
  return (
    <SectionContainer className="h-full flex flex-col justify-center">
      <SectionSmallHeader
        sectionIndex={"02"}
        nameOfSection="Projects"
        className="pb-5"
        color="black-900"
      />
      <SectionHeader className="pb-[20vh]">
        {"Some Things I've Built"}
      </SectionHeader>
      {projectData &&
        projectData.map(({ node }: { node: any }) => {
          const { frontmatter } = node;
          return <ProjectItem project={frontmatter} key={node.id} />;
        })}
    </SectionContainer>
  );
}

export default Projects;
