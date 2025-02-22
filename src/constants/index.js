const ADMIN_SCREEN_PATH = {
  ADM_DASHBOARD: '/admin/dashboard',
  ADM_PRD_LIST: '/admin/product/list',
  ADM_CAT_LIST: '/admin/category/list',
  ADM_ORDER_LIST: '/admin/order/list',
  ADM_ORDER_DETAILS: '/admin/order/details',
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
const ADMIN_ROUTES = Object.values(ADMIN_SCREEN_PATH)

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
        path: '/admin/category/list'
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
  {
    name: "Orders",
    key: 'orders',
    subMenu: [
      {
        name: "List",
        key: 'p-list',
        path: '/admin/order/list'
      },
      {
        name: "Create",
        key: 'p-create',
      },
    ]
  },
]

const SIZES = ["SM", "MD", "LG", "XL"]

const PROTECTED_ROUTES = [SCREEN_PATHS.ORDER_DETAILS, SCREEN_PATHS.PROFILE, ...ADMIN_ROUTES]

const queryKeys = {
  USE_GET_CATEGORIES: 'USE_GET_CATGRIES',
  USE_GET_PRODUCTS: 'USE_GET_PRODUCTS'
}

const PAGE_SIZE = 10

export {
    SCREENS_CODES,
    SCREEN_PATHS,
    ROUTES_WITHOUT_HEADER,
    ADMIN_ROUTES,
    DRAWER_ROUTES,
    SIZES,
    PROTECTED_ROUTES,
    PAGE_SIZE,
    queryKeys
}