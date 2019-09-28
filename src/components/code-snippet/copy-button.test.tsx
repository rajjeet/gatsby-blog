import React from 'react';
import { render } from '@testing-library/react';
import { CopyButton } from './copy-button';

describe('CopyButton', () => {
  it('should show Copy when copyStatus is false', () => {
    const { getByText } = render(<CopyButton copyStatus={false} />);
    expect(getByText('Copy')).toBeDefined();
  });

  it('should show Copied when copyStatus is true', () => {
    const { getByText } = render(<CopyButton copyStatus />);
    expect(getByText('Copied')).toBeDefined();
  });
});
