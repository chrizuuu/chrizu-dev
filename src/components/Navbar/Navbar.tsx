import React, { useState } from "react";
import Logo from "components/Logo/Logo";
import StyledLink from "components/StyledLink/StyledLink";
import MobileMenuToggle from "components/MobileMenu/MobileMenuToggle";
import MobileMenu from "components/MobileMenu/MobileMenu";

function Navbar({ color }: { color: string }): JSX.Element {
  const [isMobileMenuOpen, toggleMenu] = useState(false);
  const fontColor = isMobileMenuOpen ? "text-white-900" : `text-${color}`;
  return (
    <>
      <nav className="fixed top-[20px] left-mobileH lg:left-desktopH right-mobileH lg:right-desktopH h-[80px] z-30">
        <div className="w-full h-full flex items-center justify-between">
          <Logo color={fontColor} />
          <MobileMenuToggle
            color={color}
            isMenuOpen={isMobileMenuOpen}
            onClick={() => toggleMenu(!isMobileMenuOpen)}
          />
          <ul className="hidden sm:flex flex-row items-center gap-x-[20px] relative">
            <li>
              <StyledLink color={color} text="projects" route="/" />
            </li>
            <li>
              <StyledLink color={color} text="about me" route="/" />
            </li>
            <li>
              <StyledLink color={color} text="contact" route="/" />
            </li>
          </ul>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} />
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
