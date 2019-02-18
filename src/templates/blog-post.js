import React, {Component} from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import {Button, Grid, Header, Icon, Segment, Sidebar, Sticky} from "semantic-ui-react";
import TagGroup from "../components/tagGroup";
import * as PropTypes from "prop-types";
import {css} from '@emotion/core';
import colors from "../utils/colors";

function TableOfContents({post}) {
    return <>
        <Header as={"h4"}>Outline</Header>
        <div className={"ui list"} css={css`
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
    </>;
}

TableOfContents.propTypes = {post: PropTypes.any};

export default class BlogPost extends Component {
    state = {visible: false};

    handleContextRef = contextRef => this.setState({contextRef});
    toggleSidebar = () => this.setState({visible: !this.state.visible});
    hideSideBar = () => this.setState({visible: false});

    render() {
        let {data} = this.props;
        const post = data.markdownRemark;
        const {contextRef, visible} = this.state;

        return (
            <Layout>
                <div ref={this.handleContextRef}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as={'h1'} style={{marginBottom: '0em'}}>{post.frontmatter.title}</Header>
                                <div style={{marginBottom: '.7em'}}>{post.frontmatter.date}</div>
                                <TagGroup tags={post.frontmatter.tags.map(tag => ({"fieldValue": tag}))}/>
                                <Sticky context={contextRef} offset={10} bottomOffset={10} css={css`
                                                #outline-btn {
                                                  display: none;
                                                }

                                                @media only screen and (max-width: 767px) {
                                                  #outline-btn {
                                                    display: block;
                                                  }
                                                }
                                            `}>
                                    <Button id={'outline-btn'} onClick={this.toggleSidebar} size={'small'} compact
                                            positive={this.state.visible}>
                                        <Icon name={'content'}/>Outline
                                    </Button>
                                </Sticky>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column mobile={16} tablet={13} computer={13}>
                                <Sidebar.Pushable style={{transform: 'none'}}>
                                    <Sidebar.Pusher>
                                        <div onClick={this.hideSideBar} dangerouslySetInnerHTML={{__html: post.html}}/>
                                    </Sidebar.Pusher>
                                    <Sticky context={contextRef} offset={25}>
                                        <Sidebar as={Segment} color={'blue'} direction={'right'} width={'thin'}
                                                 animation='overlay' visible={visible} style={{padding: 'auto 100px'}}>
                                            <TableOfContents post={post}/>
                                        </Sidebar>
                                    </Sticky>
                                </Sidebar.Pushable>
                            </Grid.Column>
                            <Grid.Column tablet={3} computer={3} only={'tablet computer'}>
                                <Sticky context={contextRef} offset={25}>
                                    <TableOfContents post={post}/>
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
