import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

function StyledLink({
  text,
  route,
  color,
}: {
  text: string;
  route: string;
  color?: string;
}): JSX.Element {
  return (
    <Link
      to={route}
      className={
        "group flex flex-col justify-center items-center gap-0 h-[40px] hover:translate-y-[-4px] transition-transform duration-200"
      }
    >
      <span
        className={classNames(
          "tracking-widest transition-colors duration-300",
          `text-${color}`
        )}
      >
        {text}
      </span>
      <span
        className={classNames(
          "w-0 h-[1px] transition-w duration-500 sm:group-hover:w-full",
          `bg-${color}`
        )}
      ></span>
    </Link>
  );
}

export default StyledLink;
