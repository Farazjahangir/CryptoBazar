import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { SCREEN_PATHS } from "../constants";
import { PROTECTED_ROUTES, ADMIN_ROUTES } from "../constants";

const ProtectedRoute = ({ element, ...rest }) => {
  const location = useLocation();
  const path = location.pathname;
  const user = useSelector((state) => state.user.user);
  
  if (!user && PROTECTED_ROUTES.includes(path)) {
    console.log("PROTECT")
    return <Navigate to={SCREEN_PATHS.Login} replace />
  }

  if (user && user.role !== 'admin' && ADMIN_ROUTES.includes(path)) {
    return <Navigate to={SCREEN_PATHS.Login} replace />
  }

  // if (user) {
  //   if (user.role === "admin") {
  //   console.log("IFFFFFFF 3")
  //     return <Navigate to={SCREEN_PATHS.ADM_DASHBOARD} replace />;
  //   }
  // }
  return <Outlet />;
};

export default ProtectedRoute;
