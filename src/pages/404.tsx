import * as React from "react";
import Navbar from "components/Navbar/Navbar";
import MainTemplate from "templates/MainTemplate/MainTemplate";

// markup
const NotFoundPage = () => {
  return (
    <MainTemplate>
      <div className="w-screen h-screen flex items-center justify-center">
        <span className="text-5xl font-bold">404</span>
      </div>
    </MainTemplate>
  );
};

export default NotFoundPage;
