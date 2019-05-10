import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

const Project = ({heading, link, description, className}) =>
    <Link className={className} to={link}>
        <h3>{heading}</h3>
        <p>{description}</p>
    </Link>;

const StyledProject = styled(Project)`
        display: inline-block;
        border: 1px solid gray;
        padding: 1em;
        cursor: pointer;
        width: 40%;
        margin: 0 0 2em 0;
        text-decoration: none;
        
        h3 {
          margin-bottom: .2em;
        }        
        
`;

export default StyledProject;