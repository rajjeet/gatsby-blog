/* eslint @typescript-eslint/no-var-requires:0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
const _ = require('lodash');

module.exports = {
  getTagSlug(tag) {
    return `/tags/${_.kebabCase(tag)}/`;
  },
};
