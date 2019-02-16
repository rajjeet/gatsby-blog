import React from 'react';
import {Label} from "semantic-ui-react";

export default ({tags}) => (
    <Label.Group tag size={'small'}>
        {tags.map((tag) =>
            <Label key={tag}>{tag}</Label>
        )}
    </Label.Group>
)
