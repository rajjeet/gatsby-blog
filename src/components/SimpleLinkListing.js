import React from 'react';
import { S } from './SimplePostListing';

export default ({ links }) => (
  <div>
    <h3>Links</h3>
    <S.ul>
      {
        links.map((link) => (
          <a key={link.value} href={link.value} target="_blank" rel="noopener noreferrer">
            <li>
              {link.label}
            </li>
          </a>
        ))
      }
    </S.ul>

  </div>
);
