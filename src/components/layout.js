import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {graphql, Link, StaticQuery} from 'gatsby';
import {Container, Header, Image, Menu} from "semantic-ui-react";
import Logo from '../images/logo.png';
import colors from '../utils/colors';

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
                     <Container style={{paddingTop: '1em'}}>
                         <Menu borderless>
                             <Menu.Item as={Link} link to={'/'}>
                                 <Image src={Logo} size={'mini'} alt={'Ortmesh'} />
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


