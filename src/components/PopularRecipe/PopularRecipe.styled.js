import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerPopular = styled.div`
  margin-bottom: ${p => p.theme.space(25)};

  @media (min-width: 1440px) {
    width: 306px;
  }
`;

export const Title = styled.h2`
  display: inline-block;
  margin: 0;
  margin-bottom: ${p => p.theme.space(8)};

  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: ${p => p.theme.colors.itemTitleColor};

  @media (min-width: 768px) {
    margin-bottom: ${p => p.theme.space(10)};
  }
`;

export const PopularList = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const RecipeLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const PopularItem = styled.li`
  // position: relative;
  // display: flex;
  padding-bottom: ${p => p.theme.space(3.5)};
  margin-bottom: ${p => p.theme.space(6)};
  height: 98px;
  //   background-color: ${p => p.theme.colors.whiteText};
  //   border-radius: ${p => p.theme.space(2)};
  border-bottom: 1px solid #707070;

  &:last-of-type {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: ${p => p.theme.space(11.5)};
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    &:nth-of-type(1n + 2) {
      margin-right: 0px;
    }

    &:nth-of-type(1n + 3) {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-right: 0px;
    margin-bottom: ${p => p.theme.space(6)};

    &:last-of-type {
      margin-bottom: 0px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: ${p => p.theme.space(26)};
  height: ${p => p.theme.space(21)};
  margin-right: ${p => p.theme.space(3)};
  background-color: ${p => p.theme.colors.mainBgColor};
  border-radius: ${p => p.theme.space(2)};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: ${p => p.theme.space(25.5)};
  }
  @media screen and (min-width: 1440px) {
    width: ${p => p.theme.space(24)};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${p => p.theme.space(2)};
`;

export const InfoWrapper = styled.div`
  // flex-grow: 1;
  // width: 100%;
  // margin-left: ${p => p.theme.space(3.5)};
  // width: ${p => p.theme.space(43.25)};

  // @media screen and (min-width: 768px) {
  //   margin-left: ${p => p.theme.space(6)};
  //   width: ${p => p.theme.space(74.5)};
  // }
  // @media screen and (min-width: 1440px) {
  //   margin-left: ${p => p.theme.space(10)};
  //   width: ${p => p.theme.space(169.75)};
  // }
`;

export const TitleRecipe = styled.h3`
  display: block;
  margin: 0;
  font-family: 'Poppins';
  font-weight: 600;
  color: ${p => p.theme.colors.itemTitleColor};
  font-size: ${p => p.theme.fontSizes.xl}px;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

export const Description = styled.p`
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #7e7e7e;

  overflow: hidden;
  max-width: ${p => p.theme.space(53)};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const SocialContainer = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    margin-bottom: ${p => p.theme.space(25)};
  }
`;

export const Social = styled.div`
  height: 20px;
`;
