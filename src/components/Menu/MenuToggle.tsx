import React from "react";

function MenuToggle({
  isMenuOpen,
  onClick,
}: {
  isMenuOpen: boolean;
  onClick: () => any;
}): JSX.Element {
  return (
    <button onClick={onClick} className="flex flex-col gap-[8px] width-[28px]">
      <div
        className={`menu-btn-line ${isMenuOpen && "menu-btn-topline-active"}`}
      />
      <div
        className={`menu-btn-line ${
          isMenuOpen && "menu-btn-bottomline-active"
        }`}
      />
    </button>
  );
}

export default MenuToggle;
