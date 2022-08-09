import React from "react";
import SectionSmallHeader from "components/Section/SectionSmallHeader";
import SectionText from "components/Section/SectionText";
import SectionContainer from "components/Section/SectionContainer";
import Header from "components/Texts/Header";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function Projects(): JSX.Element {
  const data = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { fields: [frontmatter___index], order: [ASC] }
      ) {
        edges {
          node {
            frontmatter {
              index
              title
              technologies
              tagline
              description
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
      {projectData &&
        projectData.map(({ node }) => {
          const { frontmatter } = node;
          const {
            index,
            title,
            tagline,
            description,
            main_image,
            main_image_alt,
          } = frontmatter;
          const image = getImage(main_image);
          return (
            <div
              key={index}
              className="w-full h-[100vh] flex flex-col gap-[80px] lg:flex-row lg:items-center"
            >
              <div className="flex flex-col justify-center lg:w-[40vw]">
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
              </div>
              <div className="lg:w-[60vw]">
                {image && (
                  <div className="border-[1px] border-black-500 rotate-2">
                    <GatsbyImage image={image} alt={main_image_alt} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </SectionContainer>
  );
}

export default Projects;
