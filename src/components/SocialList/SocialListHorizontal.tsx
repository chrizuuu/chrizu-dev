import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function SocialListHorizontal() {
  return (
    <ul className="flex flex-row items-center gap-[30px]">
      <li className="w-[24px] h-[24px]">
        <a href="https://github.com/chrizuuu" target="_blank" rel="nofollow">
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
