import React from 'react';
import {Label} from "semantic-ui-react";
import {getTagSlug} from "../utils/helperFunctions";

export default ({tags}) => (
    <Label.Group tag size={'small'}>
        {tags.map((tag) =>
            <Label as={'a'} onClick={() => window.location.href = getTagSlug(tag)} key={tag}>{tag}</Label>
        )}
    </Label.Group>
)
