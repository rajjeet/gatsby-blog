import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { ShareLinks } from './share-links';

function renderComponent(): RenderResult {
  return render(<ShareLinks url="https://google.com/" />);
}

describe('ShareLinks', () => {
  it('should render the specified number of links', () => {
    const { queryAllByLabelText } = renderComponent();
    expect(queryAllByLabelText(/Share this post on/)).toHaveLength(6);
  });

  it('should show Share text', () => {
    const { queryAllByText } = renderComponent();
    expect(queryAllByText(/Share/).length).toBeGreaterThan(0);
  });

  it('should show a Facebook share link', () => {
    const { getByLabelText } = renderComponent();
    expect(getByLabelText(/Facebook/)).toBeDefined();
  });

  it('should show a twitter share link', () => {
    const { getByLabelText } = renderComponent();
    expect(getByLabelText(/Twitter/)).toBeDefined();
  });

  it('should show a linkedin share link', () => {
    const { getByLabelText } = renderComponent();
    expect(getByLabelText(/LinkedIn/)).toBeDefined();
  });

  it('should show a whatsapp share link', () => {
    const { getByLabelText } = renderComponent();
    expect(getByLabelText(/WhatsApp/)).toBeDefined();
  });

  it('should show a email share link', () => {
    const { getByLabelText } = renderComponent();
    expect(getByLabelText(/Email/)).toBeDefined();
  });

  it('should show a reddit share link', () => {
    const { getByLabelText } = renderComponent();
    expect(getByLabelText(/Reddit/)).toBeDefined();
  });
});
