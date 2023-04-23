import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import {
  mainRegImgMob,
  mainRegImgTab,
  mainRegImg,
  bottomRegImgMob,
  bottomRegImgTab,
  bottomRegImg,
} from '../../images';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${p => p.theme.colors.lightBgColor};
`;

export const BottomBgImage = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -100%);
  width: 100vw;
  height: 56%;
  background-image: url(${bottomRegImgMob});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    height: 56%;
    background-image: url(${bottomRegImgTab});
  }

  @media (min-width: 1440px) {
    height: 43%;
    background-image: url(${bottomRegImg});
  }

  @media (min-width: 1440px) and (min-height: 771px) {
    height: 50%;
    background-image: url(${bottomRegImg});
  } ;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 1440px) {
    display: flex;
    left: 47%;
  }
`;

export const ImageReg = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 285px;
  height: 250px;
  z-index: 9;
  background-image: url(${mainRegImgMob});
  @media (min-width: 768px) {
    width: 409px;
    height: 359px;
    background-image: url(${mainRegImgTab});
  }

  @media (max-width: 1440px) and (max-height: 940px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 285px;
    height: 250px;
    z-index: 9;
    background-image: url(${mainRegImgMob});
  }

  @media (min-width: 1440px) {
    width: 532px;
    height: 468px;
    margin-right: 115px;
    background-image: url(${mainRegImg});
    background-size: contain;
  }
`;
export const ModalWrapper = styled.div``;

export const Modal = styled.div`
  height: 315px;
  margin-top: -30px;
  margin-bottom: 18px;
  padding-top: 32px;
  padding-bottom: 40px;
  padding-left: 28px;
  padding-right: 28px;
  background-color: ${p => p.theme.colors.thirdAccentColor};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  @media (min-width: 768px) {
    height: 419px;
    margin-top: -15px;
    padding-top: 44px;
    padding-bottom: 44px;
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 1440px) and (max-height: 940px) {
    height: 315px;
    margin-top: -30px;
    padding-top: 32px;
    padding-bottom: 40px;
    padding-left: 28px;
    padding-right: 28px;
    background-color: ${p => p.theme.colors.thirdAccentColor};
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
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

  @media (min-width: 768px) {
    margin-bottom: 24px;
    padding-left: 50px;
    width: 400px;
    height: 59px;
    font-size: ${p => p.theme.fontSizes.xl}px;
  }

  @media (max-width: 1440px) and (max-height: 940px) {
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

export const InputIcon = styled.img`
  display: block;
  width: 18px;
  height: 18px;
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

export const Link = styled(NavLink)`
  display: block;

  text-align: center;
  color: ${p => p.theme.colors.mainBgColor};
  opacity: 0.8;
  &:hover {
    opacity: 1;
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

export const StyledFiLock = styled(FiLock)`
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
