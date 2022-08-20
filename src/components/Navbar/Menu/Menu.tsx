import React from "react";
import SocialList from "components/SocialList/SocialList";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

const mobileLinksContainerVariants = {
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
      duration: 0.2,
    },
  },
};

const mobileLinkVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function DesktopLink({
  text,
  route,
  onClick,
}: {
  text: string;
  route: string;
  onClick: () => void;
}): JSX.Element {
  const scrollTo = (idSection: string) => {
    if (onClick) {
      onClick();
    }
    const element = document.getElementById(idSection);
    const rect = element?.getBoundingClientRect();
    if (rect) {
      setTimeout(() => {
        window.scrollBy(0, rect.y);
      }, 400);
    }
  };

  return (
    <li
      onClick={() => scrollTo(route)}
      className={
        "group flex flex-col justify-center items-center gap-0 hover:translate-y-[-4px] transition-transform duration-200"
      }
    >
      <span className="tracking-widest font-bold transition-colors duration-300 text-white-900 text-[clamp(4.5vw,6vw,14vh)]">
        {text}
      </span>
      <span className="w-0 h-[1px] transition-w duration-500 sm:group-hover:w-full bg-white-900"></span>
    </li>
  );
}

function MobileLink({
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
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 400);
  };
  return (
    <motion.li
      variants={mobileLinkVariants}
      onClick={() => scrollIntoView(route)}
    >
      <span
        className={classNames(
          "tracking-widest transition-colors duration-300 text-white-900"
        )}
      >
        {routeName}
      </span>
    </motion.li>
  );
}

function Menu({
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
            height: 0,
          }}
          animate={{
            height: "100%",
          }}
          exit={{
            height: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
          className="fixed z-20 bg-black-900 top-0 left-0 right-0 bottom-0"
        >
          <div className="w-full h-full relative flex flex-col items-center justify-center text-[24px]">
            <motion.ul
              initial={{
                opacity: 0,
                x: 300,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="hidden lg:flex lg:flex-row items-center justify-evenly w-screen relative"
            >
              <DesktopLink
                onClick={handleCloseMenu}
                text="about me"
                route="about-me"
              />

              <DesktopLink
                onClick={handleCloseMenu}
                text="projects"
                route="projects"
              />

              <DesktopLink
                onClick={handleCloseMenu}
                text="contact"
                route="footer"
              />
            </motion.ul>
            <motion.ul
              variants={mobileLinksContainerVariants}
              initial="initial"
              animate="animate"
              className="w-full flex lg:hidden flex-col items-center relative"
            >
              <MobileLink
                route="about-me"
                routeName="About me"
                onClick={handleCloseMenu}
              />
              <MobileLink
                route="projects"
                routeName="Projects"
                onClick={handleCloseMenu}
              />
              <MobileLink
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

export default Menu;
