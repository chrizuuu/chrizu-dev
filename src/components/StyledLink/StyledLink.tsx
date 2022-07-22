import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

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
      <span className={classnames("tracking-widest ", color)}>{text}</span>
      <span className="w-0 h-[1px] bg-black-800 transition-w duration-500 sm:group-hover:w-full"></span>
    </Link>
  );
}

export default StyledLink;
