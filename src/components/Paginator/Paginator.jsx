import React from 'react';
import { PaginationContainer, PaginationWrapper } from './Paginator.styled';
import { AlertMessage } from '../AlertMessage/AlertMessage';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EBF3D4',
    },
  },
});

export const RecipesPagination = ({
  totalItemsCount,
  currentPage,
  totalPages,
  paginate,
}) => {
  if (totalItemsCount > 0 && totalPages > 1) {
    return (
      <PaginationContainer>
        <PaginationWrapper>
          <ThemeProvider theme={theme}>
            <Pagination
              count={totalPages}
              page={currentPage}
              theme={theme}
              color="primary"
              onChange={(_, num) => paginate(num)}
            />
          </ThemeProvider>
        </PaginationWrapper>
      </PaginationContainer>
    );
  } else {
    if (totalItemsCount === 0) {
      return (
        <AlertMessage>Please add the recipe to my recipes...</AlertMessage>
      );
    }
  }
};
