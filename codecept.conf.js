exports.config = {
  tests: './e2e/**/*.spec.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:9000',
      show: false,
    },
  },
  include: {
    I: './e2e/steps-file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'gatsby-blog',
};
