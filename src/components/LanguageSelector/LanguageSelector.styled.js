import styled, { css } from 'styled-components';

export const StyledSelect = styled.select`
  position: absolute;
  top: 27px;
  right: 16px;
  padding: 5px 5px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 21px;
  border-radius: 6px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ page }) =>
    page === 'welcome' &&
    css`
      background-color: transparent;
      color: ${props => props.theme.colors.mainBgColor};
      border: 2px solid ${props => props.theme.colors.mainBgColor};
    `}

  ${({ page }) =>
    page === 'others' &&
    css`
      background-color: ${p => p.theme.colors.mainBgColor};
      color: ${p => p.theme.colors.secondAccentColor};
      border: 2px solid ${p => p.theme.colors.secondAccentColor};
    `}

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 25px;
    right: 32px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 27.5px;
    right: 100px;
  }

  &:hover,
  &:focus {
    outline: none;

    ${({ page }) =>
      page === 'welcome' &&
      css`
        border: 2px solid ${p => p.theme.colors.firstAccentColor};
        color: ${p => p.theme.colors.firstAccentColor};
      `}

    ${({ page }) =>
      page === 'others' &&
      css`
        border: 2px solid ${p => p.theme.colors.firstAccentColor};
        color: ${p => p.theme.colors.firstAccentColor};
      `}
  }
`;

export const StyledOption = styled.option`
  background-color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 21px;
  color: ${p => p.theme.colors.secondAccentColor};
`;
