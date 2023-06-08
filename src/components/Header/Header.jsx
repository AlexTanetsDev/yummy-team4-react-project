import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
import { LanguageSelector } from 'components/LanguageSelector/LanguageSelector';
import { Modal } from '../Modal/Modal';
import ThemeButton from 'components/ThemeButton/ThemeButton';
import { useTheme } from 'styled-components';
import { selectCategoryList } from 'redux/auth/selectors';

export const Header = ({ onClick }) => {
  const User = useSelector(state => state.auth.user);
  const category = useSelector(selectCategoryList);
  const [modalActive, setModalActive] = useState(false);
  const [opened, setOpened] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const theme = useTheme();

  const handleClick = () => {
    setOpened(!opened);
  };
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoHeader />
          <StyledNav>
            <StyledLink
              path={location.pathname}
              category={category}
              to="/categories/Beef"
            >
              {t('Categories')}
            </StyledLink>
            <StyledLink path={location.pathname} to="/add">
              {t('Add recipes')}
            </StyledLink>
            <StyledLink path={location.pathname} to="/my">
              {t('My recipes')}
            </StyledLink>
            <StyledLink path={location.pathname} to="/favorite">
              {t('Favorites')}
            </StyledLink>
            <StyledLink path={location.pathname} to="/shopping-list">
              {t('Shopping list')}
            </StyledLink>
            <StyledLink path={location.pathname} to="/search">
              <SearchIcon
                path={location.pathname}
                color={theme.colors.shopingListCrossIcon}
              />
            </StyledLink>
          </StyledNav>
          <Headerblock>
            <UserProfileWrap>
              <Avatar onClick={handleClick}>
                <AvatarImg src={User.avatarURL} alt="avatar" />
              </Avatar>
              <UserName>{User.name}</UserName>
            </UserProfileWrap>
            <ThemeButton onClick={onClick} />
            <StyledBurger
              onClick={() => {
                setModalActive(true);
              }}
            >
              <RxHamburgerMenu style={{ width: '32px', height: '32px' }} />
            </StyledBurger>
            <LanguageSelector page="others" />
          </Headerblock>
          <Modal active={modalActive} setActive={setModalActive} />
          {opened && <UserLogoModal opened={opened} />}
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
