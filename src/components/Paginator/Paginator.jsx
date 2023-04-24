import React from 'react';
import { PaginationContainer, PaginationWrapper } from './Paginator.styled';
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
              siblingCount={0}
              boundaryCount={1}
              page={currentPage}
              theme={theme}
              color="primary"
              onChange={(_, num) => paginate(num)}
            />
          </ThemeProvider>
        </PaginationWrapper>
      </PaginationContainer>
    );
  }
};
