import React from "react";
import { Link } from "gatsby";

function MobileMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) {
    return null;
  }
  return (
    <nav className="fixed z-10 bg-black-900 top-0 left-0">
      <div className="w-full h-full flex items-center justify-center text-white-900">
        Menu
      </div>
    </nav>
  );
}

export default MobileMenu;
