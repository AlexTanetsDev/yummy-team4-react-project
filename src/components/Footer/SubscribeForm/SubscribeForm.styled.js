import styled from 'styled-components';
import { Form, Field } from 'formik';
import { ReactComponent as Mail } from '../../../images/icons/mail-16.svg';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 44px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 38px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 0;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled(Field)`
  width: 204px;
  height: 38px;
  padding: 11.5px 40px 11.5px 42px;
  background-color: transparent;
  border: ${p => p.border};
  border-radius: ${p => p.theme.radii.btnStandart};
  outline: none;
  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.searchSelect};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.subscribeInputText};
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 259px;
    height: 50px;
    padding: 15px 40px 15px 51px;
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    width: 338px;
    height: 59px;
    padding: 17.5px 40px 17.5px 51px;
  }
`;

export const MailIconStyled = styled(Mail)`
  position: absolute;
  top: 13px;
  left: 14px;
  width: 16px;
  height: 12px;
  stroke: ${p => p.stroke};
  @media screen and (min-width: 768px) {
    top: 17px;
    left: 15px;
    width: 20px;
    height: 16px;
  }
  @media screen and (min-width: 1440px) {
    top: 21.5px;
    left: 15.5px;
  }
`;

export const ErrMsg = styled.p`
  position: absolute;
  top: 37px;
  left: 6px;
  font-size: 10px;
  color: #e74a3b;
  @media screen and (min-width: 768px) {
    top: 51px;
  }
  @media screen and (min-width: 1440px) {
    top: 59px;
  }
`;

export const SubscribeBtn = styled.button`
  padding: 11px 71px;
  border: none;
  background-color: ${p => p.theme.colors.footerBtnBg};
  border-radius: ${p => p.theme.radii.btnStandart};
  width: 204px;
  height: 38px;
  font-size: 14px;
  line-height: 1.14;
  color: ${p => p.theme.colors.btnTextLight};
  transition: ${p => p.theme.transitions.main};
  :hover:not([disabled]),
  :focus:not([disabled]) {
    color: ${p => p.theme.colors.btnHoverText};
  }
  &[disabled] {
    opacity: 0.7;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
    padding: 16px 50px;
    width: 171px;
    height: 50px;
  }
  @media screen and (min-width: 1440px) {
    padding: 21px 138px;
    width: 339px;
    height: 60px;
  }
`;

export const SubscribeWrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const SubscribeTitle = styled.h3`
  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
    font-weight: ${p => p.theme.fontWeights[3]};
    font-size: 18px;
    line-height: ${p => p.theme.lineHeights.searchSelect};
    color: ${p => p.theme.colors.btnTextLight};
  }
`;

export const SubscribeText = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.extraContent};
    letter-spacing: ${p => p.theme.letterSpacings.content};
    color: ${p => p.theme.colors.btnTextLight};
  }
`;