/* eslint @typescript-eslint/explicit-function-return-type: 0 */

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer');
  }
};
