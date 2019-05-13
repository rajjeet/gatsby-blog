import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from 'styled-components';


const SocialLink = ({className, link, icon}) => {
    return <span className={className}>
        <a href={link} target={"_blank"}>
            <FontAwesomeIcon size={"2x"} icon={icon}/>
        </a>
    </span>;
};

const StyledSocialLink = styled(SocialLink)`
  margin-right: 1em;
  a {
    vertical-align: center;
  }
`;

export default StyledSocialLink;