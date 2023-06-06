import styled from 'styled-components';

export const DropdownButton = styled.button`
  position: relative;
  display: block;
  width: 146px;
  height: 41px;
  padding: 10px;
  background-color: ${p => p.theme.colors.addRecepiesTexteriaBgr};
  border: ${p => p.theme.border.addRecepiesTextarea};
  outline: none;
  border-radius: 4px;
  color: ${p => p.theme.colors.addRecepiesTexteriaText};
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  @media (min-width: 768px) {
    width: 176px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: 1440px) {
    width: 198px;
  }
`;

export const DropdownMenu = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  z-index: 999;
  width: 146px;
  height: 117px;
  padding: 0;
  background-color: ${p => p.theme.colors.addRecepiesTexteriaBgr};
  border: ${p => p.theme.border.addRecepiesTextarea};
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  @media (min-width: 768px) {
    width: 176px;
    height: 125px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: 1440px) {
    width: 198px;
  }
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 10px;
  color: ${p => p.theme.colors.addRecepiesTexteriaText};
  text-decoration: none;

  &:hover {
    color: #f5f5f5;
    background: ${p => p.theme.colors.addRecepiesTexteriaText};
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;

export const ImageTick = styled.img`
  width: 12px;
  height: 7px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 19px;

  @media (min-width: 768px) {
    width: 14px;
    height: 9px;
  }
  @media (min-width: 1440px) {
  }
`;
