import {Header, Icon} from "semantic-ui-react";
import {Grid} from "semantic-ui-react";
import React from "react";

export const SocialLinks = ({includeLabel = false, stackable = false}) => (
    <>
        <Header as={"h4"} content={"Links"}/>
        <Grid stackable={stackable} columns={3}>
            <Grid.Column computer={2} tablet={2} mobile={3}>
                <a href={"mailto:rajjeet.phull@gmail.com?subject=Via Ortmesh:"}>
                    <Icon link name={"mail"} size={"big"}/>{ includeLabel ? "Email": ""}</a>
            </Grid.Column>
            <Grid.Column computer={2} tablet={2} mobile={3}>
                <a href={"https://github.com/rajjeet"} target={"_blank"}>
                    <Icon link name={"github"} size={"big"}/>{ includeLabel ? "Github": ""}</a>
            </Grid.Column>
            <Grid.Column computer={2} tablet={2} mobile={3}>
                <a href={"https://linkedin.com/in/rajjeetphull"} target={"_blank"}>
                    <Icon link name={"linkedin"} size={"big"}/>{ includeLabel ? "LinkedIn": ""}</a>
            </Grid.Column>
        </Grid>
    </>
)
