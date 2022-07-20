import React from "react";
import Header from "components/Texts/Header";

function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      className="w-screen h-screen bg-black-800 relative flex flex-col items-center justify-center md:items-start md:justify-start p-desktopH"
    >
      <Header className="text-white-900">{"<GetInTouch"}</Header>
      <Header className="stroke-white-header">email@gmail.com</Header>
      <br />
      <Header className="text-white-900">{"send_msg />"}</Header>
      <span className="text-white-900 absolute bottom-[20px] md:right-desktopH">
        © 2022 Krzysztof Bonecki. All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
