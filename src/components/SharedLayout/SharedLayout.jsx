import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/auth/selectors';

import {
  BackgroundDecorHeader,
  BackgroundDecorFooter,
} from 'components/BackgroundDecor/BackgroundDecor';

// import { Header } from './Header/Header';
import Footer from 'components/Footer/Footer';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <>
          <main>
            <Suspense>
              <Outlet />
            </Suspense>
          </main>
        </>
      ) : (
        <>
          {/* <Header /> */}
          <main>
            <BackgroundDecorHeader />
            <Suspense>
              <Outlet />
            </Suspense>
            <BackgroundDecorFooter />
          </main>
            <Footer /> 
        </>
      )}

    </>
  );
};
