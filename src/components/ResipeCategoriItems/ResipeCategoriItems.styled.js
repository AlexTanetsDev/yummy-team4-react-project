import styled from 'styled-components';

export const RecipesContainer = styled.ul`
  padding: 0;
  margin-top: ${p => p.theme.space(7.5)};

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 704px;
    gap: ${p => p.theme.space(8)};
    margin-top: 50px;
  }

  @media (min-width: 1440px) {
    width: 1242px;
    margin-top: ${p => p.theme.space(12.5)};
    gap: 100px 14px;
  }
`;

export const RecipeItem = styled.li`
  margin-bottom: ${p => p.theme.space(7)};
  max-width: 343px;
  height: 323px;
  border-radius: ${p => p.theme.space(2)};
  position: relative;
  padding: 0;
  overflow: hidden;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 336px;
    margin-bottom: 0px;
  }

  @media (min-width: 1440px) {
    width: 1242px;
    margin-top: ${p => p.theme.space(12.5)};
    max-width: 300px;
  }
`;

export const TitleRecipe = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: ${p => p.theme.space(6.5)};
  left: ${p => p.theme.space(4.5)};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.xl}px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.itemTitleColor};
  background: #ffffff;
  border-radius: ${p => p.theme.space(2)};
  padding: ${p => p.theme.space(4)};
  width: 307px;
  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1440px) {
    width: 268px;
    left: ${p => p.theme.space(4)};
  }
`;

export const ImgRecipe = styled.img`
  display: block;
  width: 343px;
  height: 323px;
  transition: all 0.25s linear;
  &:hover {
    transform: scale(1.1);
  }
`;
