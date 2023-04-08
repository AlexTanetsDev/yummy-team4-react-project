import React from 'react';

import { ChoseYourBreakfast } from 'components/ChoseYourBreakfast/ChoseYourBreakfast';
import { Search } from 'components/Search/Search';
import { PreviewCategories } from 'components/PreviewCategories/PreviewCategories';
import { Container } from 'components/Container/Container';
// import { Container } from 'components/Container/Container';

export const Main = () => {
  return (
    <div>
      <Container children>
        <ChoseYourBreakfast />
        <Search />
        <PreviewCategories />
      </Container>
    </div>
  );
};
