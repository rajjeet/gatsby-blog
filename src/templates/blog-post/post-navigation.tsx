import { faList, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import { TableOfContents } from '../../components/table-of-contents';
import { RoundIconButton } from '../../components/primitives/floating-mobile-button';
import { TModalToggleButton, TPostNavigation } from './types';

const ModalToggleButton: React.FC<TModalToggleButton> = ({ label, icon, onClick }) => (
  <FloatingButton>
    <RoundIconButton
      aria-label={label}
      icon={icon}
      onClick={onClick}
    />
  </FloatingButton>
);

export const PostNavigation: React.FC<TPostNavigation> = (
  { items, handleButtonClick, showMobileToc },
) => (
  <Wrapper>
    <TableOfContentWrapper>
      <TableOfContents items={items} />
      <div className="js-toc" />
    </TableOfContentWrapper>
    <ModalToggleButton icon={faList} onClick={handleButtonClick} label="Open table of contents" />
    {
      showMobileToc && (
        <div data-testid="mobile-toc">
          <MobileTableOfContentsModal onClick={handleButtonClick}>
            <TableOfContents items={items} />
            <ModalToggleButton icon={faTimes} onClick={handleButtonClick} label="Close table of contents" />
          </MobileTableOfContentsModal>
        </div>
      )
    }
  </Wrapper>
);

const Wrapper = styled.div`  
  flex: 0;
  margin: 1rem 0;
  @media screen and ${theme.deviceSize.mobileL}{
    flex: 1; 
    margin-left: 1rem;
    min-width: 0; 
  }
`;

const MobileTableOfContentsModal = styled.div`
  padding: 1rem;
  z-index: 2;
  position: fixed;
  background-color: ${(props): string => props.theme.white};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const FloatingButton = styled.div`
  display: none;
  @media screen and ${theme.deviceSize.mobileL}{
    display: block;
  }
  position: fixed;
  bottom: 0;
  right: 0;
`;
const TableOfContentWrapper = styled.div`  
  @media screen and ${theme.deviceSize.mobileL}{
      display: none;
    }
  position: sticky;
  top: 1rem;
  .toc-list-item {
    a {
      text-decoration: none;
      left: 1px;
    }    
  } 
  .toc-list {
    list-style: none;    
  } 
  .is-active-link {
    color: ${(props): string => props.theme.primaryColor};    
    &:before {
    background-color: ${(props): string => props.theme.primaryColor}
    }
  }
  overflow: hidden;
  font-size: 1rem;
`;
