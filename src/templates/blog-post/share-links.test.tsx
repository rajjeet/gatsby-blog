import { render } from '@testing-library/react';
import React from 'react';
import { ShareLinks } from './share-links';

describe('ShareLinks', () => {
  it('should render the specified number of links', () => {
    const { queryAllByLabelText } = render(<ShareLinks />);
    expect(queryAllByLabelText(/Share this post on/)).toHaveLength(6);
  });

  it('should show Share text', () => {
    const { queryAllByText } = render(<ShareLinks />);
    expect(queryAllByText(/Share/).length).toBeGreaterThan(0);
  });

  it('should show a Facebook share link', () => {
    const { getByLabelText } = render(<ShareLinks />);
    expect(getByLabelText(/Facebook/)).toBeDefined();
  });

  it('should show a twitter share link', () => {
    const { getByLabelText } = render(<ShareLinks />);
    expect(getByLabelText(/Twitter/)).toBeDefined();
  });

  it('should show a linkedin share link', () => {
    const { getByLabelText } = render(<ShareLinks />);
    expect(getByLabelText(/LinkedIn/)).toBeDefined();
  });

  it('should show a whatsapp share link', () => {
    const { getByLabelText } = render(<ShareLinks />);
    expect(getByLabelText(/WhatsApp/)).toBeDefined();
  });

  it('should show a email share link', () => {
    const { getByLabelText } = render(<ShareLinks />);
    expect(getByLabelText(/Email/)).toBeDefined();
  });

  it('should show a reddit share link', () => {
    const { getByLabelText } = render(<ShareLinks />);
    expect(getByLabelText(/Reddit/)).toBeDefined();
  });
});
