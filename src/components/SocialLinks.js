import {Header, Icon} from "semantic-ui-react";
import {Grid} from "semantic-ui-react";
import React from "react";
import * as PropTypes from "prop-types";

function SocialLink({name, includeLabel, link, iconName}) {
    return <Grid.Column computer={2} tablet={2} mobile={3}>
        <a style={{display: "inline-block"}} href={link} target={"_blank"}>
            <Icon link name={iconName} size={"big"}/>{includeLabel ? name : ""}</a>
    </Grid.Column>;
}

SocialLink.propTypes = {includeLabel: PropTypes.bool};
export const SocialLinks = ({includeLabel = false, stackable = false}) => (
    <>
        <Header as={"h4"} content={"Links"}/>
        <Grid stackable={stackable} columns={3}>
            <Grid.Column computer={2} tablet={2} mobile={3}>
                <a href={"mailto:rajjeet.phull@gmail.com?subject=Via Ortmesh:"} style={{display: "inline-block"}}>
                    <Icon link name={"mail"} size={"big"}/>{includeLabel ? "Email" : ""}</a>
            </Grid.Column>

            <SocialLink includeLabel={includeLabel} name={'GitHub'} iconName={'github'}
                        link={"https://github.com/rajjeet"}/>

            <SocialLink includeLabel={includeLabel} name={'LinkedIn'} iconName={'linkedin'}
                        link={"https://www.linkedin.com/in/rajjeetphull/"}/>

            <SocialLink includeLabel={includeLabel} name={'Facebook'} iconName={'facebook'}
                        link={"https://www.facebook.com/ortmesh/"}/>

            <SocialLink includeLabel={includeLabel} name={'Twitter'} iconName={'twitter'}
                        link={"https://twitter.com/ortmesh"}/>
        </Grid>
    </>
)
