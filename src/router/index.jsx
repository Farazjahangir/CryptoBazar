import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import {
  SCREEN_PATHS,
  SCREENS_CODES,
  ROUTES_WITHOUT_HEADER,
} from "../constants";
import { getRandomInt } from "../utils/globalHelpers";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Header from "../Components/Header";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: SCREEN_PATHS.Login,
      element: <Login />,
    },
    {
      path: SCREEN_PATHS.Signup,
      element: <Signup />,
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

  const location = useLocation();


  return (
    <>
      {!ROUTES_WITHOUT_HEADER.includes(location.pathname) && <Header />}
      <Routes>
        {router.routes.map((item) => (
          <Route
            path={item.path}
            element={item.element}
            key={getRandomInt(1000000, 100000000)}
          />
        ))}
      </Routes>
    </>
  );
};

export default Router;
