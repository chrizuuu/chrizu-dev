import React from "react";
import { Link } from "gatsby";
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
      <span className={`tracking-widest ${color}`}>{text}</span>
    </Link>
  );
}

export default StyledLink;
