import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    justify-content: start;
    gap: 12px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.p`
  font-weight: ${p => p.theme.fontWeights[3]};
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: 0.015em;
  color: ${p => p.theme.colors.titleFooter};
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

// export const List = styled.ul`
//   @media screen and (min-width: 768px) {
//     list-style-type: disc;
//     padding: 0;
//     margin: 0;
//     margin-top: 24px;
//     padding-left: 30px;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 18px;
//     letter-spacing: -0.02em;
//     color: ${p => p.theme.colors.mainWhite};
//     text-align: left;

//     @media screen and (min-width: 1440px) {
//       margin-right: 159px;
//       margin-top: 40px;
//       font-size: 18px;
//       line-height: 24px;
//     }
//   }
// `;

// export const Item = styled.li`
//   @media screen and (min-width: 768px) {
//     :not(:last-child) {
//       margin-bottom: 10px;
//     }
//   }

//   @media screen and (min-width: 1440px) {
//     :not(:last-child) {
//       margin-bottom: 12px;
//     }
//   }
// `;
// export const ArticleContainer = styled.div`
//   @media screen and (min-width: 1440px) {
//     width: 418px;
//   }
// `;