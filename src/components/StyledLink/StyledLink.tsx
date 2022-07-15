import React from "react";
import { Link } from "gatsby";
function StyledLink({ text, route }: { text: string; route: string }) {
  return (
    <Link to={route}>
      <span>{text}</span>
    </Link>
  );
}

export default StyledLink;
