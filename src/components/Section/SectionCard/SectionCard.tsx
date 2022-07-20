import React from "react";
import SectionCardTagline from "./SectionCardTagline";
import SectionCardHeader from "./SectionCardHeader";
import SectionCardFooter from "./SectionCardFooter";
import SectionCardContent from "./SectionCardContent";
import SectionCardImage from "./SectionCardImage";

function SectionCard({
  header,
  tagline,
  footerText,
  image,
}: {
  header: string;
  tagline: string;
  footerText: string;
  image?: string;
}): JSX.Element {
  return (
    <div className="group section-card h-[300px] hover:section-card-active  transition-all duration-500 relative">
      <SectionCardContent className={"w-[full] max-w-[400px] z-10"}>
        <div className="flex flex-col gap-1">
          <SectionCardTagline>{tagline}</SectionCardTagline>
          <SectionCardHeader>{header}</SectionCardHeader>
        </div>
        <SectionCardFooter>{footerText}</SectionCardFooter>
      </SectionCardContent>
      <SectionCardImage
        className={
          "absolute top-0 bottom-0 right-0 w-0 group-hover:w-[400px] transition-w duration-500"
        }
      />
    </div>
  );
}

export default SectionCard;
