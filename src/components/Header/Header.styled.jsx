import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
width: 78px;
height: 23px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
color: #23262A;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;

/* Inside auto layout */

/* flex: none;
order: 0;
flex-grow: 0; */
`;
export const StyledHeader = styled.header`
    display:flex;
    align-items:center;
background-color:#EBF3D4;
`;
export const StyledNav = styled.nav`
display:none;

 @media screen and (min-width: 768px) {
    margin-right: 30px;
    margin-left: 30px;
    display:flex;}
`

export const StyledNavBurger = styled.nav`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

  margin-right:auto; 
  margin-left:auto; 
`

export const StyledBurger = styled.button`
@media screen and (max-width: 767px) {
display: flex;
border-style: none;
background-color: transparent;
/* justify-content:end;
   margin-left:auto;  */
   width: 30px;
   height: 30px;};
   @media screen and (min-width: 768px) {
display: none
   }
`

export const StyledThemeBtn = styled.button`
     margin-top:auto;
   margin-bottom:50px;
   width: 60px;
   height: 30px;
   border-style: none;
   background-color: transparent;

`
export const MobileMenu = styled.div`

   @media screen and (max-width: 767px) {
display:flex;
flex-direction:column;
position: fixed;
width: 100vw;
height: 100vh;
top: 44px;
background-color:#EBF3D4;
 };
  display:none;
`
export const ThemeModalDiv = styled.div`
   display:inline;
   margin-top:auto;
   width: 60px;
   height: 30px;
  `

  export const Avatar = styled(Link)`
   margin-left: auto;
  `
export const UserName = styled.p`
   @media screen and (max-width: 768px) {}
   margin-right: 24px;
   margin-left: 14px;
  `

export const StyledThemeHeaderDiv = styled.div`
 @media screen and (max-width: 768px) {
display: none
  }
 margin-left:auto;
 display:block;
 width: 60px;
   height: 30px;
      `
export const StyledThemeHeader = styled.button`
  border-style: none;
 background-color: transparent;
     `
     