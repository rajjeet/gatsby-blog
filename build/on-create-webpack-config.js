/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

// Sass and Lodash.
module.exports = ({ stage, actions }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [new LodashModuleReplacementPlugin()],
    });
  }
};

