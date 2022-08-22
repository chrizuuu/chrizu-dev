import SectionHeader from "components/Section/SectionHeader";
import SectionText from "components/Section/SectionText";
import { motion } from "framer-motion";
import React from "react";
import BackgroundLetter from "./BackgroundLetter";
import differenceInMonths from "date-fns/differenceInMonths";
import differenceInYears from "date-fns/differenceInYears";

function BackgroundText() {
  return (
    <span className="hidden lg:flex flex-row gap-[20px] absolute right-[-5vw] z-10 ">
      <BackgroundLetter className="">I</BackgroundLetter>
      <BackgroundLetter className="">A</BackgroundLetter>
      <BackgroundLetter className="">M</BackgroundLetter>
    </span>
  );
}

const skillSetContainer = {
  inView: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const skillSetItem = {
  hidden: { opacity: 0, x: -100 },
  inView: { opacity: 1, x: 0 },
};

interface skill {
  name: string;
  startedAt?: Date;
}

const skills: Array<skill> = [
  { name: "Javascript", startedAt: new Date(2020, 1, 1) },
  { name: "Typescript", startedAt: new Date(2022, 6, 1) },
  { name: "HTML and CSS", startedAt: new Date(2019, 8, 1) },
  { name: "React", startedAt: new Date(2021, 3, 1) },
  { name: "Gatsby" },
  { name: "React Native" },
  { name: "React Query", startedAt: new Date(2022, 2, 1) },
  { name: "Framer motion", startedAt: new Date(2022, 2, 1) },
  { name: "Tailwindcss", startedAt: new Date(2022, 6, 1) },
  { name: "Styled Components", startedAt: new Date(2021, 5, 1) },
  { name: "Firebase auth + Firestore" },
];

const timeSince = (date: Date) => {
  const diffInMonths = differenceInMonths(new Date(), date);

  if (diffInMonths < 12) {
    console.log(diffInMonths);
    return `${diffInMonths} months`;
  } else {
    const diffInYears = differenceInYears(new Date(), date);

    return `${diffInYears} years`;
  }
};

function SkillSet() {
  return (
    <motion.ul
      variants={skillSetContainer}
      viewport={{ once: true }}
      initial="hidden"
      whileInView={"inView"}
      className="flex flex-wrap gap-[20px] lg:gap-[40px] pt-[40px] opacity-[0.55]"
    >
      {skills.map((skill: skill) => {
        return (
          <motion.li key={skill.name} variants={skillSetItem}>
            {skill.name}{" "}
            <span className="opacity-50">
              {skill.startedAt ? timeSince(skill.startedAt) : null}
            </span>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

function MainSkills() {
  return (
    <div className="pt-[100px] relative">
      <BackgroundText />
      <div className="w-full flex flex-col lg:w-[40vw] 2xl:w-[30vw]">
        <SectionHeader> Main skills</SectionHeader>
        <SectionText className="opacity-80 pt-[40px]">
          <p>
            Main area of my expertise is building small and medium web and
            mobile apps. <br /> I focus on creating intuitive and dynamic
            interfaces with high attention to details to ensure the best user
            experience.
          </p>
        </SectionText>
        <SkillSet />
      </div>
    </div>
  );
}

export default MainSkills;
