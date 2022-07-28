import React from "react";
import SectionCard from "components/Section/SectionCard/SectionCard";
import SectionSmallHeader from "components/Section/SectionSmallHeader";
import SectionHeader from "components/Section/SectionHeader";
import SectionCardsLayout from "components/Section/SectionCardsLayout";
import SectionContainer from "components/Section/SectionContainer";

const data = [
  {
    name: "JetTasks",
    tagline: "Web && Mobile ",
    technologies:
      "react, react-native, react query, styled-components, firebase-auth, framer-motion",
  },
  {
    name: "chrizu",
    tagline: "Portfolio website",
    technologies: "gatsby, tailwindcss, framer-motion",
  },
  {
    name: "chrizu.ev",
    tagline: "Portfolio website",
    technologies: "gatsby, tailwindcss, framer-motion",
  },
  {
    name: "chrizu.d",
    tagline: "Portfolio website",
    technologies: "gatsby, tailwindcss, framer motion",
  },
];

function Projects(): JSX.Element {
  return (
    <SectionContainer className="h-[200vh] flex flex-col">
      <SectionSmallHeader
        color="black-800"
        sectionIndex={"01"}
        nameOfSection="Projects"
      />
      <SectionHeader color="black-800">Projects</SectionHeader>
      <SectionCardsLayout>
        {data.map(
          ({
            name,
            tagline,
            technologies,
          }: {
            name: string;
            tagline: string;
            technologies: string;
          }) => {
            return (
              <SectionCard
                key={name}
                tagline={tagline}
                header={name}
                footerText={technologies}
              />
            );
          }
        )}
      </SectionCardsLayout>
    </SectionContainer>
  );
}

export default Projects;
