export const ROUTE = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  ME: '/me',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  USER_PROFILE: '/user-profile',
  SUPPORT: '/support',
  SUPPORT_NEW: '/support_new',
  ABOUT: '/about',
  EXPLORER: '/explorer',
  PAGES: '/pages',
  OTHERS: '/others',
  BLOGS: '/blogs',
  CONTACT: '/contact',
  FORGOT_PASSWORD: '/forgot-password',
} as const;

export type ROUTE_KEY = keyof typeof ROUTE;

export const MAPPING_ROUTE_TITLE = {
  [ROUTE.DASHBOARD]: 'Course',
  [ROUTE.SUPPORT]: 'Support',
  [ROUTE.USER_PROFILE]: 'Profile',
} as unknown as Record<ROUTE_KEY, string>;
