import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
// @ts-ignore
import favicon from "images/favicon.png";

function Seo({ title }: { title?: string }): JSX.Element {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
          siteUrl
        }
      }
    }
  `);

  const seoTags = {
    title: title || site.siteMetadata.title,
    description: site.siteMetadata.description,
    siteUrl: site.siteMetadata.siteUrl,
    keywords: site.siteMetadata.keywords,
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{seoTags.title}</title>
      <meta name="description" content={seoTags.description} />
      <meta name="keywords" content={seoTags.keywords} />
      <link rel="icon" href={favicon} />
      <meta property="og:url" content={seoTags.siteUrl} />
      <meta property="og:title" content={seoTags.title} />
      <meta property="og:description" content={seoTags.description} />
    </Helmet>
  );
}

export default Seo;
