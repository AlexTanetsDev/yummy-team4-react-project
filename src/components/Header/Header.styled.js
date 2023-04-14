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
`;

export const Headerblock = styled.div`
  /* position: absolute; */
  /* padding-top: ${p => p.theme.space(4.5)}; */
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
  /* justify-content:space-between; */
  align-items: center;
  margin-left: auto;
  /* z-index:1; */
`;

export const StyledNav = styled.nav`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-right: 30px;
    margin-left: 30px;
    display: flex;
    gap: 30px;
    margin-left: 330px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #23262a;
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
`;

export const SearchIconMobile = styled(Search)`
  margin-right: 8px;
  height: 24px;
  width: 24px;
`;

export const StyledBurger = styled.button`
  @media screen and (max-width: 1440px) {
    align-items: center;
    border-style: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    border-style: none;
    background-color: transparent;
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
  display: block;
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: 50%;
  border: solid 1px transparent;
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-right: 24px;
  margin-left: 14px;
`;
