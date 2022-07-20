import React from "react";
import { Link } from "gatsby";

function Logo({ color }: { color?: string }): JSX.Element {
  return (
    <div>
      <Link className={`text-xl lg:text-2xl font-bold ${color}`} to="/">
        Krzysztof Bonecki
      </Link>
    </div>
  );
}

export default Logo;
