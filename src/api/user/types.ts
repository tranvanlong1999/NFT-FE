export interface IUserProfileParams {
  firstName: string;
  lastName: string;
  userName: string;
  walletAddress: string;
  fileUpload: undefined;
}

export interface IUser {
  id: string;
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  emailVerifiedAt: string;
}
