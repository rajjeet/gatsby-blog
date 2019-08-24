import React from 'react';
import { S } from './SimplePostListing';

export default ({ links }) => (
  <div>
    <h3>Links</h3>
    <S.ul>
      {
                links.map((link) => (
                  <a href={link.value} target="_blank">
                    <li key={link.value}>
                      {link.label}
                    </li>
                  </a>
                ))
            }
    </S.ul>

  </div>
);
