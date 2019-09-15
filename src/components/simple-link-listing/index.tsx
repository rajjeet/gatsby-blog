import React from 'react';
import { S } from '../simple-post-listing';
import { TProps } from './types';

const SimpleLinkListing: React.FC<TProps> = ({ links }) => (
  <div>
    <h3>Links</h3>
    <S.ul>
      {
        links.map((link) => (
          <a key={link.value} aria-label={link.label} href={link.value} target="_blank" rel="noopener noreferrer">
            <li>
              {link.label}
            </li>
          </a>
        ))
      }
    </S.ul>

  </div>
);

export default SimpleLinkListing;
