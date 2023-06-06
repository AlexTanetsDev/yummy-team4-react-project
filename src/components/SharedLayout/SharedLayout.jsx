import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Header } from '../Header/Header';
import { BackgroundDecorHeader } from 'components/BackgroundDecor/BackgroundDecor';
import { Footer } from 'components/Footer/Footer';
import { MotivationModal } from 'components/MotivationModal/MotivationModal';

import { Main } from './SharedLayout.styled';
import { ButtonScrollUp } from 'components/Button/Button';

export const SharedLayout = ({ onClick, isDarkTheme }) => {
  const [isButtonUp, setIsButtonUp] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsButtonUp(true);
        return;
      }
      setIsButtonUp(false);
    });
  }, []);

  const handleOnScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
          <Header onClick={onClick} />
          <Main>
            <BackgroundDecorHeader isDarkTheme={isDarkTheme} />
            <Suspense>
              <Outlet />
            </Suspense>
          </Main>
          <Footer />
          <ButtonScrollUp isButtonUp={isButtonUp} onClick={handleOnScrollUp}>
            ^
          </ButtonScrollUp>
          <MotivationModal />
        </>
      )}
    </>
  );
};
