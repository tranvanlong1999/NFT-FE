import Link from 'next/link';

import { cn } from '@/lib/utils';

export interface BreadcrumbProps {
  childrenCrumbs: { link: string; title: string }[];
  className?: string;
}

const Breadcrumb = ({ childrenCrumbs, className }: BreadcrumbProps) => {
  return (
    <div className={className}>
      <div className="container flex my-6 items-center text-white">
        {childrenCrumbs.map((item, index) => {
          return <BreadcrumbItem key={index} title={item.title} link={item.link} index={index} />;
        })}
      </div>
    </div>
  );
};

interface BreadcrumbItemProps {
  index: number;
  link: string;
  title: string;
}
const BreadcrumbItem = ({ index, link, title }: BreadcrumbItemProps) => {
  const defaultCss = 'flex text-white mx-0.5 font-bold text-sm leading-6';
  return (
    <>
      {index !== 0 && <span className={'px-3'}>/</span>}
      <Link key={index} href={link} className={cn(defaultCss, 'hover:text-yellow-500')}>
        {title}
      </Link>
    </>
  );
};
export default Breadcrumb;
