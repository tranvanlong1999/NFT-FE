import Link from 'next/link';
import React from 'react';

import { ROUTE } from '@/types';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }: LogoProps) => {
  return (
    <div className="mr-[2.4375rem]">
      <Link href={ROUTE.HOME}>
        <img src="/images/logo.png" alt="Logo" className="h-40 w-auto" />
      </Link>
    </div>
  );
};
export default Logo;
