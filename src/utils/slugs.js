/* eslint @typescript-eslint/no-var-requires:0 */
const _ = require('lodash');

module.exports = {
  getTagSlug(tag) {
    return `/tags/${_.kebabCase(tag)}/`;
  },
  getCategorySlug(category) {
    return `/${_.kebabCase(category)}/`;
  },
};
