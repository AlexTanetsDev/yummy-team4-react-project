import React from 'react';

import { ChoseYourBreakfast } from 'components/ChoseYourBreakfast/ChoseYourBreakfast';
import { PreviewCategories } from 'components/PreviewCategories/PreviewCategories';
import { Container } from 'components/Container/Container';

export const Main = () => {
  return (
    <>
      <ChoseYourBreakfast />
      <Container children>
        <PreviewCategories />
      </Container>
    </>
  );
};
