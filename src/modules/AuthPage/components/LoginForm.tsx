'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';

import { Icons } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '@/components/ui/form';
import { TextField } from '@/components/ui/FormField';
import { VStack } from '@/components/ui/Utilities';
import { loginSchema } from '@/lib/validations/auth';
import { type ILoginParams } from '@/api/auth/types';
import { loginRequest } from '@/api/auth';
import { env } from '@/lib/const';

interface LoginFormProps {
  setActiveForm: (form: 'register' | 'login') => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setActiveForm }) => {
  const form = useForm<ILoginParams>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    criteriaMode: 'firstError',
    resolver: zodResolver(loginSchema),
  });
  const error = form.formState.errors;

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginRequest,
    onSuccess: (response) => {
      if (response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken);
        if (response.refreshToken) {
          localStorage.setItem('refreshToken', response.refreshToken);
        }
        toast.success('Login successful!');
      }
    },
    onError: (error) => {
      toast.error('Login failed. Please check your credentials and try again.');
      console.error('Login error:', error);
    },
  });

  const onSubmit = (data: ILoginParams) => {
    login(data);
  };

  const handleGoogleLogin = () => {
    // Open Google OAuth popup
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const popup = window.open(
      `${env.API_URL}/api/v1/auth-google-passport/login`,
      'Google Login',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    // Listen for message from popup
    window.addEventListener('message', async (event) => {
      if (event.origin !== env.API_URL) return;

      if (event.data.type === 'GOOGLE_LOGIN_SUCCESS') {
        const { accessToken, refreshToken } = event.data;
        
        // Store tokens
        localStorage.setItem('accessToken', accessToken);
        if (refreshToken) {
          localStorage.setItem('refreshToken', refreshToken);
        }
        
        toast.success('Login successful!');
        // Close popup
        popup?.close();
      } else if (event.data.type === 'GOOGLE_LOGIN_ERROR') {
        toast.error('Google login failed. Please try again.');
        popup?.close();
      }
    });
  };

  const handleTwitterLogin = () => {
    // Implement Twitter login logic
    toast.info('Twitter login coming soon');
  };

  return (
    <div className="mx-10 my-5">
      <h1 className="text-h5 font-bold text-white mb-7 mt-10">Welcome Back</h1>
      <p
        className="text-base text-white mb-10 underline hover:cursor-pointer transition-all duration-300 hover:scale-[1.02]"
        onClick={() => setActiveForm('register')}
      >
        Don't have an account? Sign Up
      </p>
      <FormWrapper form={form} onSubmit={onSubmit} className={'my-8 md:mx-0'}>
        <VStack spacing={24}>
          <TextField
            control={form.control}
            name="email"
            size={'lg'}
            error={error.email}
            placeholder="Email"
            disabled={isLoading}
          />
          <TextField
            control={form.control}
            name="password"
            type="password"
            size={'lg'}
            error={error.password}
            placeholder="Password"
            disabled={isLoading}
          />
          <Button
            type="submit"
            rounded={'md'}
            size={'lg'}
            className={'font-bold inline-block h-[3.3rem]'}
            disabled={isLoading}
            fullWidth
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
          <div className="text-white flex flex-col gap-5">
            <div className="text-h4">Another Way to Login</div>
            <div>Most popular gaming digital nft market place</div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Button
              type="button"
              rounded={'md'}
              size={'lg'}
              className={'font-bold inline-block h-[3.3rem]'}
              onClick={handleGoogleLogin}
              disabled={isLoading}
              leftIcon={<Icons.google className="h-16" />}
            >
              Log in with Google
            </Button>
            <Button
              type="button"
              rounded={'md'}
              size={'lg'}
              className={'font-bold inline-block h-[3.3rem]'}
              onClick={handleTwitterLogin}
              disabled={isLoading}
              leftIcon={<Icons.twitter className="h-16" />}
            >
              Log in with Twitter
            </Button>
          </div>
        </VStack>
      </FormWrapper>
    </div>
  );
};

export default LoginForm;
