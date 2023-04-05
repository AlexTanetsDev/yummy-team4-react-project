import React from 'react';

import { SearchButtonBlack } from '../Button/Button';

export const Search = onClick => {
  return (
    <div>
      <SearchButtonBlack onClick={onClick} children="Search" />;
    </div>
  );
};
