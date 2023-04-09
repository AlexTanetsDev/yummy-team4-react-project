import React from 'react';
import { Sections } from 'components/Sections/Sections';
import { SeeAllButton } from 'components/Button/Button.jsx';
import {
  CategoryList,
  RecipesList,
  RecipesItem,
} from './ChooseYourBreakfast.styled';

export function MainPageRecipesWraper({ category, recipes, viewportWidth }) {
  return (
    <>
      <CategoryList key={category}>
        <Sections title={category} children>
          {recipes
            .map(recipe => {
              const { preview, title } = recipe;
              return (
                <RecipesList>
                  <RecipesItem>
                    <li>
                      <img src={preview} alt="" />
                    </li>
                    <li>{title}</li>
                  </RecipesItem>
                </RecipesList>
              );
            })
            .slice(0, viewportWidth)}
          <SeeAllButton children={'See all'} />
        </Sections>
      </CategoryList>
    </>
  );
}
