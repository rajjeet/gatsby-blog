import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import * as GatsbyLink from 'gatsby-link';
import { TagGroup } from './index';
import { makeProps } from './mock';

describe('<TagGroup />', () => {
  it('should render', () => {
    const { asFragment } = render(<TagGroup {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should link for each tag group', () => {
    const { queryAllByRole } = render(<TagGroup {...makeProps()} />);
    expect(queryAllByRole('link')).toHaveLength(2);
  });

  it('should the name of each tag group', () => {
    const { getByText } = render(<TagGroup {...makeProps()} />);
    expect(getByText('Experience')).toBeDefined();
    expect(getByText('Guide')).toBeDefined();
  });

  it('should the count of each tag group', () => {
    const { getByText } = render(<TagGroup {...makeProps()} />);
    expect(getByText('1')).toBeDefined();
    expect(getByText('2')).toBeDefined();
  });

  it('should navigate to the tag page when clicked', () => {
    const spyInstance = jest.spyOn(GatsbyLink, 'navigate').mockImplementation(jest.fn);
    const { getByText } = render(<TagGroup {...makeProps()} />);
    fireEvent.click(getByText('Experience'));
    expect(spyInstance).toHaveBeenCalledTimes(1);
    expect(spyInstance).toHaveBeenCalledWith('/Experience/1');
  });
});
