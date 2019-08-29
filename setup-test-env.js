/* eslint-disable no-console */
import '@testing-library/jest-dom/extend-expect';

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
