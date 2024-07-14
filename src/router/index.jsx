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
// Screens
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Shop from "../screens/Shop";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
    {
      path: SCREEN_PATHS.Shop,
      element: (
        // <ProtectedRoute screenName={SCREENS_CODES.DASHBOARD}>
        <Shop />
        // </ProtectedRoute>
      ),
    },
  ]);

  const location = useLocation();

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {!ROUTES_WITHOUT_HEADER.includes(location.pathname) && <Header />}
      <div style={{ marginTop: 60, paddingBottom: 180 }}>
        <Routes>
          {router.routes.map((item) => (
            <Route
              path={item.path}
              element={item.element}
              key={getRandomInt(1000000, 100000000)}
            />
          ))}
        </Routes>
      </div>
      {!ROUTES_WITHOUT_HEADER.includes(location.pathname) && (
        <div style={{ position: 'absolute', width: '100%', bottom: 0 }}>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Router;
