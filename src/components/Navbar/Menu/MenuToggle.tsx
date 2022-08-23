import React from "react";
import classNames from "classnames";

function MenuToggle({
  isMenuOpen,
  onClick,
  color,
}: {
  isMenuOpen: boolean;
  onClick: () => void;
  color: string;
}): JSX.Element {
  return (
    <div onClick={onClick} className="flex flex-row items-center gap-x-4">
      <span
        className={classNames(
          "font-bold uppercase",
          isMenuOpen ? "text-white-900" : `text-${color}`
        )}
      >
        menu
      </span>

      <div
        aria-label="menu-toggle"
        className={`flex flex-col gap-[8px] right-defaultSpacing`}
      >
        <span
          className={classNames(
            "w-[30px] h-[3px]  transition-all duration-300",
            isMenuOpen ? "menu-btn-topline-active  bg-white-900" : `bg-${color}`
          )}
        />
        <span
          className={classNames(
            "w-[30px] h-[3px] transition-all duration-300",
            isMenuOpen
              ? "menu-btn-bottomline-active bg-white-900"
              : `bg-${color}`
          )}
        />
      </div>
    </div>
  );
}

export default MenuToggle;
