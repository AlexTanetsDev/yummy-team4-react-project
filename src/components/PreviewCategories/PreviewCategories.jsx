import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { mainPageRecipes } from '../../Redux/recipes/recipesOperation';
import {
  selectRecipes,
  // selectError,
  // selectIsLoading,
} from 'Redux/recipes/recipesSelectors';
// import {
//   ContactItem,
//   ContactItemWrapper,
//   DeleteBtn,
//   List,
// } from './ContactList.styled';
// import Loader from 'components/Loader/Loader';

export function PreviewCategories() {
  const dispatch = useDispatch();
  const items = useSelector(selectRecipes);
  console.log(items.data);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(mainPageRecipes());
  }, [dispatch]);

  return (
    <>
      <div>
        {items.data.length > 0
          ? items.data.map(item => {
              const { category, recipes } = item;
              return (
                <ul key={category}>
                  <li>{category}</li>
                  <li>{recipes.map(recipe => recipe.title).slice(0, 4)}</li>
                </ul>
              );
            })
          : null}
      </div>
    </>
  );
}
