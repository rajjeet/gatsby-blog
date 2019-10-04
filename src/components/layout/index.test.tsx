import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as GatsbyLink from 'gatsby-link';
import { Layout } from './index';
import { makeProps } from './mock';
import { version } from '../../../package.json';
import { Footer } from './footer';

describe('<Layout />', () => {
  it('should render the pass in children', () => {
    const { getByText } = render(<Layout {...makeProps()} />);
    expect(getByText('Sample child')).toBeDefined();
  });

  describe('header', () => {
    it('should render an image for website logo', () => {
      const { getByAltText } = render(<Layout {...makeProps()} />);
      expect(getByAltText(/ortmesh.*logo/i)).toBeDefined();
    });

    it('should have a link with label home', () => {
      const { getByLabelText } = render(<Layout {...makeProps()} />);
      expect(getByLabelText(/home/i)).toBeDefined();
    });

    it('should have heading called Ortmesh', () => {
      const { getByText } = render(<Layout {...makeProps()} />);
      expect(getByText('Ortmesh')).toBeDefined();
    });

    it('should have a website caption', () => {
      const { getByText } = render(<Layout {...makeProps()} />);
      expect(getByText('Write code that matters')).toBeDefined();
    });

    it('should invoke navigate to first blog page when Blog is clicked', () => {
      const spyInstance = jest.spyOn(GatsbyLink, 'navigate').mockImplementationOnce(jest.fn);
      const { getByText } = render(<Layout {...makeProps()} />);
      fireEvent.click(getByText('Blog'));
      expect(spyInstance).toHaveBeenCalledTimes(1);
      expect(spyInstance).toHaveBeenCalledWith('/blog/1');
    });
  });

  describe('footer', () => {
    it('should have version number in footer', () => {
      const { getByText } = render(<Footer />);
      expect(getByText(`v${version}`)).toBeDefined();
    });

    it('should have a copyright label with current year on it', () => {
      const { getByText } = render(<Footer />);
      expect(getByText(/Ortmesh 2019/)).toBeDefined();
    });

    it('should open a link to blog source code when version number is clicked', () => {
      const globalAny: any = global;
      globalAny.open = jest.fn();
      const { getByText } = render(<Footer />);
      fireEvent.click(getByText(`v${version}`));
      expect(globalAny.open).toHaveBeenCalledWith('https://github.com/rajjeet/gatsby-blog');
    });
  });
});
