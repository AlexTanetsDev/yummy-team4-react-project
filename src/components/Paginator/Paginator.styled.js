import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  border: ${p => p.theme.border.mainBgColor};
  box-shadow: 0px 4px 4px 0px #a9a9a9;
  border-radius: 26px;
  padding: 5px;
`;
