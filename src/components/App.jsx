import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRout';

import { SharedLayout } from './SharedLayout';
import { refreshUser } from 'Redux/auth/operations';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
const RegisterPage = lazy(() =>
  import('../pages/RegisterPage').then(module => ({
    ...module,
    default: module.RegisterPage,
  }))
);
const SigninPage = lazy(() =>
  import('../pages/SinginPage').then(module => ({
    ...module,
    default: module.SigninPage,
  }))
);
const WellcomPage = lazy(() =>
  import('../pages/WelcomePage').then(module => ({
    ...module,
    default: module.WellcomPage,
  }))
);
const MainPage = lazy(() =>
  import('../pages/MainPage').then(module => ({
    ...module,
    default: module.MainPage,
  }))
);
=======
=======
>>>>>>> Stashed changes
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const SigninPage = lazy(() => import('../pages/SinginPage'));
const WellcomPage = lazy(() => import('../pages/WelcomePage'));
const MainPage = lazy(() => import('../pages/MainPage'));
>>>>>>> Stashed changes

// const RegisterPage = lazy(() => import('../pages/RegisterPage'));
// const SigninPage = lazy(() => import('../pages/SinginPage'));
// const WellcomPage = lazy(() => import('../pages/WelcomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <span>Refreshing user...</span>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WellcomPage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/main" component={<RegisterPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/main" component={<SigninPage />} />
          }
        />
        <Route
          path="/main"
          element={
            <PrivateRoute redirectTo="/signin" component={<MainPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
