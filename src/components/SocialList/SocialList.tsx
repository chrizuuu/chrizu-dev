import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function SocialList() {
  return (
    <div className="absolute bottom-[0px] left-mobileH lg:left-desktopH">
      <div className="flex flex-col gap-[40px] bg-white-300">
        <GitHubIcon sx={{ fontSize: "20px" }} />
        <LinkedInIcon sx={{ fontSize: "20px" }} />
        <EmailOutlinedIcon sx={{ fontSize: "20px" }} />
        <div className="h-[100px] border-l-[2px] border-black-800 ml-[50%]" />
      </div>
    </div>
  );
}

export default SocialList;
