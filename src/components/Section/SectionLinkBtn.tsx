import classNames from "classnames";
import React from "react";

function SectionLinkBtn({
  icon,
  text,
  background,
  color,
  route,
  className,
}: {
  icon?: JSX.Element;
  text: string;
  background: string;
  color: string;
  route: string;
  className?: string;
}): JSX.Element {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={route}
      className={classNames(
        "flex flex-row items-center gap-[20px] h-[48px] rounded-md px-[20px]",
        `bg-${background} text-${color}`,
        className
      )}
    >
      {icon}
      {text}
    </a>
  );
}

export default SectionLinkBtn;
