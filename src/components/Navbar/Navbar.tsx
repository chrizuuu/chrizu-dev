import React from "react";
import Logo from "components/Logo/Logo";
import StyledLink from "components/StyledLink/StyledLink";
import MenuToggle from "components/Menu/MenuToggle";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, toggleMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 h-[80px] px-[15px] lg:px-[60px] bg-white-900">
      <div className="w-full h-full flex items-center justify-between">
        <Logo />
        <div className="flex flex-row gap-x-[20px]">
          <StyledLink text="contact me" route="/contact" />
          <div className="flex flex-row gap-x-[10px] items-center">
            <StyledLink text="menu" route="/" />
            <MenuToggle
              isMenuOpen={isMenuOpen}
              onClick={() => toggleMenu(!isMenuOpen)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
