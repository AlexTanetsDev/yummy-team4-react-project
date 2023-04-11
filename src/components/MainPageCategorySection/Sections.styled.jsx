import styled from 'styled-components';

export const Section = styled.section`
  margin-top: ${p => p.theme.space(6)};

  @media (min-width: 768px) {
    margin-top: ${p => p.theme.space(12.5)};
  }
  @media (min-width: 1440px) {
    margin-top: ${p => p.theme.space(25)};
  }
`;

export const SectionTitle = styled.title`
  display: inline-block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.xxxl}px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.mainTitleText};
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: ${p => p.theme.space(10)};
    font-size: ${p => p.theme.fontSizes.xxxxl}px;
    line-height: 1;
  }

  @media (min-width: 1440px) {
    margin-bottom: ${p => p.theme.space(12.5)};
  }
`;
