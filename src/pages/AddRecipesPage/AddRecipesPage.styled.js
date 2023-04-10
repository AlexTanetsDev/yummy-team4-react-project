import styled from 'styled-components';

export const ContentContainer = styled.div`
  @media screen and (min-width: 768px) {
    // margin-bottom: ${p => p.theme.space(25)};
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const RightBar = styled.div`
`;
