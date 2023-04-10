// import { NavLink } from "react-router-dom"
import Logo from "../Header/Logo.svg";
import Dark from "../Header/Switch-dark.svg";
import Light from "../Header/Switch-light.svg";

import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx"
import {IoMdClose} from "react-icons/io"
import {StyledLink, StyledHeader, StyledNav, StyledNavBurger, StyledBurger, StyledThemeBtn, MobileMenu, 
    ThemeModalDiv, userHeaderInfo, Avatar, UserName, StyledThemeHeaderDiv, StyledThemeHeader} from "../Header/Header.styled"
import { useState } from 'react';
import {useSelector} from "react-redux"


export const Header = () => {
    //  const { isLoggedIn, user } = useAuth();
    const user = useSelector(state => state.user);
    console.log(user)
    
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState(true);

     const handleTheme = () => {
    setTheme(!theme);
  }; 
    
    const handleButtonClick = () => {
    setNav(!nav);
  };
    //   console.log(state); 
    return (
        <StyledHeader>
            <Link to="/">
            <img src={Logo} alt="логотип"/>        
            </Link>
            
            
            
        <StyledNav>
            <StyledLink to="/catagories">Categories</StyledLink>
            <StyledLink to="/add">Add recipes</StyledLink>
            <StyledLink to="/my">My recipes</StyledLink>
            <StyledLink to="/fovorites">Favorites</StyledLink>
            <StyledLink to="/shopping-list">Shopping list</StyledLink>
             <StyledLink to="/search"><BsSearch/></StyledLink>
            </StyledNav>

           <Avatar to="/">
            <img src="http://res.cloudinary.com/dkkt8rmcn/image/upload/c_fill,g_faces,h_250,…" alt="avatar" />  
            </Avatar>
            <UserName> User</UserName>
            
               <StyledThemeHeaderDiv>
                    <StyledThemeHeader onClick={handleTheme}> 
               {theme ? <img src={Dark} alt="theme" />  : <img src={Light} alt="theme" />}
                 </StyledThemeHeader>
                    </StyledThemeHeaderDiv>  
        
         
           <StyledBurger onClick={handleButtonClick} >{nav ? <RxHamburgerMenu/> : <IoMdClose/> }</StyledBurger>
            {nav ? "" : 
           <MobileMenu>
            <StyledNavBurger>
            <StyledLink to="/catagories">Categories</StyledLink>
            <StyledLink to="/add">Add recipes</StyledLink>
            <StyledLink to="/my">My recipes</StyledLink>
            <StyledLink to="/fovorites">Favorites</StyledLink>
            <StyledLink to="/shopping-list">Shopping list</StyledLink>
             <StyledLink to="/search"><BsSearch/> Search</StyledLink>                        
                    </StyledNavBurger>
                    <ThemeModalDiv >
                    <StyledThemeBtn onClick={handleTheme}> 
               {theme ? <img src={Dark} alt="theme" />  : <img src={Light} alt="theme" />}
                 </StyledThemeBtn>
                    </ThemeModalDiv>     
           </MobileMenu>
                            
            
            }
            
 
        </StyledHeader>     
           

        
        
    )
}

