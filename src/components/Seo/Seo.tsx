import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ children }: { children: React.ReactNode }): JSX.Element {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          keywords
          siteUrl
        }
      }
    }
  `);

  const seoTags = {
    description: site.siteMetadata.description,
    siteUrl: site.siteMetadata.siteUrl,
    keywords: site.siteMetadata.keywords,
  };

  return (
    <>
      <meta name="description" content={seoTags.description} />
      <meta name="keywords" content={seoTags.keywords} />
      <meta property="og:url" content={seoTags.siteUrl} />
      <meta property="og:description" content={seoTags.description} />
      {children}
    </>
  );
}

export default Seo;
