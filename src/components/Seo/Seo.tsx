import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

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
      <title lang="en">{seoTags.title}</title>
      <meta name="description" content={seoTags.description} />
      <meta name="keywords" content={seoTags.keywords} />
      <meta property="og:url" content={seoTags.siteUrl} />
      <meta property="og:title" content={seoTags.title} />
      <meta property="og:description" content={seoTags.description} />
    </Helmet>
  );
}

export default Seo;
