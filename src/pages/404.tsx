import React from "react";
import Header from "components/Texts/Header";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import { Link } from "gatsby";
import AnimatedHeader from "components/Texts/AnimatedHeader";

// markup
function NotFoundPage(): JSX.Element {
  return (
    <MainTemplate color="black-900">
      <div className="w-screen h-screen p-mobileH lg:p-desktopH flex flex-col items-center justify-center bg-white-900">
        <AnimatedHeader className="text-center">404</AnimatedHeader>
        <Link to="/">
          <Header className="stroke-header">Page not found</Header>
        </Link>
      </div>
    </MainTemplate>
  );
}

export default NotFoundPage;
