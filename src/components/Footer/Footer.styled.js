import styled from 'styled-components';

export const FooterStyled = styled.footer`
  position: relative;
  background-color: ${p => p.theme.colors.secondAccentColor};
`;

export const TopWrapper = styled.div`
  position: relative;
  max-width: ${p => p.theme.breakPoints[0]};
  margin: 0 auto;
  padding-top: 28px;
  padding-bottom: 18px;
  @media screen and (min-width: 768px) {
    max-width: ${p => p.theme.breakPoints[1]};
    padding-top: 50px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: ${p => p.theme.breakPoints[2]};
    padding-top: 64px;
    padding-bottom: 50px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const LogoNavWrapper = styled.div`
  display: ${p => (p.isMobile ? 'block' : 'flex')};
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 72px;
    gap: ${p => (p.isMobile ? '0' : '173px')};
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    gap: ${p => (p.isMobile ? '0' : '159px')};
  }
`;

export const BottomWrapper = styled.div`
  position: relative;
  padding-top: 26px;
  padding-bottom: 28px;
  text-align: center;
  background-color: transparent;

  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: contain;
  background-size: 160px 172px;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
  }
  @media screen and (min-width: 768px) {
    padding: 32px 0;
    background-size: 290px 313px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 438px 474px;
    height: 114px;
  }
  p {
    font-size: 10px;
    line-height: ${p => p.theme.lineHeights.subheader};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights[1]};
    letter-spacing: -0.01em;
    color: rgba(34, 37, 42, 0.5);
    opacity: 0.5;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
  span {
    margin-left: 14px;
    font-weight: ${p => p.theme.fontWeights[0]};
    @media screen and (min-width: 768px) {
      margin-left: 28px;
    }
    @media screen and (min-width: 1440px) {
      margin-left: 40px;
    }
  }
`;

export const WrapperForDesktop = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 235px;
    margin-bottom: 41px;
  }
`;
