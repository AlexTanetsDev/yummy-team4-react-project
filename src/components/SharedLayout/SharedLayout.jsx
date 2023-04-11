import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Container} from "../Container/Container"

import {
  BackgroundDecorHeader,
  BackgroundDecorFooter,
} from 'components/BackgroundDecor/BackgroundDecor';

import { Header } from '../Header/Header';
// import { Footer } from './Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Container>

      <Header />
      <main>
        <BackgroundDecorHeader />
        <Suspense>
        <Outlet />
        </Suspense>
        <BackgroundDecorFooter />
      </main>
      {/* <Footer /> */}
      {/* </Container>  */}
      </Container>
    </>
  );
};
