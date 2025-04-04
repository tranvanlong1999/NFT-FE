import React, { useState } from 'react';

import { Icons } from '@/assets/icons';
import Breadcrumb from '@/components/Breadcrumb';
import { SETTING_TYPE } from '@/lib/const';
import ProfileSetting from '@/modules/UserProfile/components/ProfileSetting';
import { type NextPageWithLayout, ROUTE } from '@/types';

const UserProfilePage: NextPageWithLayout = () => {
  const [isProfileSetting, setIsProfileSetting] = useState(true);
  const [isLinks, setIsLinks] = useState(false);

  const handleToggle = (type: number) => {
    if (type === SETTING_TYPE.PROFILE) {
      setIsProfileSetting(true);
      setIsLinks(false);
    } else if (type === SETTING_TYPE.LINKS) {
      setIsProfileSetting(false);
      setIsLinks(true);
    }
  };
  return (
    <>
      <div className="bg-neutral-901 flex flex-col justify-center items-center max-h-[28.75rem] h-[28.75rem]">
        <div className="container text-h1 text-white">Dashboard Settings</div>
        <Breadcrumb
          childrenCrumbs={[
            { link: ROUTE.HOME, title: 'Home' },
            { link: ROUTE.SIGN_IN, title: 'Dashboard Settings' },
          ]}
          className="w-full"
        />
      </div>
      <div className="mb-52">
        <div className="text-white container mt-44 flex gap-9">
          <div className="border border-solid w-[50%] rounded-[0.5125rem] px-14 py-14 bg-neutral-901">
            <div className="text-h5 text-white flex justify-start items-center gap-5 mb-6">
              <Icons.metamask className="w-24 h-24" />
              Settings
            </div>
            <div className="flex flex-col gap-6">
              <div
                className={`${
                  isProfileSetting ? 'border-yellow-500 text-yellow-500' : ''
                } flex gap-5 w-full justify-start items-center
              py-3 px-5 border border-solid rounded-[0.5125rem] hover:border-yellow-500 hover:text-yellow-500 hover:cursor-pointer`}
                onClick={() => handleToggle(SETTING_TYPE.PROFILE)}
              >
                <Icons.user className="h-16 w-16" />
                Profile
              </div>
              <div
                className={`${
                  isLinks ? 'border-yellow-500 text-yellow-500' : ''
                } flex gap-5 w-full justify-start items-center
              py-3 px-5 border border-solid rounded-[0.5125rem] hover:border-yellow-500 hover:text-yellow-500 hover:cursor-pointer`}
                onClick={() => handleToggle(SETTING_TYPE.LINKS)}
              >
                <Icons.user className="h-16 w-16" />
                Links
              </div>
              <div
                className="flex gap-5 w-full justify-start items-center
              py-3 px-5 border border-solid rounded-[0.5125rem] hover:border-yellow-500 hover:text-yellow-500 hover:cursor-pointer"
              >
                <Icons.user className="h-16 w-16" />
                Notifications
              </div>
              <div
                className="flex gap-5 w-full justify-start items-center
              py-3 px-5 border border-solid rounded-[0.5125rem] hover:border-yellow-500 hover:text-yellow-500 hover:cursor-pointer"
              >
                <Icons.user className="h-16 w-16" />
                Offers
              </div>
              <div
                className="flex gap-5 w-full justify-start items-center
              py-3 px-5 border border-solid rounded-[0.5125rem] hover:border-yellow-500 hover:text-yellow-500 hover:cursor-pointer"
              >
                <Icons.user className="h-16 w-16" />
                Appearance
              </div>
              <div
                className="flex gap-5 w-full justify-start items-center
              py-3 px-5 border border-solid rounded-[0.5125rem] hover:border-yellow-500 hover:text-yellow-500 hover:cursor-pointer"
              >
                <Icons.user className="h-16 w-16" />
                Account Support
              </div>
            </div>
          </div>
          {isProfileSetting && <ProfileSetting />}
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
