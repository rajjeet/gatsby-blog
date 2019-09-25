import { TProps } from './types';

export const makeProps = (): TProps => ({
  children: `
const mainReducer = (state, action) => {
  console.log('Before', state);
  console.log('Action', action);
  let result = {
    count: countReducer(state.count, action)      
  };
  console.log('After', result);
  return result
};      
`,
  fileName: 'index.js',
});
