import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Krzysztof Bonecki - portfolio`,
    description:
      "Krzysztof Bonecki - front-end developer who expertise in building small and medium-sized web and mobile applications.",
    author: "Krzysztof Bonecki",
    siteUrl: "https://www.krzysztofbonecki.com",
    keywords:
      "frontend developer, frontend web developer, junior front end developer, front end, react, react native,",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Krzysztof Bonecki",
        short_name: `Krzysztof Bonecki`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `./src/images/favicon/favicon-32x32.png`,
        icons: [
          {
            src: `./src/images/favicon/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        images: path.join(__dirname, "src/images"),
        components: path.join(__dirname, "src/components"),
        templates: path.join(__dirname, "src/templates"),
        layouts: path.join(__dirname, "src/layouts"),
        styles: path.join(__dirname, "src/styles"),
        hooks: path.join(__dirname, "src/hooks"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
  ],
};

export default config;
