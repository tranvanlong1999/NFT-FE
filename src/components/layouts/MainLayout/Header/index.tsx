import React from 'react';

import { Icons } from '@/assets/icons';
import Navbar from '@/components/layouts/MainLayout/Navbar';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Header = () => {
  return (
    <>
      <div>
        <div className="border-solid border-2 border-black"></div>
        <div className="bg-neutral-801">
          <div className="container flex items-center justify-between text-white">
            <div>
              Welcome To Our <span className="text-yellow-400 ml-1">Beatplan</span>
            </div>
            <div className="flex justify-start items-center gap-9">
              <div className="text-white flex justify-between gap-6">
                <span>New Product Coming Soon</span>
                <div className="flex justify-between">
                  <Icons.facebook width={25} />
                  <Icons.youtube width={25} />
                  <Icons.google width={25} />
                  <Icons.twitter width={25} />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-[6.25rem] h-[2.825rem] bg-red-500">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>English</SelectLabel>
                    <SelectItem value="banana">Banana</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="container flex justify-between items-center gap-9">
          <Navbar isScrolled={true} />
        </div>
      </div>
    </>
  );
};
export default Header;
