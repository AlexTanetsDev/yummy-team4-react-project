import styled from 'styled-components';

export const RecipesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 116px;
  column-gap: 14px;
`;

export const SearchedRecipesItem = styled.li`
  position: relative;
  width: 100%;
  height: 323px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    max-width: calc((100% - 28px) / 2);
  }
  @media screen and (min-width: 1440px) {
    max-width: calc((100% - 42px) / 4);
  }
`;

export const RecipeLabel = styled.div`
  position: absolute;
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
