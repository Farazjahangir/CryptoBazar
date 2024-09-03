import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState } from "react";

import {
  SCREEN_PATHS,
  SCREENS_CODES,
  ROUTES_WITHOUT_HEADER,
  ADMIN_ROUTES,
} from "../constants";
import { getRandomInt } from "../utils/globalHelpers";
// Screens
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Shop from "../screens/Shop";
import ProductDetails from "../screens/ProductDetails";
import Profile from "../screens/Profile";
import OrderDetails from "../screens/OrderDetails";
import AdminDashboard from "../screens/AdminDashboard";
import AdminPrdList from "../screens/AdminPrdList";
import AdminCatList from "../screens/AdminCatList";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CartDrawer from "../Components/CartDrawer";
import AdminHeader from "../Components/AdminHeader";
import AdminDrawer from "../Components/AdminDrawer";
import { Box } from "@mui/system";

const Router = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [adminDrawerState, setAdminDrawerState] = useState(false)
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
    {
      path: SCREEN_PATHS.PROFILE,
      element: (
        // <ProtectedRoute screenName={SCREENS_CODES.DASHBOARD}>
        <Profile />
        // </ProtectedRoute>
      ),
    },
    {
      path: SCREEN_PATHS.ORDER_DETAILS,
      element: (
        // <ProtectedRoute screenName={SCREENS_CODES.DASHBOARD}>
        <OrderDetails />
        // </ProtectedRoute>
      ),
    },
    {
      path: SCREEN_PATHS.ADM_DASHBOARD,
      element: (
        // <ProtectedRoute screenName={SCREENS_CODES.DASHBOARD}>
        <AdminDashboard />
        // </ProtectedRoute>
      ),
    },
    {
      path: SCREEN_PATHS.ADM_PRD_LIST,
      element: (
        // <ProtectedRoute screenName={SCREENS_CODES.DASHBOARD}>
        <AdminPrdList />
        // </ProtectedRoute>
      ),
    },
    {
      path: SCREEN_PATHS.ADM_CAT_LIST,
      element: (
        // <ProtectedRoute screenName={SCREENS_CODES.DASHBOARD}>
        <AdminCatList />
        // </ProtectedRoute>
      ),
    },
  ]);

  const location = useLocation();

  const toggleAdminDrawer = () => {
    setAdminDrawerState(!adminDrawerState)
  }

  const onAdminDrawerClose = () => {
    setAdminDrawerState(false)
  }

  return (
    // <div style={{ display: 'flex' }}>
    <div
      style={{
        minHeight: "100vh",
        ...(location.pathname.startsWith("/admin")
          ? { display: "flex", flexDirection: "row" }
          : {}),
      }}
    >
      {!ROUTES_WITHOUT_HEADER.includes(location.pathname) && (
        <CartDrawer open={drawerState} />
      )}

      {ADMIN_ROUTES.includes(location.pathname) && (
        <Box sx={{ background: '#e2e7e84d' }}>
          <AdminDrawer open={adminDrawerState} onClose={onAdminDrawerClose} />
        </Box>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflowX: 'hidden',
          ...(location.pathname.startsWith("/admin")
            ? { backgroundColor: "#e2e7e84d" }
            : {}),
        }}
      >
        {!ROUTES_WITHOUT_HEADER.includes(location.pathname) && <Header />}
        {ADMIN_ROUTES.includes(location.pathname) && <AdminHeader toggleDrawer={toggleAdminDrawer} />}
        <div
          style={{
            flex: 1,
            ...(location.pathname.startsWith("/admin")
              ? { paddingLeft: 30, paddingRight: 30 }
              : {}),
          }}
        >
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
    </div>
    // </div>
  );
};

export default Router;
