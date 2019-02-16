import React from 'react';
import {css} from '@emotion/core';
import {graphql, Link, StaticQuery} from 'gatsby';
import 'semantic-ui-css/semantic.min.css';
import {rhythm} from '../utils/typography';

export default ({children}) => (
    <StaticQuery query={
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    }
                 render={data => (
                     <div
                         css={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
        `}
                     >
                         <Link to={'/'}>
                             <h3 css={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
            `}>
                                 {data.site.siteMetadata.title}
                             </h3>
                         </Link>
                         <Link
                             to={'/about/'}
                             css={css`
                float: right;
            `}
                         >
                             About
                         </Link>
                         {children}
                     </div>
                 )}
    />
)


