import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { getMainPageRecipes } from '../../apiService';
import { scrollToTop } from 'helpers/scrollToTop';
import { MiniLoader } from 'components/Loader/Loader';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';
import {
  SeeAllButton,
  OtherCategoriesButton,
} from 'components/Button/Button.jsx';
import { RecipeItem } from 'components/RecipeItem/RecipeItem';
import { RecipesContainer, Title } from './PreviewCategories.styled';

export function PreviewCategories() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [viewportWidth, setViewportWidth] = useState(() => {
    const width = window.innerWidth;

    if (width >= 1440) {
      return 4;
    } else if (width >= 768 && width < 1240) {
      return 2;
    } else {
      return 1;
    }
  });
  const location = useLocation();
  const token = useSelector(state => state.auth.token);
  const { t } = useTranslation();

  useEffect(() => {
    const renderMainPageRecipesList = async () => {
      try {
        setIsLoading(true);
        const res = await getMainPageRecipes(token);
        setItems(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }, 300);
      }
    };

    renderMainPageRecipesList();
  }, [token]);

  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setViewportWidth(4);
      } else if (width >= 768 && width < 1440) {
        setViewportWidth(2);
      } else {
        setViewportWidth(1);
      }
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      {error && (
        <AlertMessage>
          Oops, something went wrong. Please restart the app...
        </AlertMessage>
      )}
      {isLoading ? (
        <MiniLoader />
      ) : (
        items
          .map(item => (
            <div key={nanoid()}>
              <Title>{item.category}</Title>
              <RecipesContainer>
                {item.recipes
                  .map(({ _id, preview, title }) => (
                    <RecipeItem
                      id={_id}
                      preview={preview}
                      title={title}
                      key={_id}
                      onClick={scrollToTop}
                    />
                  ))
                  .slice(0, viewportWidth)}
              </RecipesContainer>
              <Link
                to={`/categories/${item.category}`}
                state={{ from: location }}
              >
                <SeeAllButton children={t('See all')} onClick={scrollToTop} />
              </Link>
            </div>
          ))
          .slice(0, 4)
      )}
      <Link to={`/categories/Beef`} state={{ from: location }}>
        {items && (
          <OtherCategoriesButton
            children={t('Other categories')}
            onClick={scrollToTop}
          />
        )}
      </Link>
    </>
  );
}
