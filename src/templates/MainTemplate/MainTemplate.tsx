import React, { useEffect } from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import SocialList from "components/SocialList/SocialList";
import { motion, useScroll, useTransform } from "framer-motion";
import useScrollPos from "hooks/useScrollPos";

/*
function ScrollInner({
  children,
  windowHeight,
}: {
  children: React.ReactNode;
  windowHeight: number;
}): JSX.Element {
  const { scrollY } = useScroll();
  const scrollPos = useScrollPos();

  const y = useTransform(scrollY, [0, 1000], [0, -scrollPos]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}
*/

function Dot() {
  const { scrollY } = useScroll();

  const width = useTransform(
    scrollY,
    [0, window.screen.height],
    ["0vw", "150vw"]
  );
  const height = useTransform(
    scrollY,
    [0, window.screen.height],
    ["0vw", "150vw"]
  );
  const left = useTransform(
    scrollY,
    [900, window.screen.height],
    ["25%", "50%"]
  );
  const top = useTransform(
    scrollY,
    [900, window.screen.height],
    ["40%", "50%%"]
  );

  return (
    <motion.div
      style={{ width, height, top, left }}
      className="fixed z-40  bg-black-800 rounded-full top-[50vh] transition-all duration-0 translate-x-[-50%] translate-y-[-50%]"
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
    <div className=" bg-background overflow-x-hidden">
      {displayNavbar && <Navbar />}
      {displaySocialList && (
        <SocialList
          className={"hidden fixed bottom-[40px] left-desktopH z-10"}
        />
      )}
      <Dot />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainTemplate;
