import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Search } from '../../images/icons/search.svg';

export const StyledHeader = styled.header`
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  padding-top: ${p => p.theme.space(4.5)};
  height: ${p => p.theme.space(11.5)};
  background-color: transparent;

  @media (min-width: 1440px) {
    margin-top: ${p => p.theme.space(3.5)};
  }
`;

export const HeaderWrapper = styled.section`
  display: flex;
  height: 46px;
`;

export const Headerblock = styled.div`
  top: ${p => p.theme.space(4.5)};
  right: ${p => p.theme.space(4)};

  @media (min-width: 768px) {
    top: ${p => p.theme.space(4.5)};
    right: ${p => p.theme.space(8)};
  }
  @media (min-width: 1440px) {
    top: ${p => p.theme.space(4.5)};
    right: ${p => p.theme.space(25)};
  }
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const StyledNav = styled.nav`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 30px;
    margin-left: 187px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${({ path, category }) =>
    path.includes('recipe')
      ? '#23262A'
      : category
      ? category.some(value => path.includes(value))
        ? p => p.theme.colors.firstAccentColor
        : p => p.theme.colors.itemTextColor
      : p => p.theme.colors.itemTextColor};
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &.active {
    color: #8baa36;
  }

  &:hover,
  :focus {
    color: #8baa36;
  }
`;

export const SearchIcon = styled(Search)`
  height: 24px;
  width: 24px;
  path {
    stroke: ${({ path }) =>
      path.includes('recipe')
        ? '#23262A'
        : p => p.theme.colors.shopingListCrossIcon};
  }
`;

export const SearchIconMobile = styled(Search)`
  margin-right: 8px;
  height: 24px;
  width: 24px;
  path {
    stroke: currentColor;
  }
`;

export const StyledBurger = styled.button`
  align-items: center;
  border-style: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-style: none;
  background-color: transparent;
  margin-left: 27.5px;
  color: ${p => p.theme.colors.heroTitle};

  @media screen and (min-width: 768px) {
    margin-left: 54px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const UserProfileWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.button`
  /* position: absolute; */
  display: block;
  margin-left: 10px;
  padding: 0;
  border-radius: 50%;
  border: solid 1px transparent;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const AvatarImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  opacity: 0.9;
  &:hover {
    width: 46px;
    height: 46px;
    opacity: 1;
  }
`;

export const UserName = styled.p`
  width: 80px;
  margin-left: 5px;
  color: ${p => p.theme.colors.userNameColor};
  @media screen and (min-width: 768px) {
    width: 120px;
    margin-left: 30px;
  }
`;
