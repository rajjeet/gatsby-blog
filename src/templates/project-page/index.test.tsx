import React from 'react';
import { render } from '@testing-library/react';
import ProjectPage from './index';
import { makeProps } from './mock';

describe('ProjectPage', () => {
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

  it('should have a simple link listing section', () => {
    const { getByText } = render(<ProjectPage {...makeProps()} />);
    expect(getByText('Github Code')).toBeDefined();
    // expect(getByText('Links')).toBeDefined();
  });

  it('should have a simple post listing section', () => {
    const { getByText } = render(<ProjectPage {...makeProps()} />);
    expect(getByText('Adding a Project Section to My Website')).toBeDefined();
    expect(getByText('Blog Posts')).toBeDefined();
    expect(getByText('State Management using React Hooks')).toBeDefined();
  });
});
