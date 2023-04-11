import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { basilLeaves } from '../../images/index';

export const MobileMenu = styled.div`
  @media screen and (max-width: 1440px) {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0);
  }
  display: none;
`;

export const StyledLinkBurger = styled(NavLink)`
  width: 114px;
  height: 18px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #22252a;
`;

export const StyledNavBurger = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 185px;
  margin-right: auto;
  margin-left: auto;
`;

export const StyledThemeBtn = styled.button`
  border-style: none;
  background-color: transparent;

  /* margin-top: auto; */
  width: 60px;
  height: 30px;
`;

export const ThemeModalDiv = styled.div`
  margin-top: 100px;
  width: 60px;
  height: 30px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ebf3d4;
  background-image: url(${basilLeaves});
  background-repeat: no-repeat;
  background-position: bottom -200px right;

  &::before {
    content: '';
    position: absolute;
    background-image: inherit;
    transform: rotate(100deg);
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  z-index: 1;
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

  align-items: center;
  border-style: none;
  background-color: transparent;

  @media screen and (max-width: 1440px) {
    display: flex;
    align-items: center;
    border-style: none;
    background-color: transparent;
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
