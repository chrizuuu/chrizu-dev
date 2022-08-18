import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

function Logo({ color }: { color: string }): JSX.Element {
  return (
    <span
      className={classNames(
        "flex flex-row gap-[10px] text-2xl font-bold transition-colors duration-300 ",
        color
      )}
    >
      <Link to="/">
        <span>Krzysztof Bonecki</span>
      </Link>
    </span>
  );
}

export default Logo;
