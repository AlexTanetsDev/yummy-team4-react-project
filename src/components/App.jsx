import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRout';

import { SharedLayout } from './SharedLayout';
import AddRecipePage from '../pages/AddRecipesPage';
import { refreshUser } from 'Redux/auth/operations';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const WellcomPage = lazy(() => import('../pages/WelcomePage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ShoppingListPage = lazy(() => import('../pages/ShoppingListPage'));
const SigninPage = lazy(() => import('../pages/SinginPage'));


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

        {/* <Route index element={<AddRecipePage />} /> */}

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
        <Route path="/shopping-list" element={<ShoppingListPage />} />

      </Route>
    </Routes>
  );
};
