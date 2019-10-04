import React from 'react';
import { render } from '@testing-library/react';
import { PostNavigation } from './post-navigation';

describe('<PostNavigation />', () => {
  it('should render', () => {
    const { asFragment } = render(
      <PostNavigation
        items={[{ title: 'title', url: 'url' }]}
        handleButtonClick={jest.fn()}
        showMobileToc
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
