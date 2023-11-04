import { HomePage } from "containers/HomePage";
import { Route, Routes } from "react-router-dom";

export const AvailablePage = {
  HomePage: "/",
  Login: "/login",
};

export const Pages = () => {
  return (
    <Routes>
      <Route path={AvailablePage.HomePage} element={<HomePage />} />
    </Routes>
  );
};
