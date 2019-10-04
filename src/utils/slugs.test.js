import { getTagSlug } from './slugs';

describe('slugs', () => {
  describe('getTagSlug', () => {
    it('should a valid slug', () => {
      const expected = '/tags/react-hooks/';
      const input = 'React Hooks';
      const actual = getTagSlug(input);
      expect(actual).toEqual(expected);
    });
  });
});
