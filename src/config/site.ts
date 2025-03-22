import { ROUTE } from '@/types';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'NextJs-shadcn-boilderplate',
  description: 'NextJs-shadcn-boilderplate',
  url: 'http://localhost:3000',
  ogImage: 'http://localhost:3000/opengraph-image.jpg',
};

export const LIST_NAVIGATION = [
  {
    name: 'home',
    href: ROUTE.HOME,
    label: 'Home',
    submenu: [],
  },
  {
    name: 'about',
    href: ROUTE.ABOUT,
    label: 'About ',
    submenu: [],
  },
  {
    name: 'explorer',
    href: ROUTE.EXPLORER,
    label: 'Explorer',
    submenu: [
      // { name: 'foot1', href: ROUTE.VEGETABLES, label: 'Food 1' },
      // { name: 'foot2', href: ROUTE.VEGETABLES, label: 'Food 2' },
      // { name: 'foot3', href: ROUTE.VEGETABLES, label: 'Food 3' },
    ],
  },
  {
    name: 'cookies',
    href: ROUTE.PAGES,
    label: 'Cookies ',
    submenu: [],
  },
  {
    name: 'others',
    href: ROUTE.OTHERS,
    label: 'Others',
    submenu: [],
  },
  {
    name: 'blogs',
    href: ROUTE.BLOGS,
    label: 'Blogs',
    submenu: [],
  },
  {
    name: 'contact',
    href: ROUTE.CONTACT,
    label: 'contact',
    submenu: [],
  },
];
