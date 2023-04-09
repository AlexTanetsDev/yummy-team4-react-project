import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const SigninPage = lazy(() => import('../pages/SinginPage'));
const WellcomPage = lazy(() => import('../pages/WelcomePage'))
const AddRecipesPage =  lazy(() => import('../pages/AddRecipesPage'))


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
				<Route index element={<WellcomPage/>} />
			<Route path="/register" element={<RegisterPage/>} />
        <Route path="/signin" element={<SigninPage />} />
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
