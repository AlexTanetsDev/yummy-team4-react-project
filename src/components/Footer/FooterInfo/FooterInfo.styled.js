import styled from 'styled-components';

export const InfoList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 20px;
    list-style-type: disc;
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.extraContent};
    letter-spacing: ${p => p.theme.letterSpacings.content};
    color: ${p => p.theme.colors.btnTextLight};
  }
  @media screen and (min-width: 1440px) {
    gap: 12px;
    width: 418px;
    font-size: 18px;
    line-height: ${p => p.theme};
  }
`;