import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 16px;
  max-width: ${p => p.theme.breakPoints[0]};

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    max-width: ${p => p.theme.breakPoints[1]};
  }
  @media screen and (min-width: 1440px) {
    padding: 0 100px;
    max-width: ${p => p.theme.breakPoints[2]};
  }
`;
