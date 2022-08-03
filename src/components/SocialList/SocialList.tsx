import React from "react";
import classNames from "classnames";

function SocialName({ children, color }: { children: string; color: string }) {
  return (
    <span
      className={classNames(
        "inline-block font-bold hover:translate-y-[-2px]  transition-transform duration-600",
        `text-${color}`
      )}
    >
      {children}
    </span>
  );
}

function SocialList({
  className,
  color,
}: {
  className?: string;
  color: string;
}): JSX.Element {
  return (
    <div id="social-list" className={classNames(className)}>
      <ul className="flex flex-row gap-[30px]">
        <li>
          <a
            href="https://github.com/chrizuuu"
            target="_blank"
            rel="noreferrer"
          >
            <SocialName color={color}>Github</SocialName>
          </a>
        </li>
        <li>
          <a target="_blank" rel="nofollow">
            <SocialName color={color}>Linkedin</SocialName>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialList;
