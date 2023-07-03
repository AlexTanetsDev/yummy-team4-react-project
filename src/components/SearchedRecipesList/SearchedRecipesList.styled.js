import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RecipesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 100px;
    column-gap: 14px;
  }
`;

export const SearchedRecipesItem = styled(NavLink)`
  position: relative;
  width: 100%;
  height: 323px;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: calc((100% - 32px) / 2);
  }
  @media screen and (min-width: 1440px) {
    max-width: calc((100% - 44px) / 4);
  }
`;

export const RecipeLabel = styled.div`
  position: absolute;
  z-index: 333;
  bottom: 26px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 307px;
  height: 52px;
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #3e4462;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1440px) {
    width: 268px;
  }
`;

export const RecipePreview = styled.img`
  border-radius: 8px;
  height: 100%;
  width: 100%;
  transition: all 0.25s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
`;

export const Title = styled.p`
  margin-top: 24px;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  opacity: 0.5;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.inputAddRecepies};
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const ImageBasket = styled.img`
  margin-top: 50px;
  width: 208px;
  height: 133px;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const FlagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 10px;
  width: 320px;
  gap: 5px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 450px;
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 700px;
  }
`;

export const FlagsItem = styled.li``;
