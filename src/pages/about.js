import React from 'react';
import Layout from '../components/layout';
import {Grid, Header, Icon} from "semantic-ui-react";
import {graphql} from "gatsby";
import Img from 'gatsby-image';

export default ({data}) => (
    <Layout>
        <Header as={'h1'} content={'About Me'}/>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column width={11}>
                    <div>
                        <p>I'm Raj and welcome to my personal blog site, Ortmesh! The purpose of my website is to
                            share my ideas with others, regarding IT topics and audio books. </p>
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
                    <Img style={{maxWidth: '300px', margin: 'auto'}} fluid={data.file.childImageSharp.fluid} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Header as={'h4'} content={'Links'}/>
                    <Grid stackable columns={3}>
                        <Grid.Column width={2}>
                            <a href={'mailto:rajjeet.phull@gmail.com?subject=Via Ortmesh:'}>
                                <Icon link name={'mail'} size={'big'}/>Email </a>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <a href={'https://github.com/rajjeet'} target={'_blank'}>
                                <Icon link name={'github'} size={'big'}/>Github </a>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <a href={'https://linkedin.com/in/rajjeetphull'} target={'_blank'}>
                                <Icon link name={'linkedin'} size={'big'}/>LinkedIn </a>
                        </Grid.Column>
                    </Grid>

                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Layout>
)

export const query = graphql`
query {
  file(relativePath: {eq: "images/headshot.jpg"}) {
    childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_noBase64
        }
    }
  }
}
`;
