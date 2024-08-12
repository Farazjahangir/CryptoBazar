const SCREEN_PATHS = {
  HOME: "/",
  Login: "/login",
  Signup: "/signup",
  Shop: '/shop',
  PRODUCT_DETAILS: '/product-details',
  PROFILE: '/profile',
  ORDER_DETAILS: '/order-details/:orderId',
  ADM_DASHBOARD: '/admin/dashboard'
};

const SCREENS_CODES = {
    HOME: 'home',
    LOGIN: 'login',
};

const ROUTES_WITHOUT_HEADER = ["/login", "/signup", '/admin/dashboard']
const ADMIN_ROUTES = ['/admin/dashboard']

export {
    SCREENS_CODES,
    SCREEN_PATHS,
    ROUTES_WITHOUT_HEADER,
    ADMIN_ROUTES
}