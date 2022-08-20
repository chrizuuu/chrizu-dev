import React, { useState } from "react";
import Logo from "components/Logo/Logo";
import MobileMenuToggle from "components/Navbar/Menu/MenuToggle";
import Menu from "components/Navbar/Menu/Menu";
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
      <motion.nav
        className="fixed left-[4vw] top-[20px] right-[4vw] h-[80px] z-30 transition-all duration-300"
        style={{
          y: isScrollDown && !isMobileMenuOpen ? "-120px" : 0,
        }}
      >
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
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.nav>
      <Menu
        handleCloseMenu={() => toggleMobileMenu(false)}
        isOpen={isMobileMenuOpen}
      />
    </>
  );
}

export default Navbar;
