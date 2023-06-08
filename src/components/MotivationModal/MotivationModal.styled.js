import styled from 'styled-components';
import MessageBG from '../../images/MotivationModal/MessageBG.png';
import BG from '../../images/salad-salmon.jpeg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 375px) {
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;

    border-radius: 30px;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media (min-width: 1440px) {
    width: 500px;
    height: 500px;
  }
`;

export const MessageBox = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 299px;
  height: 269px;

  padding-top: 40px;
  padding-right: 26px;
  padding-left: 26px;

  background-image: url(${MessageBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 375px) {
    bottom: 18px;
    transform: translateX(-50%);
    width: 200px;
    height: 180px;

    padding-top: 22px;
    padding-right: 18px;
    padding-left: 18px;
  }

  @media (min-width: 768px) {
    bottom: 24px;
    width: 268px;
    height: 242px;

    padding-top: 32px;
    padding-right: 24px;
    padding-left: 24px;
  }

  @media (min-width: 1440px) {
  }
`;

export const MotivationMessage = styled.div`
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.xxxl}px;
  font-weight: 600;
  color: ${p => p.theme.colors.mainBgColor};
  border-color: transparent;

  @media (min-width: 375px) {
    font-size: ${p => p.theme.fontSizes.xxl}px;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxxl}px;
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xxxl}px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 48px;

  border-radius: 50%;
  border: none;
  background-color: ${p => p.theme.colors.firstAccentColor};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 375px) {
    bottom: 12px;
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    bottom: 14px;
    height: 48px;
    width: 48px;
  }

  @media (min-width: 1440px) {
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondAccentColor};
    outline: none;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 2px;
    background-color: white;
    border-radius: 2px;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const Colored = styled.span`
  color: ${p => p.theme.colors.firstAccentColor};
`;
