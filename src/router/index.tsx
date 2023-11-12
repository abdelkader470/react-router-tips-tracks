import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "../pages/Layout";
import HomePage from "../pages";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import QuickStartPage from "../pages/learn";
import LearnLayout from "../pages/learn/Layout";
import InstallationPage from "../pages/learn/Installation";
import ThinkingInReactPage from "../pages/learn/ThinkingInReact";
import LoginPage from "../pages/Login";
import ContributePage from "../pages/Contribute";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";
const isLoggedIn = false;
const userData: { email: string } | null = isLoggedIn
  ? { email: "email@gmail.com" }
  : null;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="contribute"
          element={
            <ProtectedRoute
              isAllowed={isLoggedIn}
              redirectPath="/login"
              data={userData}
            >
              <ContributePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redirectPath="/contribute"
              data={userData}
            >
              <LoginPage />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route
        path="/learn"
        element={<LearnLayout />}
        errorElement={<ErrorHandler />}
      >
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
