import React from "react";
import Navbar from "components/Navbar/Navbar";
import SocialList from "components/SocialList/SocialList";
import classNames from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";

function MainTemplate({
  children,
  displayNavbar = true,
  displaySocialList = true,
  className,
  navbarColor,
}: {
  children: React.ReactNode;
  displayNavbar?: boolean;
  displaySocialList?: boolean;
  className: string;
  navbarColor: string;
}): JSX.Element {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  return (
    <>
      {displayNavbar && <Navbar color={navbarColor} />}
      {displaySocialList && (
        <SocialList className={"hidden fixed bottom-[40px] right-[8vw] z-20"} />
      )}
      <motion.main
        style={{ y: smoothScroll }}
        className={classNames("w-full h-full", className)}
      >
        {children}
      </motion.main>
    </>
  );
}

export default MainTemplate;
