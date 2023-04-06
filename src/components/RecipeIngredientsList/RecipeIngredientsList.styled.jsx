import styled from 'styled-components';

export const IngredientsSection = styled.main`
  padding: 32px 16px 50px;
`;

export const TableTitlesBox = styled.div`
display: flex
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
