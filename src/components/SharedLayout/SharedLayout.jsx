import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/auth/selectors';

import { Header } from '../Header/Header';
import { BackgroundDecorHeader } from 'components/BackgroundDecor/BackgroundDecor';
import { Footer } from 'components/Footer/Footer';

import { Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <>
          <main>
            <div>
              <Toaster position="top-right" reverseOrder={false} />
            </div>
            <Suspense>
              <Outlet />
            </Suspense>
          </main>
        </>
      ) : (
        <>
          <div>
            <Toaster position="top-right" reverseOrder={false} />
          </div>
          <Header />
          <Main>
            <BackgroundDecorHeader />
            <Suspense>
              <Outlet />
            </Suspense>
          </Main>
          <Footer />
        </>
      )}
    </>
  );
};
