import styled from 'styled-components';
import Icon from '../../images/chevron-up.svg';

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 67px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const InputFieldsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px;

  @media screen and (min-width: 768px) {
    height: 268px;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
  margin-bottom: 8px;
`;

export const InputTitle = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding-left: 160px;
  text-align: right;
  padding-bottom: 18px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 12px;
  line-height: 12px;
  color: #000000;
  outline: none;
  background-color: rgb(250, 250, 250);

  &:invalid {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const LabelTitle = styled.label`
  position: absolute;
  top: 0;
  left: 0;

  font-size: 14px;
  line-height: 21px;
  color: #000000;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const InputDescription = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding-left: 180px;
  text-align: right;
  padding-bottom: 18px;

  font-size: 12px;
  line-height: 14px;
  color: #000000;
  outline: none;
  background-color: rgb(250, 250, 250);
  resize: none;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const FieldSelectContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  padding-bottom: 10px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
`;

export const LabelCategory = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const InputCategory = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: url(${Icon}) no-repeat 94% 50%;
  background-size: 14px;

  width: 136px;
  padding-right: 26px;
  padding-left: 18px;
  font-size: 12px;
  line-height: 12px;
  color: #000000;

  outline: none;
  border: none;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const OptionCategory = styled.option`
  color: rgba(0, 0, 0, 0.5);
  background: #ffffff;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }

  &:checked {
    color: #8baa36;
  }
`;

export const FileInputContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 32px;
  }
`;

export const RreviewImageContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 244px;
  height: 238px;

  background-color: #8baa36;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 375px) {
    width: 279px;
    height: 268px;
  }
`;

export const Image = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const InputIconContainer = styled.div`
  position: absolute;

  width: 64px;
  height: 64px;
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
