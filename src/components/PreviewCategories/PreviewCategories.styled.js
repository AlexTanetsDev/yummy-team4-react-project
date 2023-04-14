import styled from 'styled-components';

export const RecipesContainer = styled.ul`
  padding: 0;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 704px;
    gap: ${p => p.theme.space(7.5)};
  }
  @media (min-width: 1440px) {
    width: 1242px;
    gap: 50px 14px;
  }
`;

export const Title = styled.title`
  display: inline-block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.xxxl}px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.mainTitleText};
  margin-bottom: 32px;
  margin-top: ${p => p.theme.space(16)};

  @media (min-width: 768px) {
    margin-bottom: ${p => p.theme.space(10)};
    margin-top: ${p => p.theme.space(18)};
    font-size: ${p => p.theme.fontSizes.xxxxl}px;
    line-height: 1;
  }

  @media (min-width: 1440px) {
    margin-bottom: ${p => p.theme.space(12.5)};
    margin-top: ${p => p.theme.space(20)};
  }
`;
