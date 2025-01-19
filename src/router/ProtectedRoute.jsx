import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { SCREEN_PATHS } from "../constants";

const ProtectedRoute = ({ element, ...rest }) => {
  // const location = useLocation();
  // const path = location.pathname;
  const user = useSelector((state) => state.user.user);

  if (user) {
    if (user.role === "admin") {
      return <Navigate to={SCREEN_PATHS.ADM_DASHBOARD} replace />;
    }
  }
  return user ? <Outlet /> : <Navigate to={SCREEN_PATHS.Login} replace />;
};

export default ProtectedRoute;
