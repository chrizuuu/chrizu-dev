import React from "react";
import AnimatedHeader from "components/Texts/AnimatedHeader";

function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      className="w-screen  h-screen relative flex flex-col items-center justify-center md:items-start md:justify-start p-defaultSpacing pointer-events-auto"
    >
      <h3>
        <AnimatedHeader className=" text-white-900 inline-block">
          {"Contact me"}
        </AnimatedHeader>
      </h3>
      <span className="text-white-900 absolute bottom-[40px] md:left-defaultSpacing">
        © 2022 Krzysztof Bonecki
      </span>
    </footer>
  );
}

export default Footer;
