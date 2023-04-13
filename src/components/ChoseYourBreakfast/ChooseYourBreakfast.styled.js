import styled from 'styled-components';

import bg_mob from '../../images/mainPagePhoto/bg_mob-min.png';
import blatt_mob from '../../images/mainPagePhoto/blatt_mob-min.png';
import blatt_l_mob from '../../images/mainPagePhoto/blatt_l_mob-min.png';
import unsplash_mob from '../../images/mainPagePhoto/unsplash_mob-min.png';
import desktop_bg from '../../images/mainPagePhoto/desktop_bg_1440.png';
import tablet_bg from '../../images/mainPagePhoto/tablet_bg.png';

export const MainPageHero = styled.div`
  position: relative;
  margin: -64px auto 0;
  max-width: ${p => p.theme.breakPoints[0]};
  width: 100%;
  height: 777px;
  background-repeat: no-repeat;
  background-color: ${p => p.theme.colors.mainBgColor};
  background-image: url('${unsplash_mob}'), url('${blatt_mob}'),
    url('${blatt_l_mob}'), url('${bg_mob}');
  background-position: top 322px center, top 70px right 0px, top 20px left 0px,
    top 150px right -20px;
  // background-size: 320px, 375px, 60px, 280px;

  @media screen and (min-width: 768px) {
    max-width: ${p => p.theme.breakPoints[1]};
    width: 100%;
    height: 640px;
    background-repeat: no-repeat;
    background-image: url('${tablet_bg}');
    background-size: cover;
    background-position: center center;
  }
  @media screen and (min-width: 1440px) {
    max-width: ${p => p.theme.breakPoints[2]};
    width: 1440px;
    position: relative;
    height: 800px;
    background-repeat: no-repeat;
    background-image: url('${desktop_bg}');
    background-size: cover;
    /* background-position: center center; */
  }
`;

export const HeroTitle = styled.h1`
  padding-top: 132px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.005em;
  color: ${p => p.theme.colors.secondAccentColor};

  @media (min-width: 768px) {
    padding-top: 204px;
    margin-left: 32px;
    text-align: left;
    font-size: 72px;
  }
  @media (min-width: 1440px) {
    padding-top: 226px;
    margin-left: 100px;
    font-size: 100px;
  }
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.firstAccentColor};
`;

export const HeroInfo = styled.h3`
  margin-bottom: 157px;
  margin-top: 14px;
  width: 248px;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 1.29;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.itemTextColor};

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 24px;
    margin-left: 38px;
    width: 362px;
    text-align: left;
  }
  @media (min-width: 1440px) {
    margin-bottom: 50px;
    width: 465px;
    margin-top: 14px;
    margin-left: 107px;
    font-size: ${p => p.theme.fontSizes.xxl}px;
    line-height: 1.33;
  }
`;

export const BreakfastButton = styled.button`
  padding: 8px 8px;
  width: 225px;
  background: #fafafa;
  border-radius: 8px;
  margin-bottom: 115px;
  margin-right: 34px;
  margin-left: 116px;
  border: transparent;

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 260px;
  }
  @media (min-width: 1440px) {
    width: 295px;
    margin-right: 122px;
  }
`;

export const InputWraper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
  }
  @media (min-width: 1440px) {
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: -0.24px;
  text-align: left;
  color: #3e4462;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l}px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.l}px;
    line-height: 1.42;
  }
`;

export const Arrow = styled.p`
  margin-top: 7px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  letter-spacing: 0.2px;
  color: #3e4462;
  @media (min-width: 768px) {
    margin-bottom: 7px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 11px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.firstAccentColor};
  }
`;
