// import { NavLink } from "react-router-dom"
// import Logo from "../Header/Logo.svg";

// import { Link } from "react-router-dom";
import Dark from "../Header/Switch-dark.svg";
import Light from "../Header/Switch-light.svg";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx"
import {IoMdClose} from "react-icons/io"
import {StyledLink, StyledHeader, StyledNav, StyledNavBurger, StyledBurger, StyledThemeBtn, MobileMenu, 
    ThemeModalDiv, Avatar, UserName,  StyledThemeHeader, StyledLinkBurger, Headerblock} from "../Header/Header.styled"
import { useState } from 'react';
import { useSelector } from "react-redux";
import { LogoHeader } from "../Logo/Logo";
import { useAuth } from "../../hooks/useAuth";
import { Modal } from "../Modal/Modal";

export const Header = () => {
    
     const { isLogin, user } = useAuth();
    const User = useSelector(state => state.user);
    console.log(User);
    const [modalActive, setModalActive] = useState(false);
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState(true);

     const handleTheme = () => {
    setTheme(!theme);
  }; 
    
    const handleButtonClick = () => {
    setNav(!nav);
  };
   
    return (
        <StyledHeader>
                    <LogoHeader/>          
        <StyledNav>
            <StyledLink to="/catagories">Categories</StyledLink>
            <StyledLink to="/add">Add recipes</StyledLink>
            <StyledLink to="/my">My recipes</StyledLink>
            <StyledLink to="/fovorites">Favorites</StyledLink>
            <StyledLink to="/shopping-list">Shopping list</StyledLink>
             <StyledLink to="/search"><BsSearch/></StyledLink>
            </StyledNav>


            <Headerblock>
    
        <Avatar to="/">
            <img src= "{User.avatarURL}" alt="avatar" />  
            </Avatar>
            <UserName> User</UserName>
      
         <StyledThemeHeader onClick={handleTheme}> 
               {theme ? <img src={Dark} alt="theme" />  : <img src={Light} alt="theme" />}
        </StyledThemeHeader>
                <StyledBurger onClick= {()=>{setModalActive(true)}}
                    >
                    <RxHamburgerMenu />
                   </StyledBurger>
          
            </Headerblock>
            
            <Modal active={ modalActive} setActive={setModalActive} />
 
        </StyledHeader>     
         
    )
}

