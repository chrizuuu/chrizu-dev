import React from "react";

function Footer() {
  return (
    <footer className="w-screen h-screen bg-black-800 relative flex flex-col items-center justify-center md:items-start md:justify-start p-desktopH">
      <span className="text-white-900 absolute bottom-[20px] md:right-desktopH">
        © 2022 Krzysztof Bonecki. All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
