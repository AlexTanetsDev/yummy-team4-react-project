// import { NavLink } from "react-router-dom"
import Logo from "../Header/Logo.svg";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx"
import {IoMdClose} from "react-icons/io"
import {StyledLink, StyledHeader, StyledNav, StyledNavBurger, StyledBurger} from "../Header/Header.styled"
import { useState } from 'react';


{/* <StyledNavBurger show={showContainer}>
            <StyledLink to="/catagories">Categories</StyledLink>
            <StyledLink to="/add">Add recipes</StyledLink>
            <StyledLink to="/my">My recipes</StyledLink>
            <StyledLink to="/fovorites">Favorites</StyledLink>
            <StyledLink to="/shopping-list">Shopping list</StyledLink>
             <StyledLink to="/search"><BsSearch/> Search</StyledLink>
            </StyledNavBurger> */}

export const Header = () => {
    //  const { isLoggedIn, user } = useAuth();
   
    const [nav, setNav] = useState(false);

     const handleButtonClick = () => {
    setNav(!nav);
  };
    //   console.log(state); 
    return (
        <StyledHeader>
            <Link to="/">
            <img src={Logo} alt="логотип" />        
 </Link>
        <StyledNav>
            <StyledLink to="/catagories">Categories</StyledLink>
            <StyledLink to="/add">Add recipes</StyledLink>
            <StyledLink to="/my">My recipes</StyledLink>
            <StyledLink to="/fovorites">Favorites</StyledLink>
            <StyledLink to="/shopping-list">Shopping list</StyledLink>
             <StyledLink to="/search"><BsSearch/></StyledLink>
            </StyledNav>
         
            
         
            

        {/* <UserName>Welcome {isLoggedIn ? user.name : 'stranger'}</UserName>
         {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
       
          
           <StyledBurger onClick={handleButtonClick} >{nav ? <RxHamburgerMenu/> : <IoMdClose/> }</StyledBurger>
        {nav ? "" : <StyledNavBurger>
            <StyledLink to="/catagories">Categories</StyledLink>
            <StyledLink to="/add">Add recipes</StyledLink>
            <StyledLink to="/my">My recipes</StyledLink>
            <StyledLink to="/fovorites">Favorites</StyledLink>
            <StyledLink to="/shopping-list">Shopping list</StyledLink>
             <StyledLink to="/search"><BsSearch/> Search</StyledLink>
             </StyledNavBurger> }
        </StyledHeader>     
           

        
        
    )
}

// export const StyledContainer = styled.div`
//   margin: 0 auto;
//   padding: 0 16px;
//   max-width: ${p => p.theme.breakPoints[0]};

//   @media screen and (min-width: 768px) {
//     padding: 0 32px;
//     max-width: ${p => p.theme.breakPoints[1]};
//   }
//   @media screen and (min-width: 1440px) {
//     padding: 0 100px;
//     max-width: ${p => p.theme.breakPoints[2]};
//   }
// `;
