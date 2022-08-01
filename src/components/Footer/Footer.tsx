import React from "react";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import SocialList from "components/SocialList/SocialList";
import Header from "components/Texts/Header";
import { Link } from "gatsby";

function FooterContact() {
  return (
    <div className="mr-auto">
      <Link to="/" className="group">
        <AnimatedHeader
          fontSize="text-5xl xs:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[12rem] 2xl:text-[14.5rem]"
          className="text-white-900 after:w-full after:bg-white-900 after:h-1 after:block after:group-hover:scale-x-0 after:duration-500"
        >
          {"ContactMe"}
        </AnimatedHeader>
      </Link>
      <a href="mailto:chrizudev@gmail.com">
        <Header
          className="text-white-300"
          fontSize="text-3xl  xs:text-4xl md:text-4xl lg:text-5xl xl:text-7xl"
        >
          chrizudev@gmail.com
        </Header>
      </a>
    </div>
  );
}
function SubFooter() {
  return (
    <div className="container flex flex-col items-center lg:flex-row px-defaultSpacing">
      <span className="text-white-900 pb-[10px] lg:pb-0">
        © 2022 Krzysztof Bonecki
      </span>
      <SocialList color="white-900" className={"block lg:hidden"} />
    </div>
  );
}

function Footer(): JSX.Element {
  return (
    <footer className="w-screen h-screen relative flex flex-col justify-between py-mobilePadding lg:py-desktopPadding">
      <div className="w-full flex-1 flex flex-col justify-center px-defaultSpacing gap-[20px]">
        <FooterContact />
      </div>
      <SubFooter />
    </footer>
  );
}

export default Footer;
