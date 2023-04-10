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
`;
export const StyledLinkBurger = styled(NavLink)`
width: 114px;
height: 18px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 18px;
letter-spacing: -0.02em;
color: #22252A;

`

export const StyledHeader = styled.header`
position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
/* background-color:#EBF3D4; */
background-color:transparent;
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
gap:32px;
margin-top: 185px;
  margin-right:auto; 
  margin-left:auto; 
`

export const StyledBurger = styled.button`
@media screen and (max-width: 767px) {
display: flex;
/* margin-left: auto; */
align-items:center;
border-style: none;
background-color: transparent;
   width: 30px;
   height: 30px;};
   @media screen and (min-width: 768px) {
display: none
   }
`

export const StyledThemeBtn = styled.button`
     /* margin-top:auto; */
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
justify-content:space-between;
position: fixed;
width: 100vw;
height: 100vh;
top: 44px;
background-color:#EBF3D4;
 };
  display:none;
`
export const ThemeModalDiv = styled.div`
   /* display:flex;
   margin-top:auto; */
   /* width: 60px;
   height: 30px; */
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
     