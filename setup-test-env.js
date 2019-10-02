/* eslint-disable no-console */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

const originalError = console.error;

beforeAll(() => {
  console.error = (...args) => {
    if (/It looks like you're using a version of react-dom that supports the "act" function, but not an awaitable version of "act" which you will need. Please upgrade to at least react-dom@16.9.0 to remove this warning./.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
