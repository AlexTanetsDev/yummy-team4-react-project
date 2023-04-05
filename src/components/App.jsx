import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
import { MainPage } from '../pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="main" element={<MainPage />} />
        {/* <Route index element={<HomePage />} /> */}
      </Route>
    </Routes>
  );
};
