import React from 'react';
import { PaginationBtn, PaginationWrapper } from './Paginator.styled';

// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

export default function RecipesPagination({
  totalItemsCount,
  currentPage,
  totalPages,
  paginate,
}) {
  function handlePrevClick() {
    if (currentPage > 1) {
      const page = currentPage - 1;
      paginate(page);
    }
  }

  function handleNextClick() {
    if (currentPage < totalPages) {
      const page = currentPage + 1;
      paginate(page);
      // console.log('--nextClick', ' currentPage', page);
      if (totalItemsCount === 0) {
        return null;
      }
    }
  }

  return (
    <PaginationWrapper>
      <PaginationBtn disabled={currentPage === 1} onClick={handlePrevClick}>
        Prev
      </PaginationBtn>
      <PaginationBtn
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
      >
        Next
      </PaginationBtn>
    </PaginationWrapper>
  );
}
