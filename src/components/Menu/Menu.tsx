import React from "react";
import { Link } from "gatsby";

function Menu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed z-10 bg-black-900 top-0 bottom-0 left-0 right-0">
      <div className="w-full h-full flex items-center justify-center text-white-900">
        Menu
      </div>
    </div>
  );
}

export default Menu;
