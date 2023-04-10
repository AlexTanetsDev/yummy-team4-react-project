import styled from 'styled-components';
import Icon from '../../images/chevron-up.svg';

export const IngridientsContainer = styled.div`
  display: flex;
  // align-items: center;
  // justify-content: center;
  flex-direction: column;
  margin-bottom: 67px;
`;

export const Title = styled.h2`
  display: inline-block;
  font-family: 'Poppins';
  font-weight: 600;
  margin: 0;
  font-size: 24px;
  line-height: 24px;
  color: #3e4462;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }
`;

export const MultButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  width: 92px;
  height: 28px;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 18px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 32px;
  }
`;

export const MultButton = styled.button`
  border: none;
  background-color: transparent;
  color: #333333;
`;

export const MultButtonIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 22px;
  line-height: 1.29;

  color: #333333;
`;

export const IngridientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const IngridientFields = styled.div`
  display: flex;
  align-items: center;
`;

export const IngridientNameContainer = styled.div`
  position: relative;
`;

export const InputIngridientName = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 193px;
  height: 53px;
  padding-left: 16px;

  border: none;
  outline: none;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #000000;
  border-radius: 6px;

  // background: url(${Icon}) no-repeat 90% 50%;
  // background-size: 14px;
  // background-size: 14px;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 398px;
    height: 59px;

    font-size: 18px;
    line-height: 27px;
  }
`;

export const QuantityContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 14px;
  margin-right: 14px;

  height: 53px;
  width: 84px;

  background-color: rgba(217, 217, 217, 1);
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 109px;
    height: 59px;
  }
`;

export const ContainerNumberQuantity = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2;

  width: 32px;

  @media screen and (min-width: 768px) {
    width: 38px;
  }
`;

export const InputQuantity = styled.input`
  background-color: transparent;

  width: 100%;
  height: 53px;

  border: none;
  outline: none;
  padding-left: 4px;
  text-align: right;

  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #000000;

  &:invalid {
    border: 1px solid gba(231, 74, 59, 1);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const ContainerMeasure = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const InputMeasure = styled.select`
  padding-left: 36px;

  width: 100%;
  height: 53px;

  border: none;
  outline: none;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #000000;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(${Icon}) no-repeat 84% 50%;
  background-size: 14px;
  background-size: 14px;

  border-radius: 6px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;

    padding-left: 42px;
  }
`;

export const Label = styled.label`
  // position: absolute;
  // top: 18px;
  // right: 12px;
  color: transparent;

  // width: 18px;
  // height: 18px;

  // color: rgba(51, 51, 51, 1);
  // background-color: transparent;

  // margin: 0;
  // padding: 0;
  // font-size: 24px;
  // line-height: 24px;
  // cursor: pointer;
`;

export const Option = styled.option`
  color: rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const DeleteBtnContainer = styled.div``;

export const DeleteButton = styled.button`
  border: none;
  outline: none;
  color: rgba(51, 51, 51, 1);
  background-color: transparent;
  margin: 0;
  padding: 0;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
`;

export const Error = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  border: 2px solid #e74a3b;
  border-radius: 6px;
  pointer-events: none;
`;
