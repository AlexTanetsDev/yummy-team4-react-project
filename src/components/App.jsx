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
const MainPage = lazy(() =>
  import('../pages/MainPage').then(module => ({
    ...module,
    default: module.MainPage,
  }))
);
// const MainPage = lazy(() => import('../pages/MainPage'));
const ShoppingListPage = lazy(() => import('../pages/ShoppingListPage'));
const SigninPage = lazy(() => import('../pages/SinginPage'));
const FavoritePage = lazy(() => import('../pages/FavoriteRecipesPage/index'));
const AddRecipePage = lazy(() => import('../pages/AddRecipesPage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));

const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage'));

const CategoriesPage = lazy(() => import('../pages/CategoriesPage'));

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
			// 	<Route index element={<WellcomPage/>} />
			// <Route path="/register" element={<RegisterPage/>} />
      //   <Route path="/signin" element={<SigninPage />} />
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
