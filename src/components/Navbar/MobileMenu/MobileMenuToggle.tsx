import React from "react";
import classnames from "classnames";

function MobileMenuToggle({
  isMenuOpen,
  onClick,
  color,
}: {
  isMenuOpen: boolean;
  onClick: () => void;
  color: string;
}): JSX.Element {
  return (
    <button
      aria-label="menu-toggle"
      name="menu"
      type="button"
      onClick={onClick}
      className={`sm:hidden flex flex-col gap-[8px] right-defaultSpacing`}
    >
      <span
        className={classnames(
          "w-[30px] h-[3px]  transition-all duration-300",
          isMenuOpen ? "menu-btn-topline-active  bg-white-900" : `bg-${color}`
        )}
      />
      <span
        className={classnames(
          "w-[30px] h-[3px] transition-all duration-300",
          isMenuOpen ? "menu-btn-bottomline-active bg-white-900" : `bg-${color}`
        )}
      />
    </button>
  );
}

export default MobileMenuToggle;
