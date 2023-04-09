import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SerchInput = styled.input`
  border-radius: 24px 44px;
  margin-left: 24px;
  padding: 14px 32px;
  width: 295px;
  position: relative;
  background-color: ${p => p.theme.colors.mainBgColor};
  color: #bdbdbd;
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 21px;
  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;
`;

export const SearchMainPageBlack = styled(NavLink)`
  position: absolute;
  right: 24px;
  padding: 14px 32px;
  width: 113px;
  background-color: ${p => p.theme.colors.secondAccentColor};
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 21px;
  border: ${p => p.theme.border.blackBtnBorder};
  border-radius: 24px 44px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 16px 52px;
    width: 161px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    padding: 22px 52px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.firstAccentColor};
    border: ${p => p.theme.border.greenBtnBorder};
    outline: none;
  }
`;
