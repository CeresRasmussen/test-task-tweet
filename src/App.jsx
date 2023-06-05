import { lazy } from "react";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Route, Routes, Navigate } from "react-router-dom";

const CardsPage = lazy(() => import("./pages/Cards/Cards"));
const HomePage = lazy(() => import("./pages/Home/Home"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/tweets" element={<CardsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
