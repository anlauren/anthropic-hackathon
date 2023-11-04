import { Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage";
import { ProjectPage } from "../ProjectPage";

export const AvailablePage = {
  HomePage: "/",
  Login: "/login",
  Project: "/projects/:projectId",
};

export const Pages = () => {
  return (
    <Routes>
      <Route path={AvailablePage.HomePage} element={<HomePage />} />
      <Route path={AvailablePage.HomePage} element={<ProjectPage />} />
    </Routes>
  );
};
