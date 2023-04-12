import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'hooks';

import { refreshUser } from 'Redux/auth/operations';
import { selectIsLoggedIn } from 'Redux/auth/selectors';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRout';

const WelcomPage = lazy(() => import('../pages/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const CategoriesPage = lazy(() => import('../pages/CategoriesPage'));
const AddRecipePage = lazy(() =>
  import('../pages/AddRecipesPage/AddRecipesPage')
);
const FavoritePage = lazy(() => import('../pages/FavoritePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));
const ShoppingListPage = lazy(() => import('../pages/ShoppingListPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <span>Refreshing user...</span>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute component={<WelcomPage />} redirectTo="/main" />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo="/main" />
          }
        />
        <Route
          path="signin"
          element={
            <RestrictedRoute component={<SignInPage />} redirectTo="/main" />
          }
        />
        <Route
          path="main"
          element={
            <PrivateRoute component={<MainPage />} redirectTo="/signin" />
          }
        />
        {isLoggedIn ? (
          <>
            <Route
              path="categories/:categoryName"
              element={<CategoriesPage />}
            />
            <Route path="add" element={<AddRecipePage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="recipe/:recipeId" element={<RecipePage />} />
            <Route path="my" element={<MyRecipesPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="search/:query" element={<SearchPage />} />
            <Route path="shopping-list" element={<ShoppingListPage />} />
          </>
        ) : (
          <Route path="*" element={<NotFoundPage />} />
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
