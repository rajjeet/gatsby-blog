import React from 'react';
import {navigate} from "gatsby";
import styled from 'styled-components';
import * as theme from '../utils/colors'

const TagGroup = ({className, tags, getSlug}) => (
    <div className={className}>
        {
            tags &&
            tags.map(tag =>
                    <span key={tag.fieldValue}
                          onClick={() => navigate(getSlug(tag.fieldValue) + '1')}>{tag.fieldValue}
                        {tag.totalCount && <span>{tag.totalCount}</span>}
            </span>
            )
        }
    </div>
);

const StyledTagGroup = styled(TagGroup)`
  display: ${props => props.inline ? 'inline' : 'inline-block'};
  
  > span {
    padding: .2em .55em;
    margin-right: .5em;
    margin-bottom: .5em;
    box-shadow: ${theme.lightbBoxShadow};
    display: inline-block;
    border-radius: 5px;
    color: white;
    font-weight: bolder;    
    font-size: .8em;
    background-color: ${theme.primaryColor};
    :hover {
      box-shadow: ${theme.hoverBoxShadow};
      transform: translateY(-2px);
      transition: ease .3s;
      cursor: pointer;
    }
    > span {
      margin-left: 1em;
    };    
  }
  
`;

export default StyledTagGroup;