import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: ${p => p.theme.breakPoints[0]};

  @media screen and (min-width: 768px) {
    max-width: ${p => p.theme.breakPoints[1]};
  }
  @media screen and (min-width: 1440px) {
    max-width: ${p => p.theme.breakPoints[2]};
  }
`;
