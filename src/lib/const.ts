export const env = {
  isProduction: process.env.NODE_ENV === 'production',
  APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3001',
  API_URL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000',
};

export const isServer = typeof window === 'undefined';

export const SETTING_TYPE = {
  PROFILE: 1,
  LINKS: 2,
  NOTIFICATIONS: 3,
};
