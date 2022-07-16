import React from "react";
import { Link } from "gatsby";

function Logo({ color }: { color?: string }) {
  return (
    <div>
      <Link className={`text-xl lg:text-2xl font-bold ${color}`} to="/">
        chrizu.dev
      </Link>
    </div>
  );
}

export default Logo;
