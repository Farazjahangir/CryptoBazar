const ADMIN_SCREEN_PATH = {
  ADM_DASHBOARD: '/admin/dashboard',
  ADM_PRD_LIST: '/admin/product/list'
}

const SCREEN_PATHS = {
  HOME: "/",
  Login: "/login",
  Signup: "/signup",
  Shop: '/shop',
  PRODUCT_DETAILS: '/product-details',
  PROFILE: '/profile',
  ORDER_DETAILS: '/order-details/:orderId',
  ...ADMIN_SCREEN_PATH
};

const SCREENS_CODES = {
    HOME: 'home',
    LOGIN: 'login',
};


const ROUTES_WITHOUT_HEADER = ["/login", "/signup", ...Object.values(ADMIN_SCREEN_PATH)];
// const ROUTES_WITHOUT_HEADER = ["/login", "/signup", '/admin/dashboard']
const ADMIN_ROUTES = ['/admin/dashboard', '/admin/product/list']

const DRAWER_ROUTES = [
  {
    name: "Dashboard",
    key: 'dashboard',
    path: '/admin/dashboard'
  },
  {
    name: "Categories",
    key: 'category',
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
    key: 'product',
    subMenu: [
      {
        name: "List",
        key: 'p-list',
        path: '/admin/product/list'
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