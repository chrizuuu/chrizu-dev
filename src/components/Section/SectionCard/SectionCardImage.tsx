import classNames from "classnames";
import React from "react";
import photo from "images/jettasks.png";

function SectionCardImage({ className }: { className?: string }): JSX.Element {
  return (
    <div className={classNames("rotate-2", className)}>
      <img src={photo} />
    </div>
  );
}

export default SectionCardImage;
