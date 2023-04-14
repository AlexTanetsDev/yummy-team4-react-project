import React from 'react';
import './Modal.css';
import {
  MobileMenu,
  StyledNavBurger,
  StyledLinkBurger,
  ThemeModalDiv,
  StyledThemeBtn,
  Content,
  StyledBurger,
 ModalHeader
} from './ModalStyled';
import {SearchIcon} from "../Header/Header.styled"
import Dark from '../../images/Switch-dark.svg';
import Light from '../../images/Switch-light.svg';

import { useState } from 'react';
import { LogoHeader } from 'components/Logo/Logo';
import { IoMdClose } from 'react-icons/io';

export const Modal = ({ active, setActive }) => {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };

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
          <StyledLinkBurger to="/categories/Beef" onClick={() => {
        setActive(false);
      }}>Categories</StyledLinkBurger>
          <StyledLinkBurger to="/add" onClick={() => {
        setActive(false);
      }}>Add recipes</StyledLinkBurger>
          <StyledLinkBurger to="/my" onClick={() => {
        setActive(false);
      }}>My recipes</StyledLinkBurger>
          <StyledLinkBurger to="/fovorites" onClick={() => {
        setActive(false);
      }}>Favorites</StyledLinkBurger>
          <StyledLinkBurger to="/shopping-list" onClick={() => {
        setActive(false);
      }}>Shopping list</StyledLinkBurger>
          <StyledLinkBurger to="/search" onClick={() => {
        setActive(false);
      }}>
            <SearchIcon /> Search
          </StyledLinkBurger>
        </StyledNavBurger>
        <ThemeModalDiv>
          <StyledThemeBtn onClick={handleTheme}>
            {theme ? (
              <img src={Dark} alt="theme" />
            ) : (
              <img src={Light} alt="theme" />
            )}
          </StyledThemeBtn>
        </ThemeModalDiv>
        </Content>
       
      </MobileMenu>
   
  );
};
