import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { SCREEN_PATHS } from "../constants";
import { PROTECTED_ROUTES, ADMIN_ROUTES } from "../constants";

const AuthRoute = ({ element, ...rest }) => {
  const location = useLocation();
  const path = location.pathname;
  const user = useSelector((state) => state.user.user);
  
  if (user && (path === SCREEN_PATHS.Login || path === SCREEN_PATHS.Signup)) {
    if (user.role === 'admin') {
      return <Navigate to={SCREEN_PATHS.ADM_DASHBOARD} replace />
    }
    return <Navigate to={SCREEN_PATHS.HOME} replace />
  }

  return <Outlet />;
};

export default AuthRoute;
