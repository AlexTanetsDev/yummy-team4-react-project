import styled from 'styled-components';

export const DropdownButton = styled.button`

  display: block;
  width: 146px;
  height: 40px; 
  padding: 10px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  @media (min-width: 768px) {
  width: 176px;
  height: 41px; 
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  }
  @media (min-width: 1440px) {
    
  }
`;



export const DropdownMenu = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  z-index: 999;
  width: 146px;
  height:62px;
  margin-top: 5px;
  padding: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  @media (min-width: 768px) {
  width: 176px;
  /* height: 41px;  */
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  }
  @media (min-width: 1440px) {
    width: 198px;
    height: 78px;
  }
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;

  &:hover {
    background-color: #f5f5f5;
  }
  @media (min-width: 768px) {
    
  }
  @media (min-width: 1440px) {
    
  }
`;