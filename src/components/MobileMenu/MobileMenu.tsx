import React from "react";
import StyledLink from "components/StyledLink/StyledLink";
import SocialListHorizontal from "components/SocialList/SocialListHorizontal";

function MobileMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) {
    return null;
  }
  return (
    <nav className="sm:hidden fixed z-20 bg-[black] top-0 left-0 right-0 bottom-0">
      <div className="w-full h-full relative flex flex-col items-center justify-center text-white-900 text-[24px]">
        <ul className="flex flex-col items-center gap-y-[30px] relative">
          <li>
            <StyledLink text="projects" route="/" />
          </li>
          <li>
            <StyledLink text="playground" route="/" />
          </li>
          <li>
            <StyledLink text="about me" route="/" />
          </li>
          <li>
            <StyledLink text="contact" route="/" />
          </li>
        </ul>
        <SocialListHorizontal className={"absolute bottom-[30px]"} />
      </div>
    </nav>
  );
}

export default MobileMenu;