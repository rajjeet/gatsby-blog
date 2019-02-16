import React from 'react';
import {graphql} from 'gatsby';
import Headshot from '../images/headshot.jpg';
import Layout from '../components/layout';

export default ({data}) => (
    <Layout>
        <h1>About Me</h1>

        <div style={{float: 'left', width: '50%'}}>
            <p> Hi! I'm Raj and this is my personal blog site, Ortmesh! The purpose of my website is to share my
                ideas with others, regarding IT topics and audibles. </p>
            <p>
                This website is developed using Gatsby, a static site generator powered by React & GraphQL. Hosting
                is done on AWS S3 Storage and CloudFront (CDN) for maximum performance. </p>
        </div>
        <img style={{float: 'left', padding: '10px'}} width={250} src={Headshot} alt={'Headshot'}/>

    </Layout>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
