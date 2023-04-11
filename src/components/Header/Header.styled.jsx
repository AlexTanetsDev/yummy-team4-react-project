import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
position:absolute;
 display:flex;
  align-items:center;
 width: 100%;
 height: 70px;
background-color:#EBF3D4;
`

export const Headerblock = styled.div`
 position: absolute;
  top: ${p => p.theme.space(4.5)};
  right: ${p => p.theme.space(4)};

  @media (min-width: 768px) {
    top: ${p => p.theme.space(4.5)};
     right: ${p => p.theme.space(8)};
  }
  @media (min-width: 1440px) {
    top: ${p => p.theme.space(4.5)};
     right: ${p => p.theme.space(25)};
  }
display:flex;
justify-content:center;
align-items:center;
margin-left:auto;
/* z-index:1; */
`

export const StyledNav = styled.nav`
display:none;
 @media screen and (min-width: 1440px) {
    margin-right: 30px;
    margin-left: 30px;
    display:flex;
    gap:30px;
    margin-left: 330px}
`

export const MobileMenu = styled.div`

@media screen and (max-width: 1440px) {
display:flex;
flex-direction:column;
justify-content:space-between;
width: 100%;
max-height: 100%;
color:#EBF3D4;
 };
 display:none;
  
`

export const StyledLink = styled(NavLink)`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
color: #23262A;
 white-space: nowrap;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

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

align-items:center;
border-style: none;
background-color: transparent;

@media screen and (max-width: 1440px) {
display: flex;
align-items:center;
border-style: none;
background-color: transparent;
   width: 30px;
   height: 30px;};
   @media screen and (min-width: 1440px) {
display: none
   }
`

export const StyledThemeBtn = styled.button`
border-style: none;
   background-color: transparent; 

     margin-top:auto;
   margin-bottom:50px;
   width: 60px;
   height: 30px;
`

export const ThemeModalDiv = styled.div`
     margin-top:100px;
   width: 60px;
   height: 30px;
  `

export const Avatar = styled(Link)`
  width:44px;
  height:44px;
  border-radius: 50%;
  `
export const UserName = styled.p`

   margin-right: 24px;
   margin-left: 14px;
  `


export const StyledThemeHeader = styled.button`
 @media screen and (max-width: 1440px) {
display: none
  }
  display:block;
 margin-left:auto;
 width: 60px;
   height: 30px; 
  border-style: none;
 background-color: transparent;
     `
     