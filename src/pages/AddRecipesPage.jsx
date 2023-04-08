// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { IconButton, Box } from '@mui/material';
// import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { AddRecipeForm } from '../components/AddRecipeForm/AddRecipeForm';
// import { fetchContacts } from 'redux/operation';
// import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';

export const AddRecipePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
        maxWidth: 320,
        padding: 16,
      }}
    >
      <h1>Add recipe</h1>
      <AddRecipeForm />
    </div>
  );
};

export default AddRecipePage;
