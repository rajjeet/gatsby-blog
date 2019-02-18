import React, {Component} from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import {Grid, Header, Sticky} from "semantic-ui-react";
import TagGroup from "../components/tagGroup";
import * as PropTypes from "prop-types";
import {css} from '@emotion/core';
import colors from "../utils/colors";

export default class BlogPost extends Component {
    state = {};
    handleContextRef = contextRef => this.setState({contextRef});

    render() {
        let {data} = this.props;
        const post = data.markdownRemark;
        const {contextRef} = this.state;
        return (
            <Layout>
                <div ref={this.handleContextRef}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as={'h1'} style={{marginBottom: '0em'}}>{post.frontmatter.title}</Header>
                                <div style={{marginBottom: '.7em'}}>{post.frontmatter.date}</div>
                                <TagGroup tags={post.frontmatter.tags.map(tag => ({"fieldValue": tag}))}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column mobile={16} tablet={13} computer={13}>

                                <div dangerouslySetInnerHTML={{__html: post.html}}/>
                            </Grid.Column>
                            <Grid.Column  tablet={3} computer={3}>
                                <Sticky context={contextRef} offset={25}>
                                    <Header as={'h4'}>Outline</Header>
                                    <div className={'ui list'} css={css`
                                            ul {
                                              padding-left: 0px;
                                            }
                                            ul ul {
                                              padding-left: 1em;
                                            }
                                            ul {
                                              list-style-type: none;
                                            }
                                            a {
                                              color: inherit;
                                            }
                                            a:hover {
                                              color: ${colors.secondaryColor};
                                            }
                                            p {
                                              margin-bottom: 0em;
                                            }
                                        `}
                                         dangerouslySetInnerHTML={{__html: post.tableOfContents}}/>
                                </Sticky>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Layout>
        )
    }
}

BlogPost.propTypes = {data: PropTypes.any};

export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        tableOfContents
        frontmatter {
          title
          tags
          date
        }
      }
    }
`;
