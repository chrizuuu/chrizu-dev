import SectionCard from "components/Section/SectionCard/SectionCard";
import SectionCardsLayout from "components/Section/SectionCardsLayout";
import React from "react";

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
    <section className="w-screen min-h-screen p-mobilePadding lg:px-desktopPadding flex flex-col items-center">
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
    </section>
  );
}

export default Projects;
