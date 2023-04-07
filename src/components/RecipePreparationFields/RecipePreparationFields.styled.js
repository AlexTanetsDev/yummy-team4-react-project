import styled from 'styled-components';

export const PreparationContainer = styled.div`
  display: flex;
  // align-items: center;
//   justify-content: center;
  flex-direction: column;
  margin-bottom: 18px;
`;

export const Title = styled.h2`
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
`;
