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
  AvatarImg,
  Headerblock,
  UserProfileWrap,
} from '../Header/Header.styled';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LogoHeader } from '../Logo/Logo';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal';
import { Container } from 'components/Container/Container';

import { Modal } from '../Modal/Modal';

export const Header = () => {
  const User = useSelector(state => state.auth.user);
  const [modalActive, setModalActive] = useState(false);
  const [userModal, SetUserModal] = useState(false);

  const handleUserAvatarClsck = () => {
    SetUserModal(!userModal);
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoHeader />
          <StyledNav>
            <StyledLink to="/categories/Beef">Categories</StyledLink>

            <StyledLink to="/add">Add recipes</StyledLink>
            <StyledLink to="/my">My recipes</StyledLink>
            <StyledLink to="/favorite">Favorites</StyledLink>
            <StyledLink to="/shopping-list">Shopping list</StyledLink>
            <StyledLink to="/search">
              <SearchIcon />
            </StyledLink>
          </StyledNav>

          <Headerblock>
            <UserProfileWrap>
              <Avatar onClick={handleUserAvatarClsck}>
                <AvatarImg src={User.avatarURL} alt="avatar" />
              </Avatar>
              <UserName>{User.name}</UserName>
              {userModal && <UserLogoModal />}
            </UserProfileWrap>
            <StyledBurger
              onClick={() => {
                setModalActive(true);
              }}
            >
              <RxHamburgerMenu style={{ width: '32px', height: '32px' }} />
            </StyledBurger>
          </Headerblock>

          <Modal active={modalActive} setActive={setModalActive} />
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
