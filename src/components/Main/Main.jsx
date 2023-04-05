import React from 'react';

import { ChoseYourBreakfast } from 'components/ChoseYourBreakfast/ChoseYourBreakfast';
import { Search } from 'components/Search/Search';
import { PreviewCategories } from 'components/PreviewCategories/PreviewCategories';

export const Main = () => {
  return (
    <div>
      <ChoseYourBreakfast />
      <Search />
      <PreviewCategories />
    </div>
  );
};
