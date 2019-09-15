import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PaginationButtonGroup from './index';
import { makeProps } from './mock';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<PaginationButtonGroup />', () => {
  it('should render', () => {
    const { asFragment } = render(<PaginationButtonGroup {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have 2 buttons', () => {
    const { queryAllByRole } = render(<PaginationButtonGroup {...makeProps()} />);
    expect(queryAllByRole('button')).toHaveLength(2);
  });

  it('should have a button for newer posts', () => {
    const { getByText } = render(<PaginationButtonGroup {...makeProps()} />);
    expect(getByText(/newer/i)).toBeDefined();
  });

  it('should have a button for older posts', () => {
    const { getByText } = render(<PaginationButtonGroup {...makeProps()} />);
    expect(getByText(/older/i)).toBeDefined();
  });

  describe('older posts button', () => {
    it('should not be disabled when current page is the first page', () => {
      const props = makeProps({ currentPage: 1, numOfPages: 2 });
      const { getByText } = render(<PaginationButtonGroup {...props} />);
      expect(getByText(/older/i).closest('button')).not.toHaveAttribute('disabled');
    });

    it('should be disabled when current page is the last page', () => {
      const props = makeProps({ currentPage: 2, numOfPages: 2 });
      const { getByText } = render(<PaginationButtonGroup {...props} />);
      expect(getByText(/older/i).closest('button')).toHaveAttribute('disabled');
    });
  });

  describe('newer posts button', () => {
    it('should not be disabled when the current page is the last page', () => {
      const props = makeProps({ currentPage: 2, numOfPages: 2 });
      const { getByText } = render(<PaginationButtonGroup {...props} />);
      expect(getByText(/newer/i).closest('button')).not.toHaveAttribute('disabled');
    });

    it('should be disabled when current page is the first page', () => {
      const props = makeProps({ currentPage: 1, numOfPages: 2 });
      const { getByText } = render(<PaginationButtonGroup {...props} />);
      expect(getByText(/newer/i).closest('button')).toHaveAttribute('disabled');
    });
  });
});
