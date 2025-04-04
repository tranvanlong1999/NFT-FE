import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Spinner } from './spinner';

const buttonVariants = cva(
  'relative inline-flex items-center active:scale-90 justify-center text-sm font-medium ring-offset-background ' +
    'transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ' +
    'focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group/button',
  {
    variants: {
      variant: {
        primary: 'text-black bg-green-grad-1 border border-neon-400 hover:bg-primary/90',
        secondary: 'text-neutral-900 bg-black border border-neutral-300 hover:bg-yellow-500/90',
        disable: 'text-neutral-500 bg-neutral-grad-3 border border-neutral-300',
        ghost: 'text-neutral-902 hover:text-yellow-500 bg-neutral-801',
        yellow: 'text-black hover:cursor-pointer hover:bg-green-500 bg-yellow-500 border border-neutral-300',
        normal:
          'text-neutral-902 hover:cursor-pointer bg-neutral-801 hover:cursor-pointer ' +
          'hover:outline-none border border-neutral-300 hover:text-yellow-500',
      },
      rounded: {
        default: 'rounded-sm',
        full: 'rounded-full',
        md: 'rounded-md',
        none: 'rounded-none',
      },
      text: {
        default: 'text-sm',
        xs: 'text-xs',
        lg: 'text-lg',
      },
      size: {
        md: 'h-[1.5rem]',
        xs: 'h-[2rem]',
        lg: 'h-[2.5rem]',
        sm: 'h-[3rem]',
        xl: 'h-[4rem]',
        xxl: 'h-[5rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'full',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  blur?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      type = 'button',
      size,
      fullWidth,
      rounded,
      asChild = false,
      loading,
      blur = true,
      children,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        disabled={props.disabled}
        className={cn(fullWidth && 'w-full', buttonVariants({ variant, rounded, size, className }))}
        ref={ref}
        type={type}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {!loading && (
              <div className="flex items-center justify-center gap-2">
                {leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {rightIcon && <span className="ml-2">{rightIcon}</span>}
              </div>
            )}
            {loading && <Spinner className="ml-4" />}
            {blur && (
              <span
                className={cn(
                  'bg-neon-400 filter blur-xl bottom-0 absolute z-10 w-[3.375rem] h-[1rem] group-hover/button:hidden'
                )}
              ></span>
            )}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
