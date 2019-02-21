import React from 'react';
import Layout from '../components/layout';
import {SocialLinks} from "../components/SocialLinks";
import {Headshot} from '../components/Headshot';
import {Grid, Header} from "semantic-ui-react";
import SEO from "../components/SEO";

export default () => (
    <Layout>
        <SEO />
        <Header as={'h1'} content={'About Me'}/>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column width={11}>
                    <div>
                        <p>I'm Raj and welcome to my personal blog site, Ortmesh! The purpose of my website is to
                            share my ideas with others. </p>
                        <p>For the past three years, I've been a full stack developer at TD Canada Trust in Toronto,
                            using React, .NET Framework (C#) and SQL Server to help develop an internal web application.
                            Data warehousing, reporting, and data analytics are also my core areas of expertise. My
                            current certifications are Certified AWS Solutions Architect and Microsoft Certified
                            Professional in Data Management and Analytics. </p>
                        <p>I work on side projects outside of work. I will be updating my portfolio on this website to
                            showcase some of those projects.</p>
                    </div>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Headshot />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <SocialLinks includeLabel={true} stackable={false}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Layout>
)

