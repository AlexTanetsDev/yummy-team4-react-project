import styled from 'styled-components';
export const PaginationWrapper = styled.div`
  margin-top: 40px;
  margin-left: 200px;
  margin-right: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${p => p.theme.border.mainBgColor};
  box-shadow: 0px 4px 4px 0px #a9a9a9;
  border-radius: 26px;
  padding: 5px;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;
