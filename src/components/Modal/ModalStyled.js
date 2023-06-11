import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { modal, modalMini } from '../../images/index';

export const MobileMenu = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0);
  background-image: url(${modalMini});
  background-color: #ebf3d4;
  background-repeat: no-repeat;
  background-position: bottom right;
  ${({ active }) =>
    active === true &&
    css`
      transform: scale(1);
      opacity: 1;
      pointer-events: all;
      z-index: 1;
    `}
  &::before {
    content: '';
    position: absolute;
    background-image: inherit;
    transform: rotate(100deg);
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0);
    background-image: url(${modal});
    background-color: #ebf3d4;
    background-repeat: no-repeat;
    background-position: bottom right;
    ${({ active }) =>
      active === true &&
      css`
        transform: scale(1);
        opacity: 1;
        pointer-events: all;
        z-index: 1;
      `}
    &::before {
      content: '';
      position: absolute;
      background-image: inherit;
      transform: rotate(100deg);
    }
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
`;

export const StyledLinkBurger = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${({ path }) =>
    path
      ? path.includes('categories')
        ? p => p.theme.colors.firstAccentColor
        : p => p.theme.colors.heroTitle
      : p => p.theme.colors.heroTitle};
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
  &:last-of-type {
    display: flex;
    align-items: center;
  }

  &.active {
    color: #8baa36;
  }

  &:hover,
  :focus {
    color: #8baa36;
  }
`;

export const StyledNavBurger = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const StyledThemeBtn = styled.button`
  border-style: none;
  background-color: transparent;
  width: 60px;
  height: 30px;
`;

export const ThemeModalDiv = styled.div`
  margin-top: 100px;
  width: 60px;
  height: 30px;
`;

export const StyledBurger = styled.button`
  position: absolute;
  margin-left: auto;
  top: 0;
  right: ${p => p.theme.space(6)};
  color: ${p => p.theme.colors.heroTitle};
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(90deg);
  }
  @media (min-width: 768px) {
    top: 0;
    right: ${p => p.theme.space(8)};
  }
  @media (min-width: 1440px) {
    top: 0;
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
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Content = styled.div`
  padding: 32px;
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.mainBgColor};
`;
