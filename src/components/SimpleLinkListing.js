import React from "react";
import {S} from './SimplePostListing'

export default ({links}) => (
    <div>
        <h3>Links</h3>
        <S.ul>
            {
                links.map(link => (
                    <li key={link.value}>
                        <a href={link.value} target={'_blank'}>
                            {link.label}
                        </a>
                    </li>
                ))
            }
        </S.ul>

    </div>
);

