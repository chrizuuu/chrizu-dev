import React from "react";
import SocialList from "components/SocialList/SocialList";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

const linksContainerVariants = {
  animate: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.1,
      duration: 0.2,
    },
  },
};

const linksItemVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function MenuLink({
  route,
  routeName,
  onClick,
}: {
  route: string;
  routeName: string;
  onClick: () => void;
}) {
  const scrollIntoView = (idSection: string) => {
    if (onClick) {
      onClick();
    }
    const element = document.getElementById(idSection);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  return (
    <motion.li
      variants={linksItemVariants}
      onClick={() => scrollIntoView(route)}
    >
      <span
        className={classNames(
          "tracking-widest transition-colors duration-300",
          `text-white-900`
        )}
      >
        {routeName}
      </span>
    </motion.li>
  );
}

function MobileMenu({
  isOpen,
  handleCloseMenu,
}: {
  isOpen: boolean;
  handleCloseMenu: () => void;
}): JSX.Element | null {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{
            scale: 0,
            rotate: 25,
          }}
          animate={{
            scale: "100%",
            rotate: 0,
          }}
          exit={{
            scale: 0,
            rotate: 25,
          }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
          className="sm:hidden fixed z-20 bg-black-900 top-0 left-0 right-0 bottom-0"
        >
          <div className="w-full h-full relative flex flex-col items-center justify-center text-[24px]">
            <motion.ul
              variants={linksContainerVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center gap-y-[30px] relative"
            >
              <MenuLink
                route="about-me"
                routeName="About me"
                onClick={handleCloseMenu}
              />
              <MenuLink
                route="projects"
                routeName="Projects"
                onClick={handleCloseMenu}
              />
              <MenuLink
                route="footer"
                routeName="Contact"
                onClick={handleCloseMenu}
              />
            </motion.ul>

            <motion.div
              className={"absolute bottom-[30px]"}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
            >
              <SocialList color="white-900" />
            </motion.div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
