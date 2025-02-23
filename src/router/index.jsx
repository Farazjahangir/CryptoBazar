import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
import AdminOrderList from "../screens/AdminOrderList";
import AdminOrderDetails from "../screens/AdminOrderDetails";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CartDrawer from "../Components/CartDrawer";
import AdminHeader from "../Components/AdminHeader";
import AdminDrawer from "../Components/AdminDrawer";
import ProtectedRoute from "./protectedRoute";
import { Box } from "@mui/system";
import { useGetCategories } from "../hooks/reactQuery/useGetCategories";
import { setCategory, setCategoryLoading } from "../redux/categorySlice";
import AuthRoute from "./AuthRoute";

const Router = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [adminDrawerState, setAdminDrawerState] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const { data: categoriesRes, isFetching: categoryLoading } =
    useGetCategories();

  const categories = categoriesRes?.data?.length ? categoriesRes?.data : [];

  const toggleAdminDrawer = () => {
    setAdminDrawerState(!adminDrawerState);
  };

  const onAdminDrawerClose = () => {
    setAdminDrawerState(false);
  };

  useEffect(() => {
    if (categories.length) {
      dispatch(setCategory(categories));
    }
  }, [categories]);

  useEffect(() => {
    dispatch(setCategoryLoading(categoryLoading));
  }, [categoryLoading]);

  return (
    // <div style={{ display: 'flex' }}>
    <div
      style={{
        height: '100vh',
        ...(location.pathname.startsWith("/admin")
          ? { display: "flex", flexDirection: "row" }
          : {}),
      }}
    >
      {!ROUTES_WITHOUT_HEADER.includes(location.pathname) && (
        <CartDrawer open={drawerState} />
      )}

      {ADMIN_ROUTES.includes(location.pathname) && (
        <Box sx={{ background: "#e2e7e84d" }}>
          <AdminDrawer open={adminDrawerState} onClose={onAdminDrawerClose} />
        </Box>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflowX: "hidden",
          height: '100%',
          ...(location.pathname.startsWith("/admin")
            ? { backgroundColor: "#e2e7e84d" }
            : {}),
        }}
      >
        {!ROUTES_WITHOUT_HEADER.includes(location.pathname) && <Header />}
        {ADMIN_ROUTES.includes(location.pathname) && (
          <AdminHeader toggleDrawer={toggleAdminDrawer} />
        )}
        <div
          style={{
            flex: 1,
            ...(location.pathname.startsWith("/admin")
              ? { paddingLeft: 30, paddingRight: 30 }
              : {}),
          }}
        >
          <Routes>
            <Route path="/" element={<ProtectedRoute />}>
              <Route path={SCREEN_PATHS.HOME} element={<Home />} />
              <Route path={SCREEN_PATHS.Shop} element={<Shop />} />
              <Route
                path={`${SCREEN_PATHS.PRODUCT_DETAILS}/:id`}
                element={<ProductDetails />}
              />
              <Route path={SCREEN_PATHS.PROFILE} element={<Profile />} />
              <Route
                path={SCREEN_PATHS.ORDER_DETAILS}
                element={<OrderDetails />}
              />
              <Route
                path={SCREEN_PATHS.ADM_DASHBOARD}
                element={<AdminDashboard />}
              />
              <Route
                path={SCREEN_PATHS.ADM_PRD_LIST}
                element={<AdminPrdList />}
              />
              <Route
                path={SCREEN_PATHS.ADM_CAT_LIST}
                element={<AdminCatList />}
              />
              <Route
                path={SCREEN_PATHS.ADM_ORDER_LIST}
                element={<AdminOrderList />}
              />
              <Route
                path={SCREEN_PATHS.ADM_ORDER_DETAILS}
                element={<AdminOrderDetails />}
              />
            </Route>
            <Route path="/" element={<AuthRoute />}>
              <Route path={SCREEN_PATHS.Login} element={<Login />} />
              <Route path={SCREEN_PATHS.Signup} element={<Signup />} />
            </Route>
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
