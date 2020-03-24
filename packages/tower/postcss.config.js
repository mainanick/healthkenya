const config = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    [
      "cssnano",
      {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      },
    ],
  ],
};
if (process.env.NODE_ENV === "production") {
  config.plugins.push([
    "@fullhuman/postcss-purgecss",
    {
      content: ["pages/**/*", "components/**/*"],
      defaultExtractor: (content) => {
        const matches = content.match(/[\w-/:]+(?<!:)/g) || [];
        return matches;
      },
    },
  ]);
}
module.exports = config;
