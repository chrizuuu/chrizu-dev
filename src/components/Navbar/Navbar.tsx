import React from "react";
import Logo from "components/Logo/Logo";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[80px] px-[30px] lg:px-[60px] bg-white-900">
      <div className="w-full h-full flex items-center justify-between">
        <Logo />
      </div>
    </div>
  );
}

export default Navbar;
