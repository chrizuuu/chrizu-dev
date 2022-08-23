/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SectionSmallHeader from "components/Section/SectionSmallHeader";
import SectionContainer from "components/Section/SectionContainer";
import { graphql, useStaticQuery } from "gatsby";
import SectionHeader from "components/Section/SectionHeader";
import ProjectItem from "./ProjectItem";

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
    <SectionContainer className="h-full flex flex-col justify-end gap-[20vh] lg:gap-[40vh] py-defaultSpacing ">
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
