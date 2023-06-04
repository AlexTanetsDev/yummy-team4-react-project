import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    justify-content: start;
    gap: 12px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.p`
  margin-left: 35px;
  margin-top: 8px;
  font-weight: ${p => p.theme.fontWeights[3]};
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: 0.015em;
  color: ${p => p.theme.colors.footerText};
  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-left: 60px;
    margin-top: 10px;
  }
`;
