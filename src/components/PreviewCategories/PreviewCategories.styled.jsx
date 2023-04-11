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
`;
