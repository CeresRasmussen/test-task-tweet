import { lazy, Suspense } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

const CardsPage = lazy(() => import('./pages/Cards/Cards'));
const HomePage = lazy(() => import('./pages/Home/Home'));

const App = () => {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/tweets" element={<CardsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
