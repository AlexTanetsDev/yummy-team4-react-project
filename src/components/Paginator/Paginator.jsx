// import React, { useState, useEffect } from 'react';

// export default function myRecipesPagination({ count }) {
//   const [totalPages, setTotalPages] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const pageSize = 5;
//     const total = Math.ceil(count / pageSize);
//     setTotalPages(total);
//   }, [count]);

//   function handlePrevClick() {
//     if (currentPage > 1) {
//       const page = currentPage - 1;
//       setCurrentPage(page);
//     }
//   }

//   function handleNextClick() {
//     if (currentPage < totalPages) {
//       const page = currentPage + 1;
//       setCurrentPage(page);
//     }
//   }

//   if (count === 0) {
//     return null;
//   }

//   return (
//     <div>
//       <p>
//         Page {currentPage} of {totalPages}
//       </p>
//       <button disabled={currentPage === 1} onClick={handlePrevClick}>
//         Prev
//       </button>
//       <button disabled={currentPage === totalPages} onClick={handleNextClick}>
//         Next
//       </button>
//     </div>
//   );
// }
