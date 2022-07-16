import React from "react";
import { Link } from "gatsby";

function Menu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed w-full h-screen bg-black-500 top-0 bottom-0 left-0 right-0 z-40">
      Menu
    </div>
  );
}

export default Menu;
