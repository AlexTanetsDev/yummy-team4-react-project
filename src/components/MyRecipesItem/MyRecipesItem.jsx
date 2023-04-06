import React from 'react';
import Pagination from '../Paginator/Paginator';
import {
  MainPageTitle,
  MyRecipesList,
  MyRecipesItem,
} from './MyRecipesItem.styled';

export default function myRecipes() {
  return (
    <div>
      <MainPageTitle>My recipes</MainPageTitle>
      <MyRecipesList>
        <MyRecipesItem></MyRecipesItem>
      </MyRecipesList>
      <Pagination></Pagination>
    </div>
  );
}
