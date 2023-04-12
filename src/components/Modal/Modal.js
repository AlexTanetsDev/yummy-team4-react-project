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
} from '../Modal/ModalStyled';
import Dark from '../Header/Switch-dark.svg';
import Light from '../Header/Switch-light.svg';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { LogoHeader } from 'components/Logo/Logo';
import { IoMdClose } from 'react-icons/io';

export const Modal = ({ active, setActive }) => {
  const [theme, setTheme] = useState(true);
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
      <LogoHeader />
      <StyledBurger
        onClick={() => {
          setActive(false);
        }}
        // onClick={handleButtonClick}
      >
        <IoMdClose />
      </StyledBurger>

      <Content className="modal_content" onClick={evt => evt.stopPropagation()}>
        <StyledNavBurger>
          <StyledLinkBurger to="/catagories">Categories</StyledLinkBurger>
          <StyledLinkBurger to="/add">Add recipes</StyledLinkBurger>
          <StyledLinkBurger to="/my">My recipes</StyledLinkBurger>
          <StyledLinkBurger to="/fovorites">Favorites</StyledLinkBurger>
          <StyledLinkBurger to="/shopping-list">Shopping list</StyledLinkBurger>
          <StyledLinkBurger to="/search">
            <BsSearch /> Search
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
