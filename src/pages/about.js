import React from 'react';
import Headshot from '../images/headshot.jpg';
import Layout from '../components/layout';
import {Grid, Image} from "semantic-ui-react";

export default () => (
    <Layout>
        <h1>About Me</h1>
        <Grid>
            <Grid.Row>
                <Grid.Column width={11}>
                    <div>
                        <p> Hi! I'm Raj and this is my personal blog site, Ortmesh! The purpose of my website is to
                            share my
                            ideas with others, regarding IT topics and audibles. </p>
                        <p>
                            This website is developed using Gatsby, a static site generator powered by React & GraphQL.
                            Hosting
                            is done on AWS S3 Storage and CloudFront (CDN) for maximum performance. </p>
                    </div>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Image src={Headshot} alt={'Headshot'} rounded />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Layout>
)
