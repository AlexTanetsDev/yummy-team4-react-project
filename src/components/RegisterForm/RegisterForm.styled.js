import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
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

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    top: 2%;
    width: 279px;
    background-color: ${p => p.theme.colors.thirdAccentColor};
  }
`;

export const BottomBgImage = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -100%);
  width: 100vw;
  height: 58%;
  background-image: url(${bottomRegImgMob});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    height: 59%;
    background-image: url(${bottomRegImgTab});
  }

  @media (min-width: 1440px) {
    height: 43%;
    background-image: url(${bottomRegImg});
  }

  @media (min-width: 1440px) and (min-height: 771px) {
    height: 50%;
    background-image: url(${bottomRegImg});
  }
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
  position: relative;
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

export const ModalTitle = styled.h1`
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: 600;
  color: ${p => p.theme.colors.footerText};
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
  color: ${p => p.theme.colors.footerText};
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
    color: ${p => p.theme.colors.footerText};
    background-color: ${p => p.theme.colors.thirdAccentColor};
    border: solid 1px ${p => p.theme.colors.mainBgColor};
    border-radius: 6px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

export const GoogleLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 279px;
  height: 45px;
  background-color: ${p => p.theme.colors.firstAccentColor};
  color: ${p => p.theme.colors.footerText};
  border-radius: 6px;
  border-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 400px) {
    width: 250px;
  }
  @media (min-width: 768px) {
    margin-top: 15px;
    width: 400px;
    height: 59px;
  }
  @media (min-width: 400px) and (max-width: 1440px) and (max-height: 940px) {
    margin-top: 10px;
    width: 279px;
    height: 45px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.darkBgColor};
    color: ${p => p.theme.colors.firstAccentColor};
    outline: none;
  }
`;

export const LinkText = styled.span`
  display: block;
`;

export const Link = styled(NavLink)`
  display: block;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l}px;
  color: ${p => p.theme.colors.footerText};
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 768px) {
    margin-bottom: 50px;
    font-size: ${p => p.theme.fontSizes.xl}px;
  }
`;

export const StyledAiOutlineUser = styled(AiOutlineUser)`
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

export const StyledFiMail = styled(FiMail)`
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
