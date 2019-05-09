import React from "react";
import styled from "styled-components";
import {navigate} from "gatsby";

function Project({header, description, link}) {
    return <a onClick={() => navigate(link)}>
        <h3>{header}</h3>
        <p>{description}</p>
    </a>;
}

const StyledProject = styled(Project)`
  display: inline-block;
        border: 1px solid gray;
        padding: 1em;
        margin-right: 1em;
        cursor: pointer;
        width: 40%;
        :hover {
            background-color: #eee;
            transform: translateY(-5px);
        }
        transition: transform .5s ease;
        h3 {
          margin-bottom: .2em;
        }
`;

export default StyledProject;