import React from 'react';
import { render } from '@testing-library/react';
import { AdjacentPostLink } from './index';
import { previous, next } from './mock';

describe('AdjacentPostLink', () => {
  describe('Previous Post label', () => {
    it('should show label if previous is provided', () => {
      const { queryByText } = render(<AdjacentPostLink previous={previous} next={null} />);
      expect(queryByText(/Previous Post/)).not.toBeNull();
    });
    it('should not show label if previous is not provided', () => {
      const { queryByText } = render(<AdjacentPostLink previous={null} next={null} />);
      expect(queryByText(/Previous Post/)).toBeNull();
    });
    it('should show the name of the previous post', () => {
      const { getByText } = render(<AdjacentPostLink previous={previous} next={null} />);
      expect(getByText('Introducing the New React Concurrent Mode')).toBeDefined();
    });
  });
  describe('Next Post Label', () => {
    it('should show Next Post label if next  is provided', () => {
      const { queryByText } = render(<AdjacentPostLink previous={null} next={next} />);
      expect(queryByText(/Next Post/)).not.toBeNull();
    });
    it('should not show label if next is not provided', () => {
      const { queryByText } = render(<AdjacentPostLink previous={null} next={null} />);
      expect(queryByText(/Next Post/)).toBeNull();
    });
    it('should show the name of the next post', () => {
      const { getByText } = render(<AdjacentPostLink previous={null} next={next} />);
      expect(getByText('The Implications of React Concurrent Mode')).toBeDefined();
    });
  });
});
