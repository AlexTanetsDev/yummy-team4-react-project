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
  border-radius: 24px 44px;
  color: ${p => p.theme.colors.firstAccentColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.m}px;
  margin-right: 10px;
  padding: 3px 8px;
  border: ${p => p.theme.border.greenBtnBorder};
  @media (min-width: 768px) {
    margin-right: 15px;
  }

  @media (min-width: 1440px) {
    margin-right: 20px;
  }
`;
