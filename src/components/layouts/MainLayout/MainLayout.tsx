import type { ReactNode } from 'react';
import React from 'react';

import Header from '@/components/layouts/MainLayout/Header';
import type { FCC } from '@/types';

import Footer from './Footer';

interface Props {
  children: ReactNode;
}

const MainLayout: FCC<Props> = ({ children }) => {
  return (
    <div className="overflow-clip bg-background">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
