import React from 'react';
import {graphql, StaticQuery} from "gatsby";
import Img from "gatsby-image";

export const Headshot = () => (
    <StaticQuery query={graphql`
    query {
      file(relativePath: {eq: "images/headshot.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_noBase64
            }
        }
      }
    }
    `}
                 render={data => (
                     <Img style={{maxWidth: '300px', margin: 'auto', borderRadius: '3%'}}
                          fluid={data.file.childImageSharp.fluid}/>
                 )}
    />
);
