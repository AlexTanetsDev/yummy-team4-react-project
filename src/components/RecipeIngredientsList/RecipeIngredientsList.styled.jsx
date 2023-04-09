import styled from 'styled-components';

export const IngredientsSection = styled.main`
  padding: 32px 16px 50px;
`;

export const TableTitlesBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.firstAccentColor};
  border-radius: 8px;
  height: 42px;
  padding: 12px 14px;
  margin-bottom: 24px;
`;

export const TableTitle = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 15px;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.mainBgColor};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 18px;
`;

export const IngredietntsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const IngredientItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 29px 0 14px;
  gap: 8px;
  height: 86px;

  background-color: ${p => p.theme.colors.lightGreenText};
  border-radius: 8px;
`;

export const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const IngredientPhoto = styled.img`
  width: 57px;
`;

export const IngredientName = styled.span`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1.2;
  letter-spacing: -0.24px;
`;

export const MeasureCheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 28px;
`;

export const IngredientMeasure = styled.span`
  padding: 4px 4px;
  background: ${p => p.theme.colors.firstAccentColor};
  border-radius: 4px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 15px;
  color: ${p => p.theme.colors.mainBgColor};
`;
