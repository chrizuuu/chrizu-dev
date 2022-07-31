import React from "react";
import SectionSmallHeader from "components/Section/SectionSmallHeader";
import SectionText from "components/Section/SectionText";
import SectionContainer from "components/Section/SectionContainer";
import SectionCardImage from "components/Section/SectionCard/SectionCardImage";
import Header from "components/Texts/Header";
import SectionHeader from "components/Section/SectionHeader";

const data = [
  {
    name: "JetTasks",
    tagline: "Web & Mobile ",
    technologies:
      "react, react-native, react query, firebase-auth, framer-motion",
  },
  {
    name: "chrizu.dev",
    tagline: "Portfolio website",
    technologies: "gatsby, tailwindcss, framer-motion",
  },
  {
    name: "Gutenberg Reader",
    tagline: "Web",
    technologies: "react, chakraUI, firebase",
  },
  {
    name: "PoPlaner",
    tagline: "Android & Ios",
    technologies:
      "react-native, watermelonDB, react-navigation, react-reanimated",
  },
];

function Projects(): JSX.Element {
  return (
    <SectionContainer className="h-[400vh] flex flex-col">
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
            <div key={name} className="w-full h-[100vh] grid grid-cols-2">
              <div className="flex flex-col">
                <SectionSmallHeader
                  color="black-800"
                  sectionIndex={tagline}
                  nameOfSection={""}
                />
                <Header
                  fontSize="text-3xl xs:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                  className="text-black-800"
                >
                  {name}
                </Header>
                <SectionText color="black-800 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galleyLorem
                </SectionText>
              </div>
            </div>
          );
        }
      )}
    </SectionContainer>
  );
}

export default Projects;
