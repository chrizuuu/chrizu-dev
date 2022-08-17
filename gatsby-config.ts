import type { GatsbyConfig } from "gatsby";
import path from "path";

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Krzysztof Bonecki - portfolio`,
    description: "Krzysztof Bonecki - portfolio",
    author: "Krzysztof Bonecki",
    image: `/kb-icon.png`,
    siteUrl: "https://krzysztofbonecki.com",
    keywords:
      "frontend developer, frontend web developer, junior front end developer, front end, react, react native,",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
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
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
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
