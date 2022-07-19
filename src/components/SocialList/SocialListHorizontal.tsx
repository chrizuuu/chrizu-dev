import React from "react";
import classnames from "classnames";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function SocialListHorizontal({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <ul
      className={classnames("flex flex-row items-center gap-[30px]", className)}
    >
      <li className="w-[24px] h-[24px]">
        <a href="https://github.com/chrizuuu" target="_blank" rel="noreferrer">
          <GitHubIcon className="hover:fill-primary hover:translate-y-[-2px] transition-fill transition-transform duration-600" />
        </a>
      </li>
      <li className="w-[24px] h-[24px]">
        <a target="_blank" rel="nofollow">
          <LinkedInIcon className="hover:fill-primary hover:translate-y-[-2px] transition-fill transition-transform duration-600" />
        </a>
      </li>

      <li className="w-[24px] h-[24px]">
        <a target="_blank" rel="nofollow">
          <EmailOutlinedIcon className="hover:fill-primary hover:translate-y-[-2px] transition-fill transition-transform duration-600" />
        </a>
      </li>
    </ul>
  );
}

export default SocialListHorizontal;
