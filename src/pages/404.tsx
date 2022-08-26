import React from "react";
import Header from "components/Texts/Header";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import { Link } from "gatsby";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import Seo from "components/Seo/Seo";

function NotFoundPage(): JSX.Element {
  return (
    <MainTemplate color="black-900" displayNavigation={false}>
      <div className="w-screen h-screen p-mobileH lg:p-desktopH flex flex-col items-center justify-center bg-white-900">
        <AnimatedHeader className="text-center">404</AnimatedHeader>
        <Link to="/" className="text-center">
          <Header className="stroke-header">Page not found</Header>
        </Link>
      </div>
    </MainTemplate>
  );
}

export const Head = (): JSX.Element => (
  <Seo>
    <title lang="en">404 - Page not found</title>
    <meta property="og:title" content="404 - Page not found" />
  </Seo>
);

export default NotFoundPage;
