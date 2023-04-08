import styled from 'styled-components';

export const IngridientsContainer = styled.div`
  display: flex;
  // align-items: center;
  // justify-content: center;
  flex-direction: column;
  margin-bottom: 67px;
`;

export const Title = styled.h2`
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
  /* or 129% */

  color: #333333;
`;

export const IngridientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

export const IngridientFields = styled.div`
  display: flex;
  align-items: center;
`;

export const InputIngridientName = styled.input`
  background-color: rgba(217, 217, 217, 1);
  border-radius: 6px;

  width: 193px;
  height: 53px;

  border: none;
  outline: none;
  padding-left: 14px;

  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #000000;

  &:invalid {
    border: 1px solid gba(231, 74, 59, 1);
  }
`;

export const QuantityContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 14px;
  margin-right: 14px;
`;

export const ContainerNumberQuantity = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
`;

export const InputQuantity = styled.input`
  background-color: transparent;

  width: 32px;
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
`;

export const InputMeasure = styled.select`
  background-color: rgba(217, 217, 217, 1);
  border-radius: 6px;

  width: 84px;
  height: 53px;

  border: none;
  outline: none;
  padding-left: 34px;
  // padding-right: 16px;

  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #000000;

  &:invalid {
    border: 1px solid gba(231, 74, 59, 1);
  }
`;

export const OptionMeasure = styled.option`
  color: rgba(0, 0, 0, 0.5);
  background-color: #ffffff; ;
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
