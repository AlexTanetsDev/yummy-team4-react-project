import styled from 'styled-components';

export const PreparationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
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
  height: 154px;
  resize: none;

  border: none;
  outline: none;
  padding: 10px 16px;

  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #000000;

  &:placeholder {
    opacity: 0.5;
  }

  &:invalid {
    border: 1px solid gba(231, 74, 59, 1);
  }

  @media screen and (min-width: 768px) {
    width: 505px;
    height: 244px;

    font-size: 18px;
    line-height: 27px;
  }
`;
