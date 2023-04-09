import styled from 'styled-components';

export const StyledRecipeItem = styled.li`
  position: relative;
  display: flex;
  padding: ${p => p.theme.space(3.5)};
  height: auto;
  background-color: ${p => p.theme.colors.whiteText};
  border-radius: ${p => p.theme.space(2)};

  &:not(:last-of-type) {
    margin-bottom: ${p => p.theme.space(4.5)};
  }

  @media screen and (min-width: 768px) {
    padding: 28px 24px;
    width: ${p => p.theme.space(176)};

    &:not(:last-of-type) {
      margin-bottom: ${p => p.theme.space(10)};
    }
  }
  }
  @media screen and (min-width: 1440px) {
    padding: ${p => p.theme.space(10)};
    width: ${p => p.theme.space(310)};

    &:not(:last-of-type) {
      margin-bottom: ${p => p.theme.space(12.5)};
    }
  }
`;

export const ImageWrapper = styled.div`
  width: ${p => p.theme.space(31)};
  height: ${p => p.theme.space(31)};
  background-color: ${p => p.theme.colors.mainBgColor};
  border-radius: ${p => p.theme.space(2)};

  @media screen and (min-width: 768px) {
    width: ${p => p.theme.space(57)};
    height: ${p => p.theme.space(58)};
  }
  @media screen and (min-width: 1440px) {
    width: ${p => p.theme.space(79.5)};
    height: ${p => p.theme.space(81)};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${p => p.theme.space(2)};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${p => p.theme.space(3.5)};
  width: ${p => p.theme.space(43.25)};

  @media screen and (min-width: 768px) {
    margin-left: ${p => p.theme.space(6)};
    width: ${p => p.theme.space(74.5)};
  }
  @media screen and (min-width: 1440px) {
    margin-left: ${p => p.theme.space(10)};
    width: ${p => p.theme.space(169.75)};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space(3.5)};
  height: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.itemTitleColor};
  overflow: hidden;

  @media (min-width: 768px) {
    margin-bottom: ${p => p.theme.space(7)};
    margin-bottom: ${p => p.theme.space(7)};
    height: 26px;
    font-size: 24px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    margin-bottom: ${p => p.theme.space(12.5)};
  }
`;
