import React from "react";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import SocialList from "components/SocialList/SocialList";
import { Link } from "gatsby";

function FooterContact() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-white-700 text-lg sm:text-3xl text-center block pb-[20px]">
        Got a project or proposal?
      </h3>
      <Link to="/" className="group">
        <AnimatedHeader
          fontSize="text-4xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          className="text-white-900 after:w-full after:bg-white-900 after:h-1 after:block after:group-hover:scale-x-0 after:duration-500"
        >
          {"ContactMe"}
        </AnimatedHeader>
      </Link>
    </div>
  );
}
function SubFooter() {
  return (
    <div className="flex flex-col gap-y-2 items-center justify-between lg:flex-row px-defaultSpacing">
      <SocialList color="white-900 lg:order-1" />
      <a className="lg:order-3" href="mailto:chrizudev@gmail.com">
        <span className="text-white-900 pb-[10px] lg:pb-0">
          chrizudev@gmail.com
        </span>
      </a>
      <span className="text-white-900  pb-[10px] lg:pb-0 lg:order-2">
        © 2022 Krzysztof Bonecki
      </span>
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
