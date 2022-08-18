import React, { useState } from "react";
import Logo from "components/Logo/Logo";
import StyledLink from "components/Navbar/StyledLink";
import MobileMenuToggle from "components/Navbar/MobileMenu/MobileMenuToggle";
import MobileMenu from "components/Navbar/MobileMenu/MobileMenu";
import { AnimatePresence, motion } from "framer-motion";
import useIsScrollDown from "hooks/useIsScrollDown";

function Navbar({
  color,
  displayNavigation = true,
}: {
  color: string;
  displayNavigation: boolean;
}): JSX.Element {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const isScrollDown = useIsScrollDown();

  return (
    <>
      <motion.nav className="fixed left-defaultSpacing top-[20px] right-defaultSpacing h-[80px] z-30 transition-all duration-300">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="w-full h-full flex items-center justify-between"
          >
            <Logo
              color={isMobileMenuOpen ? "text-white-900" : `text-${color}`}
            />
            {displayNavigation && (
              <>
                <MobileMenuToggle
                  color={color}
                  isMenuOpen={isMobileMenuOpen}
                  onClick={() => toggleMobileMenu((prevState) => !prevState)}
                />
                <ul className="hidden sm:flex flex-row items-center gap-x-[20px] relative">
                  <li>
                    <StyledLink
                      color={color}
                      text="About me"
                      route="about-me"
                    />
                  </li>
                  <li>
                    <StyledLink
                      color={color}
                      text="Projects"
                      route="projects"
                    />
                  </li>
                  <li>
                    <StyledLink color={color} text="Contact" route="footer" />
                  </li>
                </ul>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.nav>
      <MobileMenu
        handleCloseMenu={() => toggleMobileMenu(false)}
        isOpen={isMobileMenuOpen}
      />
    </>
  );
}

export default React.memo(Navbar);

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
            onClick={() => toggleMobileMenu(!isMenuOpen)}
          />
        </div>
      </div>
    </div>
  );
}

*/
