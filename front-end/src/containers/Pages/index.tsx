import { Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage";

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
