import styled from 'styled-components';
export const PaginationWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

export const PaginationBtn = styled.button`
  color: ${p => p.theme.colors.firstAccentColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.s}px;
  margin: 10px;
  padding: 3px 8px;
  border: ${p => p.theme.border.greenBtnBorder};
  border-radius: 3px;
`;
