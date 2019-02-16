import React from 'react';
import Headshot from '../images/headshot.jpg';
import Layout from '../components/layout';
import {Grid, Header, Icon, Image, Menu} from "semantic-ui-react";

export default () => (
    <Layout>
        <Header as={'h1'} content={'About Me'}/>
        <Grid stackable>
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
                    <Image  centered size={'medium'} src={Headshot} alt={'Headshot'} rounded/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Header as={'h4'} content={'Contact'}/>
                    <Menu icon={'labeled'} borderless secondary compact stackable>
                        <Menu.Item fitted style={{textAlign: 'left'}}>
                            <a href={'mailto:rajjeet.phull@gmail.com?subject=Via Ortmesh:'}>
                                <Icon link name={'mail'} size={'big'}/>Email </a>
                        </Menu.Item>
                        <Menu.Item fitted>
                            <a href={'https://github.com/rajjeet'} target={'_blank'}>
                                <Icon link name={'github'} size={'big'}/>Github </a>
                        </Menu.Item>
                        <Menu.Item fitted>
                            <a href={'https://linkedin.com/in/rajjeetphull'} target={'_blank'}>
                                <Icon link name={'linkedin'} size={'big'}/>LinkedIn </a>
                        </Menu.Item>
                    </Menu>

                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Layout>
)
