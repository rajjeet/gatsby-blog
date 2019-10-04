import React from 'react';
import { render } from '@testing-library/react';
import prismjs from 'prismjs';
import tocbot from 'tocbot';
import BlogPost from './index';
import { makeProps } from './mock';

describe('BlogPost', () => {
  it('should have a table of contents', () => {
    const { getByText } = render(<BlogPost {...makeProps()} />);
    expect(getByText('Outline')).toBeDefined();
  });

  it('should show a Share links section', () => {
    const { queryAllByText } = render(<BlogPost {...makeProps()} />);
    expect(queryAllByText('Share').length).toBeGreaterThan(0);
  });

  describe('post summary', () => {
    it('should show the post title', () => {
      const { getByText } = render(<BlogPost {...makeProps()} />);
      expect(getByText('State Management using React Hooks')).toBeDefined();
    });

    it('should show the post date created', () => {
      const { getByText } = render(<BlogPost {...makeProps()} />);
      expect(getByText(/02 May, 2019/)).toBeDefined();
    });

    it('should show the time to read', () => {
      const { getByText } = render(<BlogPost {...makeProps()} />);
      expect(getByText(/4 mins/)).toBeDefined();
    });

    it('should show the description', () => {
      const { getByText } = render(<BlogPost {...makeProps()} />);
      expect(getByText(/I was learning about the new React Hooks/)).toBeDefined();
    });

    it('should shows the blog tag', () => {
      const { getByText } = render(<BlogPost {...makeProps()} />);
      expect(getByText('React X')).toBeDefined();
      expect(getByText('Angular X')).toBeDefined();
    });

    it('should not show Updated detail when dateModified is not specified', () => {
      const { queryByText } = render(<BlogPost {...makeProps({ dateModified: null })} />);
      expect(queryByText('Updated')).toBeNull();
    });

    it('should show Updated detail when dateModified is specified', () => {
      const { queryByText } = render(<BlogPost {...makeProps({ dateModified: '2020-01-01' })} />);
      expect(queryByText('Updated')).not.toBeNull();
    });

    it('should initialize tocbot on load', () => {
      const spyInstance = jest.spyOn(tocbot, 'init');
      jest.spyOn(document, 'getElementById').mockImplementation(() => document.createElement('div'));
      render(<BlogPost {...makeProps({})} />);
      expect(spyInstance).toHaveBeenCalledTimes(1);
    });

    it('should load prism highlights on load', () => {
      const spyInstance = jest.spyOn(prismjs, 'highlightAll');
      jest.spyOn(document, 'getElementById').mockImplementation(() => document.createElement('div'));
      render(<BlogPost {...makeProps({})} />);
      expect(spyInstance).toHaveBeenCalledTimes(1);
    });

    it('should empties the static table of contents on load', () => {
      const { getByTestId } = render(<BlogPost {...makeProps({})} />);
      expect(getByTestId('static-toc').textContent).toEqual('');
    });

    it('should empty the static table of contents on load', () => {
      render(<BlogPost {...makeProps({})} />);
    });
  });
});
