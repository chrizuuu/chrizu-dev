import React from "react";
import { Link } from "gatsby";

function Logo() {
  return (
    <div>
      <Link className="text-xl lg:text-2xl font-bold" to="/">
        chrizu.dev
      </Link>
    </div>
  );
}

export default Logo;
