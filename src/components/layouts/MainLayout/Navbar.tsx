import Link from 'next/link';
import { useState } from 'react';

import Logo from '@/components/layouts/MainLayout/Header/Logo';
import { Label } from '@/components/ui/label';
import { LIST_NAVIGATION } from '@/config/site';

interface NarBarProps {
  isScrolled: boolean;
}

export interface NavItem {
  name: string;
  href: string;
  label?: string;
  submenu?: NavItem[];
}

interface NavSubItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: NavItem;
}

const NavItemComponent = ({ item: { href, name, label, submenu } }: NavSubItemProps) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <li
        className="container relative h-full hover:cursor-pointer"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Link href={href} className="h-full flex items-center text-blue-50 text-h6 tracking-[-0.04%]">
          <Label
            className={`${
              show ? 'text-green-500' : 'text-darkblue'
            } font-quicksand text-sm xl:text-base tracking-[-0.04%]`}
          >
            {label}
          </Label>
        </Link>
      </li>
    </>
  );
};

const Navbar = ({ isScrolled }: NarBarProps) => {
  const listNavBar: NavItem[] = [...LIST_NAVIGATION];
  return (
    <>
      <Logo />
      <div className={'z-10 w-full'}>
        <div className="flex justify-between">
          <div className="flex xl:gap-[0.4375rem] justify-between">
            <nav className="hidden lg:flex justify-between  xl:justify-between w-full h-full">
              <ul className="flex justify-between w-full lg:w-fit lg:gap-10 text-white">
                {listNavBar?.map((item, index) => (
                  <NavItemComponent key={index} item={item} />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="mb-[5.4375rem]"></div>
    </>
  );
};

export default Navbar;
