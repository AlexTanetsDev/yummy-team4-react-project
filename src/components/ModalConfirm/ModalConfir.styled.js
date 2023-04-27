import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  width: 332px;
  height: 179px;
  padding-top: 44px;
  padding-bottom: 44px;
  text-align: center;
  border-radius: 30px;
  background-color: ${p => p.theme.colors.mainBgColor};
  border: solid 1px ${p => p.theme.colors.firstAccentColor};
  @media (max-width: 400px) {
    width: 310px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media (min-width: 768px) {
    width: 482px;
    height: 215px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media (min-width: 1440px) {
    width: 502px;
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
export const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
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

export const LogoutTitle = styled.p`
  margin-bottom: 32px;
  font-size: ${p => p.theme.fontSizes.l}px;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxl}px;
  }
`;
