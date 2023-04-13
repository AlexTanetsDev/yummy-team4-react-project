import styled from 'styled-components';

export const Recipe = styled.li`
  margin-bottom: ${p => p.theme.space(6)};
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
    margin-bottom: ${p => p.theme.space(10)};
  }

  @media (min-width: 1440px) {
    width: 1242px;
    max-width: 300px;
    margin-bottom: ${p => p.theme.space(12.5)};
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
  height: 52px;
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
