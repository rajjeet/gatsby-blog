/* eslint @typescript-eslint/explicit-function-return-type: 0 */
require('prismjs/themes/prism-solarizedlight.css');

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer');
  }
};
