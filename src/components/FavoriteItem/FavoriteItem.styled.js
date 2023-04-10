import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const StyledFavoriteItem = styled.li`
  position: relative;
  display: flex;
  padding: ${p => p.theme.space(3.5)};
  height: auto;
  background-color: ${p => p.theme.colors.whiteText};
  border-radius: ${p => p.theme.space(2)};

  &:not(:last-of-type) {
    margin-bottom: ${p => p.theme.space(4.5)};
  }

  @media screen and (min-width: 768px) {
    padding: 28px 24px;
    width: ${p => p.theme.space(176)};

    &:not(:last-of-type) {
      margin-bottom: ${p => p.theme.space(10)};
    }
  }
  }
  @media screen and (min-width: 1440px) {
    padding: ${p => p.theme.space(10)};
    width: ${p => p.theme.space(310)};

    &:not(:last-of-type) {
      margin-bottom: ${p => p.theme.space(12.5)};
    }
  }
`;

export const ImageWrapper = styled.div`
  width: ${p => p.theme.space(31)};
  height: ${p => p.theme.space(31)};
  background-color: ${p => p.theme.colors.mainBgColor};
  border-radius: ${p => p.theme.space(2)};

  @media screen and (min-width: 768px) {
    width: ${p => p.theme.space(57)};
    height: ${p => p.theme.space(58)};
  }
  @media screen and (min-width: 1440px) {
    width: ${p => p.theme.space(79.5)};
    height: ${p => p.theme.space(81)};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${p => p.theme.space(2)};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${p => p.theme.space(3.5)};
  width: ${p => p.theme.space(43.25)};

  @media screen and (min-width: 768px) {
    margin-left: ${p => p.theme.space(6)};
    width: ${p => p.theme.space(74.5)};
  }
  @media screen and (min-width: 1440px) {
    margin-left: ${p => p.theme.space(10)};
    width: ${p => p.theme.space(169.75)};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space(3.5)};
  height: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.itemTitleColor};
  overflow: hidden;

  @media (min-width: 768px) {
    margin-bottom: ${p => p.theme.space(7)};
    margin-bottom: ${p => p.theme.space(7)};
    height: 26px;
    font-size: 24px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    margin-bottom: ${p => p.theme.space(12.5)};
  }
`;

export const TextWrapper = styled.div`
  height: 57px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 73px;
  }
  @media (min-width: 1440px) {
    height: 158px;
  }
`;

export const DescriptionText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs}px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.itemTextColor};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xxl}px;
    line-height: 24px;
    margin-bottom: ${p => p.theme.space(3.5)};
  }
`;

export const InstructionsText = styled.p`
  display: none;

  @media (min-width: 1440px) {
    display: inline-block;
    font-family: 'Poppins';
    font-style: normal;
    font-size: ${p => p.theme.fontSizes.xxl}px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.itemTextColor};
  }
`;

export const TimeWrapper = styled.div`
  margin-top: ${p => p.theme.space(6.25)};

  @media (min-width: 768px) {
    margin-top: ${p => p.theme.space(20.75)};
  }

  @media (min-width: 1440px) {
    margin-top: ${p => p.theme.space(18)};
  }
`;

export const TimeText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.itemTitleColor};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l}px;
    line-height: 20px;
  }
`;
