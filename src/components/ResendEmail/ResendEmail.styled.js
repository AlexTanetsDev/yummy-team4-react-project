import styled from 'styled-components';
import { startPageBgMob, startPageBgTab, startPageBg } from '../../images';
import { FiMail } from 'react-icons/fi';

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
  display: block;
  margin-bottom: 34px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xxxl}px;
  color: ${p => p.theme.colors.mainBgColor};
  @media (min-width: 768px) {
    margin-bottom: 64px;
    font-size: ${p => p.theme.fontSizes.xxxxl}px;
  }
  @media (min-width: 400px) and (max-width: 1440px) and (max-height: 940px) {
    margin-bottom: 34px;
    font-size: ${p => p.theme.fontSizes.xxxl}px;
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 28px;
  background-color: ${p => p.theme.colors.thirdAccentColor};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media (min-width: 768px) {
    padding: 44px 50px;
  }

  @media (min-width: 400px) and (max-width: 1440px) and (max-height: 940px) {
    padding: 32px 28px;
    background-color: ${p => p.theme.colors.thirdAccentColor};
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`;

export const ModalTitle = styled.h1`
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 600;
  color: ${p => p.theme.colors.mainBgColor};
  @media (min-width: 768px) {
    margin-bottom: 50px;
    font-size: ${p => p.theme.fontSizes.xxxl}px;
    @media (max-width: 1440px) and (max-height: 940px) {
      margin-bottom: 40px;
      font-size: 24px;
      font-weight: 600;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputField = styled.input`
  display: block;
  margin-bottom: 20px;
  width: 279px;
  height: 45px;
  padding-left: 40px;
  padding-right: 30px;
  font-size: ${p => p.theme.fontSizes.l}px;
  color: ${p => p.theme.colors.mainBgColor};
  background-color: ${p => p.theme.colors.thirdAccentColor};
  border-color: ${props => props.brdcolor};
  border-radius: 6px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 400px) {
    width: 250px;
  }

  @media (min-width: 768px) {
    margin-bottom: 24px;
    padding-left: 50px;
    padding-right: 40px;
    width: 400px;
    height: 59px;
    font-size: ${p => p.theme.fontSizes.xl}px;
  }

  @media (min-width: 400px) and (max-width: 1440px) and (max-height: 940px) {
    margin-bottom: 20px;
    width: 279px;
    height: 45px;
    padding-left: 40px;
    font-size: ${p => p.theme.fontSizes.l}px;
    color: ${p => p.theme.colors.mainBgColor};
    background-color: ${p => p.theme.colors.thirdAccentColor};
    border: solid 1px ${p => p.theme.colors.mainBgColor};
    border-radius: 6px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  margin-left: 14px;
  opacity: 0.8;
  color: #fff;
  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const StateInputIcon = styled.img`
  position: absolute;
  top: 35%;
  left: 94%;
  transform: translate(-50%);
  width: 16px;
  height: 16px;
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1440px) and (max-height: 940px) {
    width: 16px;
    height: 16px;
  }
`;

export const StyledFiMail = styled(FiMail)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  opacity: 0.8;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
  &:hover {
    opacity: 1;
  }
`;
