import styled from 'styled-components';

export const LabelSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin-left: 10px;
  @media screen and (min-width: 400px) {
    margin-left: 10px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 70px;
  }
`;

export const Span = styled.span`
  position: absolute;
  cursor: pointer;
  width: 61px;
  height: 27px;
  background-color: #b6b6b6;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
  background: #efefef;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);

  &::before {
    position: absolute;
    content: '';
    left: 2px;
    top: 3px;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    transition: transform 0.3s ease;
    background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
  }
`;
export const Input = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked + Span::before {
    transform: translateX(35px);
    background-color: #333;
  }

  &:checked + Span {
    background-color: #8baa36;
  }
`;
