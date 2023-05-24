import styled from 'styled-components';

export const RecipePreparationWrapper = styled.section`
  padding-bottom: 76px;
  @media (min-width: 768px) {
    padding-bottom: 80px;
  }

  @media (min-width: 1440px) {
    display: flex;
    gap: 50px;
    padding-bottom: 50px;
  }
`;

export const PreparationTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;

  color: ${p => p.theme.colors.itemTitleColor};

  margin-bottom: 30px;
`;

export const PreparationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 17px;

  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-bottom: 53px;
  }

  @media (min-width: 1440px) {
    padding-bottom: 0;
  }
`;

export const PreparationListItem = styled.li`
  display: grid;
  grid-template-columns: 21px 1fr;
  align-items: center;

  gap: 14px;
`;

export const Point = styled.span`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.colors.firstAccentColor};

  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 18px;
  color: ${p => p.theme.colors.whiteText};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l}px;
    line-height: 21px;
  }
`;

export const PreparationText = styled.p`
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l}px;
    line-height: 1.3;
  }
`;

export const RecipeImage = styled.img`
  border-radius: 8px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 433px;
    height: 332px;
  }
`;
