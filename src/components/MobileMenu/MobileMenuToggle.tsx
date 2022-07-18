import React from "react";
import classnames from "classnames";

function MobileMenuToggle({
  isMenuOpen,
  onClick,
}: {
  isMenuOpen: boolean;
  onClick: () => any;
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`sm:hidden flex flex-col gap-[8px] fixed right-mobileH`}
    >
      <span
        className={classnames(
          "w-[30px] h-[3px]  transition-transform duration-300",
          isMenuOpen ? "menu-btn-topline-active bg-white-900" : "bg-black-800"
        )}
      />
      <span
        className={classnames(
          "w-[30px] h-[3px] transition-transform duration-300",
          isMenuOpen
            ? "menu-btn-bottomline-active bg-white-900"
            : "bg-black-800"
        )}
      />
    </button>
  );
}

export default MobileMenuToggle;
