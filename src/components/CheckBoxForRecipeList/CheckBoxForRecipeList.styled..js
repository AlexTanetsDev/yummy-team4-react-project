import styled from 'styled-components';

export const CheckBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;

  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
    border: 2px solid rgba(126, 126, 126, 0.5);
  }
`;

export const Pick = styled.img`
  width: 10px;
  height: 10px;

  @media (min-width: 768px) {
    width: 17px;
    height: 17px;
  }
`;
