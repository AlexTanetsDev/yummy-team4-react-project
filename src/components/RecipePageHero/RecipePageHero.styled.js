import styled from 'styled-components';
import { FiClock } from 'react-icons/fi';
import {
  recipeHeroMob,
  recipeHeroTablet,
  recipeHeroDesktop,
} from '../../images';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 455px;
  padding: 0 38px 0;

  background-image: url(${recipeHeroMob});
  background-size: 100% 100%;

  @media (min-width: 768px) {
    background-image: url(${recipeHeroTablet});
    padding: 50px 131px 0;
    height: 495px;
  }

  @media (min-width: 1440px) {
    background-image: url(${recipeHeroDesktop});
    padding: 50px 392px 0;
    height: 493px;
  }
`;

export const HeroSectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 18px;
  color: ${p => p.theme.colors.firstAccentColor};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
    font-size: ${p => p.theme.fontSizes.xxxxl}px;
    line-height: 1;
    letter-spacing: -0.02em;
  }
`;

export const HeroSectionText = styled.p`
  text-align: center;

  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.secondAccentColor};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.02em;

  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxl}px;
    max-width: 506px;
  }

  @media (min-width: 1440px) {
    max-width: 656px;
    margin-bottom: 30px;
  }
`;

export const HeroSectionRecipeTimeBox = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 43px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }

  @media (min-width: 1440px) {
    margin-top: 48px;
  }
`;

export const HeroSectionRecipeTime = styled.span`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: #23262a;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l}px;
  }
`;

export const ClockIcon = styled(FiClock)`
  font-size: ${p => p.theme.fontSizes.m}px;
  color: '#23262A';

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;
