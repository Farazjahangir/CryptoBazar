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

const DRAWER_ROUTES = [
  {
    name: "Dashboard",
    key: 'dash'
  },
  {
    name: "Categories",
    key: 'cat',
    subMenu: [
      {
        name: "List",
        key: 'c-list',
      },
      {
        name: "Create",
        key: 'c-create',
      },
    ]
  },
  {
    name: "Products",
    key: 'prd',
    subMenu: [
      {
        name: "List",
        key: 'p-list',
      },
      {
        name: "Create",
        key: 'p-create',
      },
    ]
  },
]

export {
    SCREENS_CODES,
    SCREEN_PATHS,
    ROUTES_WITHOUT_HEADER,
    ADMIN_ROUTES,
    DRAWER_ROUTES
}