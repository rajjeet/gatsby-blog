import React from 'react';
import Layout from '../components/Layout';
import AuthorSocialLinkGroup from "../components/AuthorSocialLinkGroup";
import AuthorCard from '../components/AuthorCard';
import {Grid, Header} from "semantic-ui-react";
import SEO from "../components/SEO";

export default () => (
    <Layout>
        <SEO/>
        <Header as={'h1'} content={'About Me'}/>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column width={11}>
                    <div>
                        <p>
                            I'm Raj and welcome to my personal blog site, Ortmesh! The purpose of my website is to
                            share my ideas with others and connect.
                        </p>
                        <h3>Work Experience</h3>
                        <p>
                            For the past few years, I've been a full stack web developer at TD Canada Trust in Toronto.
                            My areas of specialties are in React JS web apps, SQL Server databases, .NET APIs, and AWS
                            design and automation.
                            At work, I'm focused on delivering high quality features for an internal project that
                            involves
                            data warehouse automation, reporting, data analytics/visualization, and web applications.
                        </p>
                        <p>
                            My current certifications are Certified AWS Solutions Architect and Microsoft Certified
                            Professional in Data Management and Analytics.
                        </p>
                        <h3>Outside of Work</h3>
                        <p>
                            Other than spending time with family, I'm always coding side projects or writing blogs.
                            I'm also looking for ways to help others with my knowledge and skills in software development and
                            cloud architecture.
                        </p>
                    </div>
                </Grid.Column>
                <Grid.Column width={5}>
                    <AuthorCard/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <AuthorSocialLinkGroup />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Layout>
)

