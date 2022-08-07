import React from "react";
import StyledLink from "components/StyledLink/StyledLink";
import SocialList from "components/SocialList/SocialList";

function MobileMenu({ isOpen }: { isOpen: boolean }): JSX.Element | null {
  if (!isOpen) {
    return null;
  }
  return (
    <nav className="sm:hidden fixed z-20 bg-[black] top-0 left-0 right-0 bottom-0">
      <div className="w-full h-full relative flex flex-col items-center justify-center text-[24px]">
        <ul className="flex flex-col items-center gap-y-[30px] relative">
          <li>
            <StyledLink color="white-900" text="About me" route="/" />
          </li>
          <li>
            <StyledLink color="white-900" text="Projects" route="/" />
          </li>
          <li>
            <StyledLink color="white-900" text="Contact" route="/" />
          </li>
        </ul>
        <SocialList color="white-900" className={"absolute bottom-[30px]"} />
      </div>
    </nav>
  );
}

export default MobileMenu;
