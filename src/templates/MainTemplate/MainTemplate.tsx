import React from "react";
import Navbar from "components/Navbar/Navbar";
import SocialList from "components/SocialList/SocialList";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

function MainTemplate({
  children,
  displayNavbar = true,
  displaySocialList = true,
  className,
  color,
}: {
  children: React.ReactNode;
  displayNavbar?: boolean;
  displaySocialList?: boolean;
  className?: string;
  color: string;
}): JSX.Element {
  return (
    <AnimatePresence>
      {displayNavbar && <Navbar color={color} />}
      {displaySocialList && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeIn",
            delay: 2,
            duration: 1,
          }}
        >
          <SocialList
            color={color}
            className={
              "hidden lg:block fixed bottom-desktopPadding right-defaultSpacing z-20"
            }
          />
        </motion.div>
      )}
      <motion.main className={classNames("w-full h-full", className)}>
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export default MainTemplate;
