import React from "react";

function MenuToggle({
  isMenuOpen,
  onClick,
}: {
  isMenuOpen: boolean;
  onClick: () => any;
}): JSX.Element {
  return (
    <button onClick={onClick} className="flex flex-col width-[28px] gap-[8px]">
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
