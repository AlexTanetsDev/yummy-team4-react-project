import React from 'react';
import './Modal.css';
import {
  MobileMenu,
  StyledNavBurger,
  StyledLinkBurger,
  Content,
  StyledBurger,
  ModalHeader,
} from './ModalStyled';
import { SearchIconMobile } from '../Header/Header.styled';

import { LogoHeader } from 'components/Logo/Logo';
import { IoMdClose } from 'react-icons/io';

export const Modal = ({ active, setActive }) => {
  return (
    <MobileMenu
      className={active ? 'modal active' : 'modal'}
      onClick={() => {
        setActive(false);
      }}
    >
      <ModalHeader>
        <LogoHeader />
        <StyledBurger
          onClick={() => {
            setActive(false);
          }}
          // onClick={handleButtonClick}
        >
          <IoMdClose style={{ width: '32px', height: '32px' }} />
        </StyledBurger>
      </ModalHeader>
      <Content className="modal_content" onClick={evt => evt.stopPropagation()}>
        <StyledNavBurger>
          <StyledLinkBurger
            to="/categories/Beef"
            onClick={() => {
              setActive(false);
            }}
          >
            Categories
          </StyledLinkBurger>
          <StyledLinkBurger
            to="/add"
            onClick={() => {
              setActive(false);
            }}
          >
            Add recipes
          </StyledLinkBurger>
          <StyledLinkBurger
            to="/my"
            onClick={() => {
              setActive(false);
            }}
          >
            My recipes
          </StyledLinkBurger>
          <StyledLinkBurger
            to="/favorite"
            onClick={() => {
              setActive(false);
            }}
          >
            Favorites
          </StyledLinkBurger>
          <StyledLinkBurger
            to="/shopping-list"
            onClick={() => {
              setActive(false);
            }}
          >
            Shopping list
          </StyledLinkBurger>
          <StyledLinkBurger
            to="/search"
            onClick={() => {
              setActive(false);
            }}
          >
            <SearchIconMobile /> Search
          </StyledLinkBurger>
        </StyledNavBurger>
      </Content>
    </MobileMenu>
  );
};
