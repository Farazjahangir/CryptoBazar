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
import ProductDetails from "../screens/ProductDetails";

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
    {
      path: SCREEN_PATHS.PRODUCT_DETAILS,
      element: (
        // <ProtectedRoute screenName={SCREENS_CODES.DASHBOARD}>
        <ProductDetails />
        // </ProtectedRoute>
      ),
    },
  ]);

  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!ROUTES_WITHOUT_HEADER.includes(location.pathname) && <Header />}
      <div style={{ marginTop: 60, paddingBottom: 50, flex: 1 }}>
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
        <div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Router;
