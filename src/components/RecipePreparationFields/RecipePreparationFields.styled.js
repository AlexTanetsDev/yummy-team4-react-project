import styled from 'styled-components';

export const PreparationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const InputContainer = styled.div`
  position: relative;

  width: 100%;
  height: 154px;

  @media screen and (min-width: 768px) {
    width: 505px;
    height: 244px;
  }
`;

export const Title = styled.h2`
  display: inline-block;
  font-family: 'Poppins';
  font-weight: 600;
  margin: 0;
  font-size: 24px;
  line-height: 24px;
  color: #3e4462;
  margin-bottom: 24px;
`;

export const InputRecipe = styled.textarea`
  background-color: rgba(217, 217, 217, 1);
  border-radius: 6px;

  width: 100%;
  height: 100%;
  padding: 10px 16px;

  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #000000;

  border: none;
  outline: none;
  resize: none;

  &:placeholder {
    opacity: 0.5;
  }

  &:invalid {
    border: 2px solid #e74a3b;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Error = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  text-align: end;
  color: #e74a3b;
  border: 2px solid #e74a3b;
  border-radius: 6px;
  pointer-events: none;
`;

export const ErrorText = styled.div`
  position: absolute;
  top: 100%;
  right: 4px;

  color: #e74a3b;
  pointer-events: none;
`;
