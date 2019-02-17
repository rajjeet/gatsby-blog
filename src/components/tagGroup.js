import React from 'react';
import {getTagSlug} from "../utils/helperFunctions";
import {Label} from "semantic-ui-react";

export default ({tags}) => (
    <Label.Group>
        {tags.map(tagGroup =>
            <Label basic color={'blue'} as={'a'} key={tagGroup.fieldValue}
                   onClick={() => window.location.href = getTagSlug(tagGroup.fieldValue)}>{tagGroup.fieldValue}
                {tagGroup.totalCount && <Label.Detail>{tagGroup.totalCount}</Label.Detail>}
            </Label>)}
    </Label.Group>
)
