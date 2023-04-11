import { scrollToTop } from 'helpers/scrollToTop';
import { NavLinkStyled, NavWraper } from './NavFooter.styled';

const NavFooter = () => {
  return (
    <NavWraper>
      <li>
        <NavLinkStyled
          to="/search"
          state={{ ingredient: true }}
          onClick={scrollToTop}
        >
          Ingredients
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/add" onClick={scrollToTop}>
          Add recipes
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/my" onClick={scrollToTop}>
          My recipes
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/favorite" onClick={scrollToTop}>
          Favorite
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/shopping-list" onClick={scrollToTop}>
          Shopping list
        </NavLinkStyled>
      </li>
    </NavWraper>
  );
};

export default NavFooter;
