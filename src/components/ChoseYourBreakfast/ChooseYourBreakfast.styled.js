import styled from 'styled-components';

import bg_mob from '../../images/mainPagePhoto/bg_mob-min.png';
import blatt_mob from '../../images/mainPagePhoto/blatt_mob-min.png';
import blatt_l_mob from '../../images/mainPagePhoto/blatt_l_mob-min.png';
import unsplash_mob from '../../images/mainPagePhoto/unsplash_mob-min.png';

import {
  spinach1Tablet,
  spinach2Tablet,
  unsplashTablet,
  bgTablet,
} from '../../images/mainPagePhoto/tablet';

import {
  spinach1Desctop,
  spinach2Desctop,
  unsplashDesctop,
  bgDesctop,
} from '../../images/mainPagePhoto/desctop';
import { NavLink } from 'react-router-dom';

export const MainPageHero = styled.div`
  position: relative;
  margin: -64px auto 0;
  // max-width: ${p => p.theme.breakPoints[0]};
  width: 100%;
  height: 777px;
  background-repeat: no-repeat;
  background-color: ${p => p.theme.colors.mainBgColor};
  background-image: url('${unsplash_mob}'), url('${blatt_mob}'),
    url('${blatt_l_mob}'), url('${bg_mob}');
  background-position: top 322px right 0px, top 70px right 0px,
    top 20px left 0px, top 150px right -20px;
  background-size: 320px, 375px, 60px, 280px;

  @media screen and (min-width: 768px) {
    height: 640px;
    background-repeat: no-repeat;
    background-image: url('${unsplashTablet}'), url('${spinach2Tablet}'),
      url('${spinach1Tablet}'), url('${bgTablet}');
    background-position: top 180px right 0px, top 50px right 0px,
      top 0px left 0px, top 0px right 0px;
    background-size: 351px, 519px, 65px, 325px;
  }
  @media screen and (min-width: 1440px) {
    position: relative;
    height: 800px;
    background-repeat: no-repeat;
    background-image: url('${unsplashDesctop}'), url('${spinach2Desctop}'),
      url('${spinach1Desctop}'), url('${bgDesctop}');
    background-size: cover;
    background-position: right 135px top 112px, right 0px top -31px,
      left 0px top 0px, right 0px top 0px;
    background-size: 539px, 887px, 100px, 645px;
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

    text-align: left;
    font-size: 72px;
  }
  @media (min-width: 1440px) {
    padding-top: 226px;

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
    margin-left: 0;
    width: 362px;
    text-align: left;
  }
  @media (min-width: 1440px) {
    margin-bottom: 50px;
    width: 465px;
    margin-top: 14px;

    font-size: ${p => p.theme.fontSizes.xxl}px;
    line-height: 1.33;
  }
`;

export const BreakfastButton = styled.div`
  padding: 8px 8px;
  max-width: 225px;
  background: #fafafa;
  border-radius: 8px;
  margin-bottom: 115px;
  margin-left: auto;
  border: ${p => p.theme.border.greenBtnBorder};

  @media (min-width: 450px) {
    margin-right: -40px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 0px;
    width: 260px;
  }
  @media (min-width: 1440px) {
    width: 295px;
    margin-right: 22px;
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
  display: inline-block;
  max-width: 209px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: -0.24px;
  text-align: left;
  color: #3e4462;
  @media (min-width: 768px) {
    width: 236px;
    font-size: ${p => p.theme.fontSizes.l}px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.l}px;
    line-height: 1.42;
    width: 266px;
  }
`;

export const Arrow = styled(NavLink)`
  margin-left: auto;
  padding-top: 7px;
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
  border: transparent;
  background-color: transparent;

  @media (min-width: 768px) {
    padding-bottom: 7px;
  }
  @media (min-width: 1440px) {
    padding-bottom: 11px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.firstAccentColor};
  }
`;
