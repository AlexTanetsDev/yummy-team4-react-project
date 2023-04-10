import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryLists = styled.ul`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding-left: 10px;
  padding-right: 10px;
  gap: 28px;
  overflow-x: auto;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (min-width: 768px) {
    gap: 55px;
  }

  @media (min-width: 1440px) {
    gap: 51px;
  }
`;

export const NavLinks = styled(NavLink)`
  display: block;
  font-family: 'Poppins';
  text-decoration: none;
  font-style: normal;
  font-size: 18px;
  line-height: 18px;
  color: #bdbdbd;
  position: relative;
  padding: 10px 0px 32px;
  transition: all 0.25s linear;
  &.active {
    color: #8baa36;
  }
  &:active {
    background-color: #d3cbcb;
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border: 2px solid #8baa36;
    border-radius: 2px;
  }
  &:hover,
  &:focus {
    color: #8baa36;
  }
  @media (min-width: 768px) {
    padding: 10px 0px 27px;
    gap: 55px;
  }

  @media (min-width: 1440px) {
    gap: 51px;
  }
`;

export const NavCategory = styled.nav`
  display: block;
`;
