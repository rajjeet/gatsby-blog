import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';

export default ({data}) => {
    const project = data.markdownRemark;
    return (
        <Layout>
            <StyledProject>
                <div>{project.frontmatter.title}</div>
                <span>{project.frontmatter.date}</span>
                <p>{project.frontmatter.description}</p>
                <div dangerouslySetInnerHTML={{__html: project.html}}/>
            </StyledProject>
        </Layout>
    );
};

const StyledProject = styled.div`
  div:first-of-type {
    font-size: 2em;
    font-weight: bolder;
    margin: 1em auto .25em auto;
  }
`;

export const query = graphql`
    query ($slug: String!) {
      markdownRemark(fields: {slug: {eq: $slug}, contentType: {eq: "project"}}) {
        html        
        frontmatter {
          title
          tags
          date      
          description          
        }
      }
    }
`;
