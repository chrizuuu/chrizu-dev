import React, { useState } from "react";
import Logo from "components/Logo/Logo";
import Menu from "components/Menu/Menu";
import MenuToggle from "components/Menu/MenuToggle";
import StyledLink from "components/StyledLink/StyledLink";

function Navbar() {
  const [isMenuOpen, toggleMenu] = useState(false);
  const textColor = isMenuOpen ? "text-white-900" : "text-black-800";

  return (
    <>
      <nav className="absolute top-[20px] left-[40px] lg:left-[60px] right-[40px] lg:right-[60px] h-[80px] z-40">
        <div className="w-full h-full flex items-center justify-between">
          <Logo color={textColor} />
          <div className="hidden sm:flex flex-row items-center gap-x-[20px] relative right-[40px]">
            <StyledLink color={textColor} text="contact me" route="/contact" />
            <StyledLink color={textColor} text="menu" route="/" />
          </div>
          <div className="fixed z-50 right-[40px] lg:right-[60px]">
            <MenuToggle
              isMenuOpen={isMenuOpen}
              onClick={() => toggleMenu(!isMenuOpen)}
            />
          </div>
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} />
    </>
  );
}

export default Navbar;

/*

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

*/
