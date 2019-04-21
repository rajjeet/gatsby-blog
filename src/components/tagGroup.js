import React from 'react';
import {getTagSlug, getCategorySlug} from "../utils/helperFunctions";
import {Label} from "semantic-ui-react";
import {navigate} from "gatsby";


export default ({categories, tags}) => (
    <Label.Group>
        {categories && categories.map(category =>
            <Label color={'blue'} as={'a'} key={category.fieldValue}
                   onClick={() => navigate(getCategorySlug(category.fieldValue) + '1')}>{category.fieldValue}
                {category.totalCount && <Label.Detail>{category.totalCount}</Label.Detail>}
            </Label>)}
        {tags && tags.map(tagGroup =>
            <Label basic color={'blue'} as={'a'} key={tagGroup.fieldValue}
                   onClick={() => navigate(getTagSlug(tagGroup.fieldValue) + '1')}>{tagGroup.fieldValue}
                {tagGroup.totalCount && <Label.Detail>{tagGroup.totalCount}</Label.Detail>}
            </Label>)}
    </Label.Group>
)
