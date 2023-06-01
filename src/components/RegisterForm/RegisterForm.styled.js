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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 335px;
  margin-top: -30px;
  margin-bottom: 18px;
  padding-top: 32px;
  padding-bottom: 40px;
  background-color: ${p => p.theme.colors.thirdAccentColor};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media (max-width: 400px) {
    width: 280px;
  }
  @media (min-width: 768px) {
    height: 481px;
    width: 500px;
    margin-top: -15px;
    padding-top: 44px;
    padding-bottom: 44px;
  }

  @media (min-width: 400px) and (max-width: 1440px) and (max-height: 940px) {
    height: 350px;
    width: 335px;
    margin-top: -30px;
    padding-top: 32px;
    padding-bottom: 40px;
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

export const Link = styled(NavLink)`
  display: block;

  text-align: center;
  color: ${p => p.theme.colors.mainBgColor};
  opacity: 0.8;
  &:hover {
    opacity: 1;
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
