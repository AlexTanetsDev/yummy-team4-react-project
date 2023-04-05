import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { mainPageRecipes } from 'Redux/recipes/recipesOperation';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
// import {
//   ContactItem,
//   ContactItemWrapper,
//   DeleteBtn,
//   List,
// } from './ContactList.styled';
// import Loader from 'components/Loader/Loader';

export function PreviewCategories() {
  const dispatch = useDispatch();
  // const items = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(mainPageRecipes());
  }, [dispatch]);

  return (
    <>
      <div>hello</div>
    </>
  );
}
