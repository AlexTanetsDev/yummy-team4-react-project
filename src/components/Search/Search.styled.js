import styled from 'styled-components';

export const SerchInput = styled.input`
  border-radius: 24px 44px;
  padding: 14px 86px 14px 32px;
  width: 295px;
  position: relative;
  background-color: ${p => p.theme.colors.whiteText};
  color: ${p => p.theme.colors.mainTitleText};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 21px;
  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;
  @media (min-width: 768px) {
    padding: 16px 136px 16px 52px;
    width: 362px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    padding: 22px 146px 22px 52px;
    width: 510px;
  }

  &:hover,
  &:focus {
    border: ${p => p.theme.border.greenBtnBorder};
    outline: none;
  }
`;

export const SearchMainPageBlack = styled.button`
  position: absolute;
  right: auto;
  left: 240px;
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
    left: 270px;
    padding: 16px 52px;
    width: 161px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    padding: 22px 52px;
    left: 475px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.firstAccentColor};
    border: ${p => p.theme.border.greenBtnBorder};
    outline: none;
  }
`;
