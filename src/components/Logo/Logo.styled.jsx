import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoHeaderWrapper = styled.div`
  position: absolute;
  top: ${p => p.theme.space(4.5)};
  left: ${p => p.theme.space(4)};

  @media (min-width: 768px) {
    top: ${p => p.theme.space(4.5)};
    left: ${p => p.theme.space(8)};
  }
  @media (min-width: 1440px) {
    top: ${p => p.theme.space(4.5)};
    left: ${p => p.theme.space(25)};
  }
  z-index:1
`;

export const LogoHeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space(1.5)};
  width: ${p => p.theme.space(10)};
  height: ${p => p.theme.space(10)};
  background-color: ${p => p.theme.colors.firstAccentColor};
  border: ${p => p.theme.border.greenBtnBorder};
  border-radius: ${p => p.theme.space(3)};

  @media (min-width: 768px) {
    padding: ${p => p.theme.space(1.75)};
    width: ${p => p.theme.space(11)};
    height: ${p => p.theme.space(11)};
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;

export const LogoHeaderImg = styled.img`
  min-width: ${p => p.theme.space(7)};
  min-height: ${p => p.theme.space(7)};

  @media (min-width: 768px) {
    min-width: ${p => p.theme.space(7.5)};
    min-height: ${p => p.theme.space(7.5)};
  }
`;

export const LogoFooterWrapper = styled.div`
  position: absolute;
  top: ${p => p.theme.space(7)};
  left: ${p => p.theme.space(29)};

  @media (min-width: 768px) {
    top: ${p => p.theme.space(12.5)};
    left: ${p => p.theme.space(8)};
  }
  @media (min-width: 1440px) {
    top: ${p => p.theme.space(16)};
    left: ${p => p.theme.space(25)};
  }
`;

export const LogoFooterLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space(1.75)};
  width: ${p => p.theme.space(8)};
  height: ${p => p.theme.space(8)};
  background-color: ${p => p.theme.colors.lightGreenText};
  border: ${p => p.theme.border.favoriteBtnBorder};
  border-radius: ${p => p.theme.space(1.5)};

  @media (min-width: 768px) {
    padding: ${p => p.theme.space(1.75)};
    width: ${p => p.theme.space(11)};
    height: ${p => p.theme.space(11)};
    border-radius: ${p => p.theme.space(3)};
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;

export const LogoFooterImg = styled.img`
  min-width: ${p => p.theme.space(4.5)};
  min-height: ${p => p.theme.space(4.5)};

  @media (min-width: 768px) {
    min-width: ${p => p.theme.space(7.5)};
    min-height: ${p => p.theme.space(7.5)};
  }
`;
