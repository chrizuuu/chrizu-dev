import React from "react";

function MenuToggle({
  isMenuOpen,
  onClick,
}: {
  isMenuOpen: boolean;
  onClick: () => any;
}): JSX.Element {
  return (
    <button onClick={onClick} className="flex flex-col gap-[8px]">
      <div
        className={`w-[30px] h-[3px] bg-black-800 transition-transform duration-300 ${
          isMenuOpen ? "menu-btn-topline-active bg-white-900" : null
        }`}
      />
      <div
        className={`w-[30px] h-[3px] bg-black-800 transition-transform duration-300 ${
          isMenuOpen ? "menu-btn-bottomline-active bg-white-900" : null
        }`}
      />
    </button>
  );
}

export default MenuToggle;
