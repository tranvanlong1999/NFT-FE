/* eslint-disable no-nested-ternary */
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { Icons } from '@/assets/icons';
import { cn } from '@/lib/utils';

import { Show } from './Utilities';

export const inputVariants = cva(
  cn(
    'border-input border placeholder:font-light bg-transparent ring-offset-background peer',
    'focus-visible:ring-transparent focus-visible:border-border flex w-full file:border-0 file:bg-transparent',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
    // 'read-only:bg-readonly read-only:border-readonly-border read-only:cursor-default'
  ),
  {
    variants: {
      variant: {
        default: 'bg-background',
        filled: 'bg-background',
        error: 'border-error',
      },
      size: {
        sm: 'h-11 px-3 py-2 text-sm rounded-sm file:text-sm file:font-medium',
        lg: 'h-[3.375rem] px-9 text-base rounded-md file:text-s-lg file:font-medium',
        default: 'h-14 px-3 text-sm rounded-sm file:text-sm file:font-medium',
        search: 'h-[2.375rem] text-[0.75rem] leading-[1.125rem] file:font-normal pl-0.886875rem',
        'search-blog': 'text-base font-normal my-[0.125rem] font-lato w-full mr-[1.75rem]',
        categories: 'h-[2.375rem] text-darkblue text-sm font-quicksand font-bold mr-[4.375rem] my-1 ml-1',
        searchMobile:
          'text-[0.875rem] bg-red-500 font-lato leading-[1.5rem] font-normal pl-5 h-[2.4375rem] py-[0.1875rem] pr-[3.125rem] border-none',
      },
      'color-ct': { search: 'text-silver', searchMobile: 'text-darkblue' },
      border: { search: 'focus-visible:border-none border-none' },
      background: {
        search: 'bg-neutral-80',
        searchMobile: 'bg-neutral-80',
        default: 'bg-neutral-50',
      },
    },
    defaultVariants: {
      size: 'default',
      background: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  errorClassName?: string;
  suffix?: any;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', fullWidth, size, type, suffix, id, ...props }, ref) => {
    const [show, setShow] = React.useState(false);
    return (
      <div className={cn('relative', fullWidth && 'w-full')}>
        <input
          id={id}
          type={type === 'password' ? (show ? 'text' : 'password') : type}
          className={cn(inputVariants({ variant, size, className }))}
          ref={ref}
          placeholder={props.placeholder}
          {...props}
        />
        <Show when={type !== 'password'}>
          {suffix && <div className="absolute right-[10px] top-1/2 -translate-y-1/2">{suffix}</div>}
        </Show>
        <Show when={type === 'password'}>
          <div
            onClick={() => setShow(!show)}
            className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer mr-4"
          >
            {show ? <Icons.eye /> : <Icons.eyeHidden />}
          </div>
        </Show>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
