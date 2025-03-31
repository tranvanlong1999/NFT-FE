import React, { type ReactNode, useEffect } from 'react';

import Header from '@/components/layouts/MainLayout/Header';
import { env } from '@/lib/const';
import type { FCC } from '@/types';

import Footer from './Footer';

interface Props {
  children: ReactNode;
}

const MainLayout: FCC<Props> = ({ children }) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const refreshToken = urlParams.get('refreshToken');
    const tokenExpires = urlParams.get('tokenExpires');
    const user = urlParams.get('user');
    if (token && refreshToken && tokenExpires && user) {
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('tokenExpires', tokenExpires);
      localStorage.setItem('user', user);
      window.location.href = `${env.APP_URL}`;
    }
  }, []);
  return (
    <div className="overflow-clip bg-background">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
