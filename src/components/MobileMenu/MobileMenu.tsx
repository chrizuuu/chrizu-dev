import React from "react";
import StyledLink from "components/StyledLink/StyledLink";
import SocialList from "components/SocialList/SocialList";
import { AnimatePresence, motion } from "framer-motion";

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

function MobileMenu({ isOpen }: { isOpen: boolean }): JSX.Element | null {
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
              <motion.li variants={linksItemVariants}>
                <StyledLink color="white-900" text="About me" route="/" />
              </motion.li>
              <motion.li variants={linksItemVariants}>
                <StyledLink color="white-900" text="Projects" route="/" />
              </motion.li>
              <motion.li variants={linksItemVariants}>
                <StyledLink color="white-900" text="Contact" route="/" />
              </motion.li>
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
