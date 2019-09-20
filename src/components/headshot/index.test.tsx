import * as React from "react";
import { render, cleanup } from '@testing-library/react';
import {Headshot} from './index'

afterEach(cleanup);

describe('Headshot', () => {
  it('should render', () => {
    const { getByAltText } = render(<Headshot />);
    expect(getByAltText('Headshot of site author')).toBeDefined();
  });
});