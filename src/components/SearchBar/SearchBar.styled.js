import styled from 'styled-components';
import { SearchBtnGreen } from '../Button/Button.styled';

export const SearchBarForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  margin-bottom: 24px;
  position: relative;
  width: 295px;
  height: 53px;

  @media (min-width: 768px) {
    width: 362px;
    height: 57px;
  }
  @media (min-width: 1440px) {
    width: 510px;
    height: 70px;
  }
`;

export const SearchButton = styled(SearchBtnGreen)`
  position: absolute;
  right: 0;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 32px;
  padding: 20px 38px;
  font-family: 'Poppins';
  font-size: 12px;
  color: ${p => p.theme.colors.itemTextColor};
  line-height: 21px;
  border: ${p => p.theme.border.grayBorder};
  border-radius: 24px 44px;
  background-color: ${p => p.theme.colors.mainBgColor};
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: ${p => p.theme.border.greenBtnBorder};
    outline: none;
  }

  @media (min-width: 768px) {
    font-weight: 400;
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const SearchTypeSelector = styled.div`
  margin-bottom: 42px;
  display: flex;
  align-items: center;
`;

export const SelectLabel = styled.label`
  margin-right: 15px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${p => p.theme.colors.mainTitleText};
  letter-spacing: -0.24px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    margin-right: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
    margin-right: 18px;
  }
`;
