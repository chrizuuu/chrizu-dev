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
}) {
  return (
    <Link to={route}>
      <span className={classnames("tracking-widest", color)}>{text}</span>
    </Link>
  );
}

export default StyledLink;
