import styled from 'styled-components';

export const FormContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  max-width: 320px;
  padding: 16px;
  margin: 0 auto;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  margin-top: 4px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 120px;
  height: 28px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: rgb(230, 230, 230);

  border-radius: 8px;
  cursor: pointer;

  box-shadow: 0px 2px 3px 0px rgba(62, 118, 120, 1);
  transition: transform 100ms ease-in-out;

  :hover {
    box-shadow: 1px 3px 3px 0px rgba(150, 150, 150, 1);
    transform: translate(-1px, -1px);
  }
`;
