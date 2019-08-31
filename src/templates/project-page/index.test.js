import React from 'react';
import { render } from '@testing-library/react';
import { StaticQuery } from 'gatsby';
import ProjectPage from './index';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';
import { makeProps } from './mock';

beforeEach(() => {
  StaticQuery.mockImplementation(({ render: renderQuery }) => renderQuery(
    {
      file: createMockGatsbyImageSharpFluid.file,
      site: siteMetadata,
    },
  ));
});

describe('ProjectPage', () => {
  it('should render', () => {
    const { asFragment } = render(<ProjectPage {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the project title', () => {
    const { getByText } = render(<ProjectPage {...makeProps()} />);
    expect(getByText('Condo Landing Pages')).toBeDefined();
  });

  it('should have the project description', () => {
    const { getByText } = render(<ProjectPage {...makeProps()} />);
    expect(getByText(/An automated process for building fast/)).toBeDefined();
  });

  it('should have the tech stack tag listings', () => {
    const { getByText } = render(<ProjectPage {...makeProps()} />);
    expect(getByText('AWS CloudFormation')).toBeDefined();
  });
  it('should have the html content', () => {
    const { getByText } = render(<ProjectPage {...makeProps()} />);
    expect(getByText('This is sample content for sample project')).toBeDefined();
  });
  it('should have a simple link listing section', () => {
    const { getByText } = render(<ProjectPage {...makeProps()} />);
    expect(getByText('Github Code')).toBeDefined();
    expect(getByText('Links')).toBeDefined();
  });
  it('should have a simple post listing section', () => {
    const { getByText } = render(<ProjectPage {...makeProps()} />);
    expect(getByText('Adding a Project Section to My Website')).toBeDefined();
    expect(getByText('Blog Posts')).toBeDefined();
    expect(getByText('State Management using React Hooks')).toBeDefined();
  });
});
