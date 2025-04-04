import * as z from 'zod';

import { validationMessages } from '@/lib/validations/validation.utility';

export const userProfileSchema = z.object({
  userName: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  firstName: z.string().nonempty(validationMessages.required('First name')),
  lastName: z.string().nonempty(validationMessages.required('Last name')),
  walletAddress: z.string().nonempty(validationMessages.required('Wallet address')),
});
