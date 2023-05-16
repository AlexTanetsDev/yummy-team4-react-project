import styled, { css } from 'styled-components';

export const StyledSelect = styled.select`
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
      position: absolute;
      top: 27px;
      right: 16px;
      background-color: transparent;
      color: ${props => props.theme.colors.mainBgColor};
      border: 2px solid ${props => props.theme.colors.mainBgColor};

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
      }
    `}

  ${({ page }) =>
    page === 'auth' &&
    css`
      position: absolute;
      top: 27px;
      right: 16px;
      background-color: ${p => p.theme.colors.mainBgColor};
      color: ${p => p.theme.colors.secondAccentColor};
      border: 2px solid ${p => p.theme.colors.secondAccentColor};

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
          page === 'auth' &&
          css`
            border: 2px solid ${p => p.theme.colors.firstAccentColor};
            color: ${p => p.theme.colors.firstAccentColor};
          `}
      }
    `}

    ${({ page }) =>
    page === 'others' &&
    css`
      display: none;

      @media screen and (min-width: 1440px) {
        display: flex;
        margin-left: 50px;
        background-color: ${p => p.theme.colors.mainBgColor};
        color: ${p => p.theme.colors.secondAccentColor};
        border: 2px solid ${p => p.theme.colors.secondAccentColor};
      }

      &:hover,
      &:focus {
        outline: none;

        ${({ page }) =>
          page === 'others' &&
          css`
            border: 2px solid ${p => p.theme.colors.firstAccentColor};
            color: ${p => p.theme.colors.firstAccentColor};
          `}
      }
    `}

    ${({ page }) =>
    page === 'mobileMenu' &&
    css`
      display: flex;
      margin-right: auto;
      background-color: ${p => p.theme.colors.mainBgColor};
      color: ${p => p.theme.colors.secondAccentColor};
      border: 2px solid ${p => p.theme.colors.secondAccentColor};

      @media screen and (min-width: 1440px) {
        display: none;
      }

      &:hover,
      &:focus {
        outline: none;

        ${({ page }) =>
          page === 'mobileMenu' &&
          css`
            border: 2px solid ${p => p.theme.colors.firstAccentColor};
            color: ${p => p.theme.colors.firstAccentColor};
          `}
      }
    `}
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
