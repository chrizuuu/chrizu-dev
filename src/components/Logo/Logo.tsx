import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

function Logo({ color }: { color: string }): JSX.Element {
  return (
    <Link to="/">
      <span
        className={classNames(
          "flex flex-col text-2xl font-bold transition-colors duration-300 uppercase ",
          color
        )}
      >
        <span>kb.</span>
      </span>
    </Link>
  );
}

export default Logo;
