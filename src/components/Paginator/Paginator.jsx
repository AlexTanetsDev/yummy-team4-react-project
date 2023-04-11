import React from 'react';
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
      console.log('--nextClick', ' currentPage', page);
      if (totalItemsCount === 0) {
        return null;
      }
    }
  }

  return (
    <div>
      <button disabled={currentPage === 1} onClick={handlePrevClick}>
        Prev
      </button>
      <button disabled={currentPage === totalPages} onClick={handleNextClick}>
        Next
      </button>
    </div>
    // <Stack spacing={2}>
    //   <Pagination count={totalPages} color="#EBF3D4" page={currentPage} />
    // </Stack>
  );
}
