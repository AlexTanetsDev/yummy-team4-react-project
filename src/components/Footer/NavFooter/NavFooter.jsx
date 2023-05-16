import { useTranslation } from 'react-i18next';

import { scrollToTop } from 'helpers/scrollToTop';
import { NavLinkStyled, NavWraper } from './NavFooter.styled';

const NavFooter = () => {
  const { t } = useTranslation();

  return (
    <NavWraper>
      <li>
        <NavLinkStyled
          to="/search"
          state={{ ingredient: true }}
          onClick={scrollToTop}
        >
          {t('Ingredients')}
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/add" onClick={scrollToTop}>
          {t('Add recipes')}
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/my" onClick={scrollToTop}>
          {t('My recipes')}
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/favorite" onClick={scrollToTop}>
          {t('Favorite')}
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/shopping-list" onClick={scrollToTop}>
          {t('Shopping list')}
        </NavLinkStyled>
      </li>
    </NavWraper>
  );
};

export default NavFooter;
