import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Icons } from '@/assets/icons';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormWrapper } from '@/components/ui/form';
import { TextField } from '@/components/ui/FormField';
import { VStack } from '@/components/ui/Utilities';
import { registerSchema } from '@/lib/validations/auth';
import { type NextPageWithLayout, ROUTE } from '@/types';

const RegisterPage: NextPageWithLayout = () => {
  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    criteriaMode: 'firstError',
    resolver: zodResolver(registerSchema),
  });
  const error = form.formState.errors;
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
      <div className="container flex justify-center bg-neutral-801 mt-[5.3125rem] mb-[1.375rem] border-solid rounded-[0.625rem] px-10 py-5">
        <div className="flex w-full border-solid border-[1px] border-b-gray-700 rounded-[0.625rem]">
          <div className="md:max-w-[50%] w-full md:w-[40rem] float-left mx-10 my-5">
            <h1 className="text-h5 font-bold text-white mb-7 mt-10">Create Your Account</h1>
            <p className="text-[0.741rem] leading-[1.125rem] text-white mb-14 ">Already have an account? Log In</p>
            <FormWrapper form={form} onSubmit={console.log} className={'my-8 md:mx-0'}>
              <VStack spacing={24}>
                <TextField
                  control={form.control}
                  name="firstName"
                  size={'lg'}
                  error={error.firstName}
                  placeholder="First Name"
                />
                <TextField
                  control={form.control}
                  name="lastName"
                  size={'lg'}
                  error={error.lastName}
                  placeholder="First Name"
                />
                <TextField
                  control={form.control}
                  name={'email'}
                  size={'lg'}
                  error={error.email}
                  placeholder={'Email'}
                />
                <TextField
                  control={form.control}
                  name={'password'}
                  type={'password'}
                  size={'lg'}
                  error={error.password}
                  placeholder={'Password'}
                />
                <TextField
                  control={form.control}
                  name={'confirmPassword'}
                  type={'confirmPassword'}
                  size={'lg'}
                  error={error.confirmPassword}
                  placeholder={'Re Password'}
                />
                <div className={'flex justify-between'}>
                  <Checkbox
                    className={'rounded-sm border-primary border-2 h-[1.125rem] w-[1.125rem]'}
                    label="Allow to all terms & condition"
                    labelClassName={'text-silver leading-5 font-medium pr-[5rem]'}
                  ></Checkbox>
                </div>
                <div className={'mt-3 flex justify-between gap-6'}>
                  <Button
                    variant={'secondary'}
                    rounded={'md'}
                    size={'lg'}
                    className={'font-bold w-[14.375rem] inline-block h-[3.3rem]'}
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant={'secondary'}
                    rounded={'md'}
                    size={'lg'}
                    className={'font-bold w-[14.375rem] inline-block h-[3.3rem]'}
                  >
                    Login
                  </Button>
                </div>
                <div className="text-white flex flex-col gap-5">
                  <div className="text-h4">Another Way to Login</div>
                  <div>Most popular gaming digital nft market place</div>
                </div>
                <div className="flex gap-5 justify-between">
                  <Button
                    variant={'secondary'}
                    rounded={'md'}
                    size={'lg'}
                    className={'font-bold w-[14.375rem] inline-block h-[3.3rem]'}
                  >
                    <Icons.google className="w-28 h-16 mr-[1.125rem]" />
                    Log in with Google
                  </Button>
                  <Button
                    variant={'secondary'}
                    rounded={'md'}
                    size={'lg'}
                    className={'font-bold w-[14.375rem] inline-block h-[3.3rem]'}
                  >
                    <Icons.twitter className="w-28 h-16 mr-[1.125rem]" />
                    Log in with Twitter
                  </Button>
                </div>
              </VStack>
            </FormWrapper>
          </div>
          <div className={'w-[50%] float-right'}>
            <img src="/images/image_register.png" alt="Logo" className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
