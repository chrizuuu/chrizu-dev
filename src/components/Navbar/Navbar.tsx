import React from "react";
import Logo from "components/Logo/Logo";
import StyledLink from "components/StyledLink/StyledLink";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[80px] px-[15px] lg:px-[60px] bg-white-900">
      <div className="w-full h-full flex items-center justify-between">
        <Logo />
        <div className="flex flex-row gap-x-[20px] ">
          <StyledLink text="contact me" route="/contact" />
          <span>menu</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
