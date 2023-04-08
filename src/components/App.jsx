import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import AddRecipePage from '../pages/AddRecipesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route index element={<AddRecipePage />} />
      </Route>
    </Routes>
  );
};
