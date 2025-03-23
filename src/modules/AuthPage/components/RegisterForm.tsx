'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';

import { Icons } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormWrapper } from '@/components/ui/form';
import { TextField } from '@/components/ui/FormField';
import { VStack } from '@/components/ui/Utilities';
import { registerSchema } from '@/lib/validations/auth';
import { type IRegisterParams } from '@/api/auth/types';
import { registerRequest } from '@/api/auth';

interface RegisterFormData extends Omit<IRegisterParams, 'confirmPassword'> {
  confirmPassword: string;
}

interface RegisterFormProps {
  setActiveForm: (form: 'register' | 'login') => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ setActiveForm }) => {
  const form = useForm<RegisterFormData>({
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

  const { mutate: register, isLoading } = useMutation({
    mutationFn: registerRequest,
    onSuccess: (response) => {
      toast.success('Registration successful!');
      console.log('Registration response:', response);
    },
    onError: (error) => {
      toast.error('Registration failed. Please try again.');
      console.error('Registration error:', error);
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    // Remove confirmPassword before sending to API
    const { confirmPassword, ...registerData } = data;
    register(registerData);
  };

  return (
    <div className="mx-10 my-5">
      <h1 className="text-h5 font-bold text-white mb-7 mt-10">Create Your Account</h1>
      <p
        className="text-base text-white mb-10 underline hover:cursor-pointer transition-all duration-300 hover:scale-[1.02]"
        onClick={() => setActiveForm('login')}
      >
        Already have an account? Log In
      </p>
      <FormWrapper form={form} onSubmit={onSubmit} className={'my-8 md:mx-0'}>
        <VStack spacing={24}>
          <TextField
            control={form.control}
            name="firstName"
            size={'lg'}
            error={error.firstName}
            placeholder="First Name"
            disabled={isLoading}
          />
          <TextField
            control={form.control}
            name="lastName"
            size={'lg'}
            error={error.lastName}
            placeholder="Last Name"
            disabled={isLoading}
          />
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
          <TextField
            control={form.control}
            name="confirmPassword"
            type="password"
            size={'lg'}
            error={error.confirmPassword}
            placeholder="Confirm Password"
            disabled={isLoading}
          />
          <div className={'flex justify-between'}>
            <Checkbox
              className={'rounded-sm border-primary border-2 h-[1.125rem] w-[1.125rem]'}
              label="Allow to all terms & condition"
              labelClassName={'text-silver leading-5 font-medium pr-[5rem]'}
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            variant={'secondary'}
            rounded={'md'}
            size={'lg'}
            className={'font-bold inline-block h-[3.3rem]'}
            disabled={isLoading}
            fullWidth
          >
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </VStack>
      </FormWrapper>
    </div>
  );
};

export default RegisterForm;
