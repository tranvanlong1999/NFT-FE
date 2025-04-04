import { request } from '../axios';
import type { IUser } from './types';

export const getUserProfile = async (): Promise<IUser> => {
  const { data } = await request({
    url: '/users/me',
    method: 'GET',
  });
  return data;
};
