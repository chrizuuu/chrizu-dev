import classNames from "classnames";
import React from "react";

function SectionCardImage({ className }: { className?: string }): JSX.Element {
  return (
    <div
      className={classNames(
        "bg-[url(images/cover.png)] bg-cover rounded-tr-[30px] rounded-br-[30px]",
        className
      )}
    ></div>
  );
}

export default SectionCardImage;
