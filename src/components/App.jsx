import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { useAuth } from 'hooks';

import { refreshUser, categoryList } from 'Redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'Redux/auth/selectors';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRout';
import { MainLoader } from './Loader/Loader';

const WelcomPage = lazy(() => import('../pages/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const CategoriesPage = lazy(() => import('../pages/CategoriesPage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipesPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));
const ShoppingListPage = lazy(() => import('../pages/ShoppingListPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const EmailVerifyPage = lazy(() => import('../pages/EmailVerifyPage'));
const ResendEmailPage = lazy(() => import('../pages/ResendEmailPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    const handleRefreshUser = async () => {
      await dispatch(refreshUser());
    };
    handleRefreshUser();
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(categoryList());
    }
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <MainLoader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomPage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/signin"
            />
          }
        />
        <Route path="verify/:verificationToken" element={<EmailVerifyPage />} />
        <Route
          path="signin"
          element={
            <RestrictedRoute component={<SignInPage />} redirectTo="/main" />
          }
        />
        <Route path="resend" element={<ResendEmailPage />} />
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
          <Route path="*" element={<ErrorPage />} />
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
