import React from 'react';
import { render } from '@testing-library/react';
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
  });

  describe('footer', () => {
    it('should have version number in footer', () => {
      const { getByText } = render(<Footer />);
      expect(getByText(`v${version}`)).toBeDefined();
    });
  });
});

