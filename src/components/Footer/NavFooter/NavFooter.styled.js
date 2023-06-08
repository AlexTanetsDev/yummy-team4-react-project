import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWraper = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 20px;
    align-items: flex-start;
    flex-grow: 1;
  }
  @media screen and (min-width: 1440px) {
    gap: 24px;
    width: 89px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.extraContent};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: #fafafa;
  transition: ${p => p.theme.transitions.main};
  &.active {
    color: ${p => p.theme.colors.footerButtonBg};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.footerButtonBg};
  }
  @media screen and (min-width: 768px) {
  }
`;
