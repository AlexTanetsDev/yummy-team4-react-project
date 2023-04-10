import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  BackgroundDecorHeader,
  BackgroundDecorFooter,
} from 'components/BackgroundDecor/BackgroundDecor';

// import { Header } from './Header/Header';
// import { Footer } from './Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <BackgroundDecorHeader />
        <Suspense>
          <Outlet />
        </Suspense>
        <BackgroundDecorFooter />
      </main>
      {/* <Footer /> */}
    </>
  );
};
