/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */

const PAGES_TO_DELETE_REGEX = /^\/(posts|projects|page)\//;

module.exports = ({ page, actions: { createPage, deletePage } }) => {
  const isNotBlank = (i) => i !== '';
  const splitPath = page.path.split('/').filter(isNotBlank);
  if (splitPath.length && splitPath[0] === 'page') {
    if (splitPath.length === 2) {
      createPage({
        ...page,
        path: splitPath[1] === 'index' ? '/' : splitPath[1],
      });
    } else {
      deletePage(page);
    }
  }
  if (page.path.match(PAGES_TO_DELETE_REGEX)) {
    deletePage(page);
  }
};
