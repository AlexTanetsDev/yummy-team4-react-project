import React from 'react';
import { useTranslation } from 'react-i18next';

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

import { LanguageSelector } from 'components/LanguageSelector/LanguageSelector';
import { LogoHeader } from 'components/Logo/Logo';

import { IoMdClose } from 'react-icons/io';

export const Modal = ({ active, setActive }) => {
  const { t } = useTranslation();

  return (
    <MobileMenu
      className={active ? 'modal active' : 'modal'}
      onClick={() => {
        setActive(false);
      }}
    >
      <Content className="modal_content" onClick={evt => evt.stopPropagation()}>
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
        <StyledNavBurger>
          <StyledLinkBurger
            to="/categories/Beef"
            onClick={() => {
              setActive(false);
            }}
          >
            {t('Categories')}
          </StyledLinkBurger>
          <StyledLinkBurger
            to="/add"
            onClick={() => {
              setActive(false);
            }}
          >
            {t('Add recipes')}
          </StyledLinkBurger>
          <StyledLinkBurger
            to="/my"
            onClick={() => {
              setActive(false);
            }}
          >
            {t('My recipes')}
          </StyledLinkBurger>
          <StyledLinkBurger
            to="/favorite"
            onClick={() => {
              setActive(false);
            }}
          >
            {t('Favorites')}
          </StyledLinkBurger>
          <StyledLinkBurger
            to="/shopping-list"
            onClick={() => {
              setActive(false);
            }}
          >
            {t('Shopping list')}
          </StyledLinkBurger>
          <StyledLinkBurger
            to="/search"
            onClick={() => {
              setActive(false);
            }}
          >
            <SearchIconMobile /> {t('Search')}
          </StyledLinkBurger>
        </StyledNavBurger>
        <LanguageSelector page="mobileMenu" />
      </Content>
    </MobileMenu>
  );
};
