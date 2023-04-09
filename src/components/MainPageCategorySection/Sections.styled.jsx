import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${p => p.theme.space(6)};

  @media (min-width: 768px) {
    padding-top: ${p => p.theme.space(18)};
  }
  @media (min-width: 1440px) {
    padding-top: ${p => p.theme.space(25)};
  }
`;

export const SectionTitle = styled.title`
  display: inline-block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.xxxl}px;
  line-height: 28px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.mainTitleText};
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xxxxl}px;
    line-height: 44px;
    margin-bottom: 100px;
  }
`;
