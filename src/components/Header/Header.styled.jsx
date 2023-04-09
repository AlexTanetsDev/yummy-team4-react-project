import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
width: 78px;
height: 23px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
color: #23262A;


/* Inside auto layout */

/* flex: none;
order: 0;
flex-grow: 0; */
`;
export const StyledHeader = styled.header`
    display:flex;
    align-items:center;

`;
export const StyledNav = styled.nav`
display:none;

 @media screen and (min-width: 768px) {
    margin-right: 30px;
    margin-left: 30px;
    display:flex;}
`

export const StyledNavBurger = styled.nav`

@media screen and (max-width: 767px) {
display:flex;
position:fixed;
width: 100vw;
/* height: 100vh; */
top: 50px;

flex-direction:column;
justify-content:center;
align-items:center;

  margin-right:auto; 
  margin-left:auto;  };
  display:none;
`

export const StyledBurger = styled.button`
@media screen and (max-width: 767px) {
display: block;
border-style: none;
background-color: white;
   margin-left:auto; 
   width: 30px;
   height: 30px;};
   @media screen and (min-width: 768px) {
display: none
   }

   
`