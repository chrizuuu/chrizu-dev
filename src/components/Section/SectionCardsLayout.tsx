import React from "react";

function SectionCardsLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="max-w-[1300px] h-full flex flex-col lg:section-layout-grid gap-y-[60px]">
      {children}
    </div>
  );
}

export default SectionCardsLayout;
