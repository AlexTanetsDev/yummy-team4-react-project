import styled from 'styled-components';

export const IngredientsSection = styled.section`
  display: flex;
  flex-direction: column;

  padding: 32px 0px 50px;

  @media (min-width: 768px) {
    padding: 50px 0px 96px;
  }

  @media (min-width: 1440px) {
    padding: 50px 0px 100px;
  }
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

  @media (min-width: 768px) {
    height: 60px;
    padding: 21px 32px;
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    padding: 21px 40px;
    margin-bottom: 50px;
  }
`;

export const TableTitle = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 15px;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.mainBgColor};

  @media (min-width: 768px) {
    line-height: 27px;
    font-size: ${p => p.theme.fontSizes.xxl}px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 40px;
  }

  @media (min-width: 1440px) {
    gap: 109px;
  }
`;

export const IngredietntsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 16px;

  @media (min-width: 768px) {
    gap: 24px;
    margin-bottom: 24px;
  }
`;

export const IngredientItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 29px 0 14px;
  height: 86px;

  background-color: ${p => p.theme.colors.lightGreenText};
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 0 58px 0 40px;
    height: 178px;
  }
  @media (min-width: 1440px) {
    padding: 0 58px 0 70px;
    height: 182px;
  }
`;

export const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 40px;
  }

  @media (min-width: 1440px) {
    gap: 66px;
  }
`;

export const IngredientPhoto = styled.img`
  width: 57px;

  @media (min-width: 768px) {
    width: 112px;
  }

  @media (min-width: 1440px) {
    width: 128px;
  }
`;

export const IngredientName = styled.span`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1.2;
  letter-spacing: -0.24px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const MeasureCheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 28px;

  @media (min-width: 768px) {
    gap: 78px;
  }

  @media (min-width: 1440px) {
    gap: 151px;
  }
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

  @media (min-width: 768px) {
    min-width: 68px;
    min-height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${p => p.theme.fontSizes.xxl}px;
    line-height: 27px;
  }
`;

export const CheckBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;

  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
    border: 2px solid rgba(126, 126, 126, 0.5);
  }
`;

export const Pick = styled.img`
  width: 10px;
  height: 10px;

  @media (min-width: 768px) {
    width: 17px;
    height: 17px;
  }
`;
