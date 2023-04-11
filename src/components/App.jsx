import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useAuth} from "../hooks/index"
import { refreshUser } from 'Redux/auth/operations';


const AddRecipesPage = lazy(() => import('../pages/AddRecipesPage'));

// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRout';


const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const WellcomPage = lazy(() => import('../pages/WelcomePage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ShoppingListPage = lazy(() => import('../pages/ShoppingListPage'));
const SigninPage = lazy(() => import('../pages/SinginPage'));
const FavoritePage = lazy(() => import('../pages/FavoriteRecipesPage/index'));
const AddRecipePage = lazy(() =>
  import('../pages/AddRecipesPage/AddRecipesPage')
);
const RecipePage = lazy(() => import('../pages/RecipePage'));

const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage'));

const CategoriesPage = lazy(() => import('../pages/CategoriesPage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));

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

        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/add" element={<AddRecipePage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/recepie/:id" element={<RecipePage />} />

        <Route path="/my" element={<MyRecipesPage />} />

        <Route path="/categories/:categoryName" element={<CategoriesPage />} />

      </Route>
      {/* <Route path="/categories" element={
        <CategoriesPage />
      } /> */}
      <Route path="/add" element={
        <AddRecipesPage />
      } />
            {/* <Route path="/my" element={
        <MyRecipiesPage/>
      } />
            <Route path="/favorites" element={
        <FavorriteRecipesPage />
      } />
            <Route path="/shopping-list" element={
        <ShoppingListPage />
              } /> */}
    </Routes>
  );
};
