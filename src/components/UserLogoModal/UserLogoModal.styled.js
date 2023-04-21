import styled from 'styled-components';

export const UserModal = styled.div`
  position: absolute;
  top: 72px;
  right: 15%;
  width: 161px;
  height: 130px;
  padding-top: 18px;
  border: solid 1px ${p => p.theme.colors.firstAccentColor};
  border-radius: 10px;
  background-color: ${p => p.theme.colors.mainBgColor};
  @media (min-width: 768px) {
    width: 177px;
    height: 134px;
    border: none;
  }
`;

export const WrapContent = styled.div`
  position: relative;
`;

export const EditProfile = styled.button`
  position: relative;
  display: block;
  width: 125px;
  height: 23px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 28px;
  padding: 0;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  background-color: ${p => p.theme.colors.mainBgColor};
  border-color: transparent;
  outline: none;
  @media (min-width: 768px) {
    width: 141px;
    margin-bottom: 32px;
  }
`;

export const EditIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-100%, -50%);
  display: block;
  width: 14px;
  height: 14px;
`;

export const LogOut = styled.button`
  position: relative;
  display: block;
  width: 125px;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 24px;
  color: ${p => p.theme.colors.mainBgColor};
  font-family: 'Poppins';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: 21px;
  text-align: left;
  border: ${p => p.theme.border.greenBtnBorder};
  border-radius: 24px 44px;
  background-color: ${p => p.theme.colors.firstAccentColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    width: 141px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondAccentColor};
    border: ${p => p.theme.border.blackBtnBorder};
    outline: none;
  }
`;

export const LogoutIcon = styled.img`
  position: absolute;
  display: block;
  top: 50%;
  left: 80%;
  transform: translate(-100%, -50%);
  width: 18px;
  height: 18px;
`;

export const ModalConfirm = styled.div`
  position: absolute;
  top: 72px;
  left: -135%;
  width: 332px;
  height: 179px;
  padding: 44px 24px;
  text-align: center;
  border-radius: 30px;
  background-color: ${p => p.theme.colors.mainBgColor};
  border: solid 1px ${p => p.theme.colors.firstAccentColor};
  @media (min-width: 768px) {
    left: -300%;
    width: 482px;
    height: 215px;
    padding: 50px 40px;
  }
  @media (min-width: 1440px) {
    left: -300%;
    width: 502px;
    padding: 50px 50px;
  }
`;

export const LogoutTitle = styled.p`
  margin-bottom: 32px;
  font-size: ${p => p.theme.fontSizes.l}px;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxl}px;
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
