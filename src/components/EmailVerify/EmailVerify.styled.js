import styled from 'styled-components';
import { startPageBgMob, startPageBgTab, startPageBg } from '../../images';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;

  background-repeat: no-repeat;
  background-size: cover;

  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${startPageBgMob});
  @media (min-width: 768px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${startPageBgTab});
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${startPageBg});
  }
`;


export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  margin-bottom: 34px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xxxl}px;
  color: ${p => p.theme.colors.mainBgColor};
  @media (min-width: 768px) {
    margin-bottom: 64px;
    font-size: ${p => p.theme.fontSizes.xxxxl}px;
  }
`;

export const ErrorText = styled.h1`
  margin-bottom: 34px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xxxl}px;
  color: red;
  @media (min-width: 768px) {
    margin-bottom: 64px;
    font-size: ${p => p.theme.fontSizes.xxxxl}px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 12px;
  @media (min-width: 768px) {
    gap: 18px;
  }
`;
