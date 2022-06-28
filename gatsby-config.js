module.exports = {
  siteMetadata: {
    title: "sbhong.log",
    description: "안녕하세요. 백엔드 개발자를 꿈꾸는 홍성빈입니다.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
