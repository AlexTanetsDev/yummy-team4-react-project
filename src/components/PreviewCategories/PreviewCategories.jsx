import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { getMainPageRecipes } from '../../apiService';

import {
  SeeAllButton,
  OtherCategoriesButton,
} from 'components/Button/Button.jsx';
import { RecipeItem } from 'components/RecipeItem/RecipeItem';
import { RecipesContainer, Title } from './PreviewCategories.styled';

export function PreviewCategories() {
  const [items, setItems] = useState('');
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

  useEffect(() => {
    getMainPageRecipes(token)
      .then(res => setItems(res.data))
      .catch(error => console.error(error));
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
      {items.length > 0
        ? items
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
                      />
                    ))
                    .slice(0, viewportWidth)}
                </RecipesContainer>
                <Link
                  to={`/categories/${item.category}`}
                  state={{ from: location }}
                >
                  <SeeAllButton children={'See all'} />
                </Link>
              </div>
            ))
            .slice(0, 4)
        : null}
      <Link to={`/categories/Beef`} state={{ from: location }}>
        {items && <OtherCategoriesButton children={'Other categories'} />}
      </Link>
    </>
  );
}
