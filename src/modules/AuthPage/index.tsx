'use client';

import React, { useState } from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import { type NextPageWithLayout, ROUTE } from '@/types';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const AuthPage: NextPageWithLayout = () => {
  const [activeForm, setActiveForm] = useState<'register' | 'login'>('login');

  return (
    <>
      <div className="bg-neutral-801 flex flex-col justify-center items-center max-h-[28.75rem] h-[28.75rem]">
        <div className="container text-h1 text-white">Registration</div>
        <Breadcrumb
          childrenCrumbs={[
            { link: ROUTE.HOME, title: 'Home' },
            { link: ROUTE.SIGN_IN, title: 'Registration' },
          ]}
          className="w-full"
        />
      </div>
      <div className="container bg-neutral-801 mt-[5.3125rem] mb-[1.375rem] border-solid rounded-[0.625rem] px-10 py-5">
        <div className="grid grid-cols-2 gap-2 w-full border-solid border-[1px] border-b-gray-700 rounded-[0.625rem] h-fit">
          <div className="h-full">
            {activeForm === 'register' ? (
              <RegisterForm setActiveForm={setActiveForm} />
            ) : (
              <LoginForm setActiveForm={setActiveForm} />
            )}
          </div>
          <div className="w-full flex items-center justify-center h-fit">
            <img src="/images/image_register.png" alt="Logo" className="w-full h-auto object-cover max-h-[800px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
