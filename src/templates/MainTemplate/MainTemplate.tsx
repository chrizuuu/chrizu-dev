import React from "react";
import Navbar from "components/Navbar/Navbar";
import SocialList from "components/SocialList/SocialList";
import { motion, useScroll, useTransform } from "framer-motion";

function Dot() {
  const { scrollY } = useScroll();
  const size = window.screen.availHeight;

  const width = useTransform(scrollY, [0, size], ["0vw", "150vw"]);
  const height = useTransform(scrollY, [0, size], ["0vw", "150vw"]);
  const left = useTransform(scrollY, [size / 2, size], ["40%", "50%"]);
  const top = useTransform(scrollY, [size / 2, size], ["40%", "50%%"]);

  return (
    <motion.div
      style={{ width, height, top, left }}
      className="fixed bg-black-800 rounded-full transition-all duration-0 top-[50vh] translate-x-[-50%] translate-y-[-50%]"
    ></motion.div>
  );
}

function MainTemplate({
  children,
  displayNavbar = true,
  displaySocialList = true,
}: {
  children: React.ReactNode;
  displayNavbar?: boolean;
  displaySocialList?: boolean;
}): JSX.Element {
  return (
    <>
      {displayNavbar && <Navbar />}
      {displaySocialList && (
        <SocialList
          className={"hidden lg:block fixed bottom-[40px] right-desktopH z-10"}
        />
      )}
      <Dot />
      <main className="fixed top-0 left-0 w-full h-ful">{children}</main>
    </>
  );
}

export default MainTemplate;
