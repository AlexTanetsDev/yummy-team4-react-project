import styled from 'styled-components';

export const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 350px;
`;

export const Message = styled.p`
  display: inline-block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.xxl}px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.mainTitleText};

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xxxl}px;
    line-height: 44px;
  }
`;
