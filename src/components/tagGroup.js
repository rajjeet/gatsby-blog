import React from 'react';
import {getTagSlug, getCategorySlug} from "../utils/helperFunctions";
import {Label} from "semantic-ui-react";

export default ({categories, tags}) => (
    <Label.Group>
        {categories && categories.map(category =>
            <Label color={'blue'} as={'a'} key={category.fieldValue}
                   onClick={() => window.location.href = getCategorySlug(category.fieldValue)}>{category.fieldValue}
                {category.totalCount && <Label.Detail>{category.totalCount}</Label.Detail>}
            </Label>)}
        {tags && tags.map(tagGroup =>
            <Label basic color={'blue'} as={'a'} key={tagGroup.fieldValue}
                   onClick={() => window.location.href = getTagSlug(tagGroup.fieldValue)}>{tagGroup.fieldValue}
                {tagGroup.totalCount && <Label.Detail>{tagGroup.totalCount}</Label.Detail>}
            </Label>)}
    </Label.Group>
)
