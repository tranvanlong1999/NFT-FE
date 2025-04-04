import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { loginRequest } from '@/api/auth';
import { type IUserProfileParams } from '@/api/user';
import { Button, buttonVariants } from '@/components/ui/button';
import { FormWrapper } from '@/components/ui/form';
import { AvatarUploadField, TextField, UploadButtonField } from '@/components/ui/FormField';
import { HStack, VStack } from '@/components/ui/Utilities';
import { cn } from '@/lib/utils';
import { userProfileSchema } from '@/lib/validations/user';

interface ProfileSettingProps {
  userName?: string;
  firstName?: string;
  lastName?: string;
  walletAddress?: string;
}

const ProfileSetting: React.FC<ProfileSettingProps> = () => {
  const form = useForm<IUserProfileParams>({
    mode: 'onBlur',
    defaultValues: {
      userName: '',
      firstName: '',
      lastName: '',
      walletAddress: '',
      fileUpload: undefined,
    },
    criteriaMode: 'firstError',
    resolver: zodResolver(userProfileSchema),
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
    onError: () => {
      toast.error('Login failed. Please check your credentials and try again.');
      console.error('Login error:', error);
    },
  });
  const onSubmit = (data: IUserProfileParams) => {};
  return (
    <div className="border border-solid w-full px-10 py-10 rounded-[0.5125rem] bg-neutral-901">
      <div className="text-h5 text-white">Profile Settings</div>
      <FormWrapper form={form} onSubmit={onSubmit} className={'my-8 md:mx-0'}>
        <HStack spacing={24}>
          <VStack spacing={24}>
            <TextField
              label={'First Name'}
              control={form.control}
              name="firstName"
              size={'lg'}
              error={error.firstName}
              disabled={isLoading}
              inputClassName="bg-neutral-801"
              labelClassName="text-neutral-902 mb-[1.25rem]"
            />
            <TextField
              label={'Last Name'}
              control={form.control}
              name="lastName"
              size={'lg'}
              error={error.lastName}
              disabled={isLoading}
              inputClassName="bg-neutral-801"
              labelClassName="text-neutral-902 mb-[1.25rem]"
            />
            <TextField
              label={'Enter Username'}
              control={form.control}
              name="userName"
              size={'lg'}
              error={error.userName}
              disabled={isLoading}
              inputClassName="bg-neutral-801"
              labelClassName="text-neutral-902 mb-[1.25rem]"
            />
            <TextField
              label={'Wallet Address'}
              control={form.control}
              name="walletAddress"
              size={'lg'}
              error={error.walletAddress}
              disabled={isLoading}
              inputClassName="bg-neutral-801"
              labelClassName="text-neutral-902 mb-[1.25rem]"
            />
          </VStack>
          <VStack spacing={24} className="w-[60%]">
            <div className="text-h6">Profile Image</div>
            <AvatarUploadField
              control={form.control}
              name="fileUpload"
              className="w-[6.5rem] h-[6.5rem] rounded-full border border-solid border-neutral-801"
            />
            <div className="flex gap-2">
              <Button
                type="submit"
                rounded={'md'}
                size={'lg'}
                disabled={isLoading}
                fullWidth
                className={cn(
                  buttonVariants({ variant: 'normal', size: 'md', rounded: 'md' }),
                  'font-bold inline-block h-[3.3rem]'
                )}
              >
                {isLoading ? 'Uploading Now...' : 'Upload New Picture'}
              </Button>
              <Button
                type="submit"
                rounded={'md'}
                size={'lg'}
                className={cn(
                  buttonVariants({ variant: 'normal', size: 'xs', rounded: 'md' }),
                  'font-bold inline-block h-[3.3rem] w-28'
                )}
                disabled={isLoading}
                fullWidth
              >
                {isLoading ? 'Deleting Now...' : 'Delete'}
              </Button>
            </div>
            <div className="text-h6">Banner Image</div>
            <UploadButtonField
              control={form.control}
              name="fileUpload"
              btnProps={{ variant: 'ghost', size: 'xxl', rounded: 'md' }}
            />
            <div className="flex gap-2">
              <Button
                type="submit"
                rounded={'md'}
                size={'lg'}
                disabled={isLoading}
                fullWidth
                className={cn(
                  buttonVariants({ variant: 'normal', size: 'md', rounded: 'md' }),
                  'font-bold inline-block h-[3.3rem]'
                )}
              >
                {isLoading ? 'Uploading Now...' : 'Upload New Picture'}
              </Button>
              <Button
                type="submit"
                rounded={'md'}
                size={'lg'}
                className={cn(
                  buttonVariants({ variant: 'normal', size: 'xs', rounded: 'md' }),
                  'font-bold inline-block h-[3.3rem] w-28'
                )}
                disabled={isLoading}
                fullWidth
              >
                {isLoading ? 'Deleting Now...' : 'Delete'}
              </Button>
            </div>
            <Button
              type="submit"
              rounded={'md'}
              size={'lg'}
              disabled={isLoading}
              fullWidth
              className={cn(
                buttonVariants({ variant: 'yellow', rounded: 'md' }),
                'font-bold inline-block h-[3.3rem] w-28'
              )}
            >
              {isLoading ? 'Saving Now...' : 'Save Now'}
            </Button>
          </VStack>
        </HStack>
      </FormWrapper>
    </div>
  );
};
export default ProfileSetting;
