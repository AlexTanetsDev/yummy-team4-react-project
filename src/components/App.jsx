import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';

import { refreshUser } from 'Redux/auth/operations';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRout';

const WellcomPage = lazy(() => import('../pages/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const SigninPage = lazy(() => import('../pages/SinginPage'));
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
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        <Route path="/add" element={<AddRecipePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
        <Route path="/my" element={<MyRecipesPage />} />
        <Route path="/search" element={<SearchPage />} />
         <Route path='/search/:query' element={<SearchPage/>} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        <Route path="*" element={<NotFoundPage />} />        
      </Route>
    </Routes>
  );
};
