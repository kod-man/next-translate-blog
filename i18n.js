module.exports = {
  locales: ["en", "tr", "nl"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
    "/[lang]": ["common"],
    "/[lang]/contact": ["about"],
  },
};
