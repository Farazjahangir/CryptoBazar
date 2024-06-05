import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { SCREEN_PATHS, SCREENS_CODES } from "../constants";
import { getRandomInt } from "../utils/globalHelpers";
import Home from "../screens/Home";
import Login from "../screens/Login";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: SCREEN_PATHS.Login,
      element: (
        <Login />
      ),
    },
    {
      path: SCREEN_PATHS.HOME,
      element: (
        // <ProtectedRoute screenName={SCREENS_CODES.DASHBOARD}>
        <Home />
        // </ProtectedRoute>
      ),
    },
  ]);

  return (
    <Routes>
      {router.routes.map((item) => (
        <Route
          path={item.path}
          element={item.element}
          key={getRandomInt(1000000, 100000000)}
        />
      ))}
    </Routes>
  );
};

export default Router;
