import React from "react";
import classnames from "classnames";

function SocialName({ children }: { children: string }) {
  return (
    <span className="inline-block text-[18px] text-black-900 font-bold lowercase hover:translate-y-[-2px]  transition-transform duration-600">
      {children}
    </span>
  );
}

function SocialList({ className }: { className?: string }): JSX.Element {
  return (
    <div id="social-list" className={classnames(className)}>
      <ul className="flex flex-row gap-[30px]">
        <li>
          <a
            href="https://github.com/chrizuuu"
            target="_blank"
            rel="noreferrer"
          >
            <SocialName>Github</SocialName>
          </a>
        </li>
        <li>
          <a target="_blank" rel="nofollow">
            <SocialName>Linkedin</SocialName>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialList;
