import styled from 'styled-components';
import { userIcon } from '../../images';
import { AiOutlineUser } from 'react-icons/ai';

export const UserEditModal = styled.div`
  position: absolute;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  width: 330px;
  height: 327px;
  padding: 32px 24px;
  border-radius: 30px;
  background-color: ${p => p.theme.colors.mainBgColor};
  border: solid 1px ${p => p.theme.colors.firstAccentColor};

  @media (max-width: 400px) {
    width: 300px;
  }
  @media (min-width: 768px) {
    width: 480px;
    height: 402px;
    padding: 50px 40px;
  }
  @media (min-width: 1440px) {
    width: 500px;
    height: 425px;
    padding: 60px 50px;
  }
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  display: block;
  padding: 0;
  background-color: transparent;
  border: none;
  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const CloseModalIcon = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 54px;
  border-radius: 50%;
  background-color: #d9d9d9;
  background-image: url(${userIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  @media (min-width: 768px) {
    width: 103px;
    height: 103px;
    margin-bottom: 50px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 52px;
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;

export const AvatarField = styled.input`
  display: block;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;

export const EditAvatarBtn = styled.div`
  position: absolute;
  bottom: -7px;
  right: 5px;
  display: block;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  @media (min-width: 768px) {
    bottom: 0;
    right: 2px;
  }
`;

export const EditAvatarIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputField = styled.input`
  display: block;
  margin-bottom: 24px;
  width: 282px;
  height: 48px;
  padding-left: 40px;
  padding-right: 35px;
  font-size: ${p => p.theme.fontSizes.l}px;
  color: ${p => p.theme.colors.itemTextColor};
  background-color: ${p => p.theme.colors.mainBgColor};
  border-color: ${p => p.theme.colors.itemTextColor};
  border-radius: 6px;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
  @media (min-width: 768px) {
    margin-bottom: 30px;
    padding-left: 50px;
    padding-right: 50px;
    width: 400px;
    height: 59px;
    font-size: ${p => p.theme.fontSizes.xl}px;
  }
  @media (min-width: 768px) {
    margin-bottom: 32px;
    font-size: ${p => p.theme.fontSizes.xxl}px;
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 14px;
  opacity: 0.8;
  color: #fff;
  width: 24px;
  height: 24px;
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
  color: ${p => p.theme.colors.itemTextColor};
  opacity: 0.8;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const EditIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 95%;
  transform: translate(-100%, -50%);
  display: block;
  width: 14px;
  height: 14px;
  opacity: 0.8;
  @media (min-width: 768px) {
    width: 19px;
    height: 19px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const FileInputContainer = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 54px;
  border-radius: 50%;
  background-color: #d9d9d9;
  background-image: url(${userIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 52px;
  }
`;

export const RreviewImageContainer = styled.div`
  display: block;
`;

export const Image = styled.img`
  display: block;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;

export const InputIconContainer = styled.div`
  display: block;
  /* width: 88px;
  height: 88px;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 103px;
    height: 103px;
  } */
`;

export const FileLabel = styled.label`
  position: absolute;
  inset: 0;
`;

export const InputFile = styled.input`
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  z-index: -10;
`;

export const Error = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background-color: #e74a3b;
`;

export const ErrorPhoto = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  border: 2px solid #e74a3b;
  border-radius: 8px;
  pointer-events: none;
`;
