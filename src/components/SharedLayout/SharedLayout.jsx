import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';
// import { Footer } from './Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Header />
			{/* <nav>
        <Suspense>
          <Outlet />
        </Suspense>
      </nav> */}
      {/* <Footer /> */}
    </>
  );
};
