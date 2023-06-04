import styled from 'styled-components';
import { FiLock } from 'react-icons/fi';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

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

export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

export const ModalWrapper = styled.div``;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -30px;
  margin-bottom: 18px;
  padding: 32px 28px;
  background-color: ${p => p.theme.colors.thirdAccentColor};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media (min-width: 768px) {
    margin-top: -15px;
    padding: 44px 50px;
  }

  @media (min-width: 400px) and (max-width: 1440px) and (max-height: 940px) {
    margin-top: -30px;
    padding: 32px 28px;
    background-color: ${p => p.theme.colors.thirdAccentColor};
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: ${p => p.theme.colors.mainBgColor};
  @media (min-width: 768px) {
    margin-bottom: 32px;
    font-size: ${p => p.theme.fontSizes.xxxl}px;
    @media (max-width: 1440px) and (max-height: 940px) {
      margin-bottom: 18px;
      font-weight: 600;
      font-size: 24px;
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
  padding-right: 50px;
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
    margin-bottom: 30px;
    padding-left: 50px;
    padding-right: 70px;
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

export const StyledFiLock = styled(FiLock)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  margin-left: 14px;
  opacity: 0.8;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const IconsWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 82%;
  transform: translateY(-50%);
  width: 40px;
  @media (min-width: 768px) {
    left: 80%;
    width: 45px;
  }
  @media (min-width: 1440px) {
    left: 85%;
    width: 45px;
  }
`;

export const StateInputIcon = styled.img`
  display: block;
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

export const EyeIcon = styled.span`
  display: block;
  padding: 0;
  background-color: transparent;
  border: none;
  @media (min-width: 768px) {
    left: 83%;
  }
`;

export const StyledAiFillEyeInvisible = styled(AiFillEyeInvisible)`
  display: block;
  width: 16px;
  height: 16px;
  color: #fff;
  opacity: 0.8;
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const StyledAiFillEye = styled(AiFillEye)`
  display: block;
  width: 16px;
  height: 16px;
  color: #fff;
  opacity: 0.8;
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const WarningAndSuccessMessage = styled.p`
  position: absolute;
  top: 45px;
  font-size: 10px;
  line-height: 21px;
  color: ${props => props.color};

  @media (min-width: 768px) {
    top: 60px;
    font-size: 14px;
  }

  @media (max-width: 1440px) and (max-height: 940px) {
    top: 45px;
    font-size: 10px;
  }
`;
