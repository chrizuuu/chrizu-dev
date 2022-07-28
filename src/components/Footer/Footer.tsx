import React from "react";
import Header from "components/Texts/Header";
import AnimatedHeader from "components/Texts/AnimatedHeader";

function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      className="w-screen h-screen bg-black-800 relative flex flex-col items-center justify-center md:items-start md:justify-start p-defaultSpacing"
    >
      <h3>
        <AnimatedHeader className=" text-white-900 inline-block">
          {"Get In Touch"}
        </AnimatedHeader>
        <Header className="stroke-white-header">email@gmail.com</Header>
      </h3>
      <span className="text-white-900 absolute bottom-[20px] md:left-defaultSpacing">
        © 2022 Krzysztof Bonecki. All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
