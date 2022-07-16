import React from "react";
import Logo from "components/Logo/Logo";
import StyledLink from "components/StyledLink/StyledLink";
import MenuToggle from "components/Menu/MenuToggle";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, toggleMenu] = useState(false);
  return (
    <div className="absolute top-[20px] left-[40px] lg:left-[60px] right-[40px] lg:right-[60px] h-[80px] ">
      <div className="w-full h-full flex items-center justify-between">
        <Logo />
        <div className="hidden sm:flex flex-row items-center gap-x-[20px] relative right-[40px]">
          <StyledLink text="contact me" route="/contact" />
          <StyledLink text="menu" route="/" />
        </div>
        <div className="fixed z-50 right-[40px] lg:right-[60px]">
          <MenuToggle
            isMenuOpen={isMenuOpen}
            onClick={() => toggleMenu(!isMenuOpen)}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
