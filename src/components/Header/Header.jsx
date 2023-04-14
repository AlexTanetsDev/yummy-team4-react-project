import Dark from '../../images/Switch-dark.svg';
import Light from '../../images/Switch-light.svg';

import { RxHamburgerMenu } from 'react-icons/rx';

import {
  StyledLink,
  StyledHeader,
  HeaderWrapper,
  StyledNav,
 SearchIcon,
  StyledBurger,

  Avatar,
  UserName,
  StyledThemeHeader,
  AvatarImg,
  Headerblock,
} from '../Header/Header.styled';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LogoHeader } from '../Logo/Logo';
import { Container } from 'components/Container/Container';

import { Modal } from '../Modal/Modal';

export const Header = () => {
   const User = useSelector(state => state.auth.user);
  const [modalActive, setModalActive] = useState(false);
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const handleButtonClick = () => {
    setNav(!nav);
  };
  const current = window.location.pathname;
  console.log(current);

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoHeader />
          <StyledNav >
            <StyledLink to="/categories/Beef" >Categories</StyledLink>
            
            <StyledLink to="/add" >Add recipes</StyledLink>
            <StyledLink to="/my" >My recipes</StyledLink>
            <StyledLink to="/favorite" >Favorites</StyledLink>
            <StyledLink to="/shopping-list" >Shopping list</StyledLink>
            <StyledLink to="/search">
              <SearchIcon />
            </StyledLink>
          </StyledNav>

          <Headerblock>
            <Avatar to="/">
              <AvatarImg src={User?.avatarURL} alt="avatar" />
            </Avatar>
            <UserName>{User.name}</UserName>

            <StyledThemeHeader onClick={handleTheme}>
              {theme ? (
                <img src={Dark} alt="theme" />
              ) : (
                <img src={Light} alt="theme" />
              )}
            </StyledThemeHeader>
            <StyledBurger
              onClick={() => {
                setModalActive(true);
              }}
            >
              <RxHamburgerMenu style={{ width: '32px', height: '32px' }} />
            </StyledBurger >
          </Headerblock>

          <Modal active={modalActive} setActive={setModalActive} />
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
