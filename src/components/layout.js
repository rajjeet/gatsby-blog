import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {graphql, Link, StaticQuery} from 'gatsby';
import {Container, Header, Menu} from "semantic-ui-react";
import colors from '../utils/colors';
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import '../styles/global.css';
import Img from 'gatsby-image';

export default ({children}) => (
    <StaticQuery query={
        graphql`
            {
              site {
                siteMetadata {
                  title
                }
              }
              file(relativePath: {eq: "images/logo.png"}) {
                childImageSharp {
                  fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
        `
    }
                 render={data => (
                     <Container style={{paddingTop: '1em'}}>
                         <Menu borderless>
                             <Menu.Item as={Link} link to={'/'}>
                                 <Img fluid={data.file.childImageSharp.fluid} style={{width: '3em'}} />
                             </Menu.Item>
                             <Menu.Item as={Link} link to={'/'} active={true}>
                                 <div>
                                     <Header as={'h3'} textAlign={'center'}
                                             style={{marginBottom: '0em', color: colors.primaryColor}}>{data.site.siteMetadata.title}</Header>
                                     <p style={{fontSize: '0.55em'}}>Write code that matters</p>
                                 </div>
                             </Menu.Item>
                             <Menu.Item as={Link} to={'/about/'} link position={'right'}>
                                 About
                             </Menu.Item>
                         </Menu>
                         {children}
                     </Container>
                 )}
    />
)


