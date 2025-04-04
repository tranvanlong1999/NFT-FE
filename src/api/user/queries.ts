import { createQuery } from 'react-query-kit';

import { getUserProfile } from './requests';
import type { IUser } from './types';

export const useUserQuery = createQuery<IUser>({
  primaryKey: '/profile',
  queryFn: getUserProfile,
});
