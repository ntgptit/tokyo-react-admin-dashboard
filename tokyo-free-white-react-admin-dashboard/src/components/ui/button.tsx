import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'src/lib/utils';
import { Slot } from 'radix-ui';

const muiTones = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'info'
] as const;

const muiToneClasses = {
  contained: {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary:
      'border border-black/30 bg-secondary text-white hover:bg-secondary-dark',
    success: 'bg-success text-white hover:bg-success-dark',
    warning: 'bg-warning text-white hover:bg-warning-dark',
    error: 'bg-error text-white hover:bg-error-dark',
    info: 'bg-info text-white hover:bg-info-dark'
  },
  outlined: {
    primary:
      'border border-primary/50 text-primary hover:border-primary hover:bg-primary/5',
    secondary:
      'border border-secondary/50 bg-white text-secondary hover:border-secondary hover:bg-ink/5 hover:text-ink',
    success:
      'border border-success/50 text-success hover:border-success hover:bg-success/5',
    warning:
      'border border-warning/50 text-warning hover:border-warning hover:bg-warning/5',
    error:
      'border border-error/50 text-error hover:border-error hover:bg-error/5',
    info: 'border border-info/50 text-info hover:border-info hover:bg-info/5'
  },
  text: {
    primary: 'text-primary hover:bg-primary/5',
    secondary: 'text-secondary hover:bg-secondary/5',
    success: 'text-success hover:bg-success/5',
    warning: 'text-warning hover:bg-warning/5',
    error: 'text-error hover:bg-error/5',
    info: 'text-info hover:bg-info/5'
  }
} as const;

const muiDisabled = {
  contained:
    'disabled:opacity-100 disabled:border-transparent disabled:bg-black/10 disabled:text-black/30',
  outlined:
    'disabled:opacity-100 disabled:border-black/10 disabled:bg-transparent disabled:text-black/30',
  text: 'disabled:opacity-100 disabled:bg-transparent disabled:text-black/30'
} as const;

const muiCompound = (
  Object.keys(muiToneClasses) as (keyof typeof muiToneClasses)[]
).flatMap((variant) => [
  ...muiTones.map((tone) => ({
    variant,
    tone,
    class: muiToneClasses[variant][tone]
  })),
  { variant, class: muiDisabled[variant] }
]);

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        // MUI-style variants (use together with `tone`, default primary)
        contained: 'rounded-[6px] font-bold',
        outlined: 'rounded-[6px] font-bold',
        text: 'rounded-[6px] font-bold'
      },
      tone: {
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        error: '',
        info: ''
      },
      size: {
        // MUI-style sizes
        small:
          "px-4 py-[6px] text-[13px] leading-normal [&_svg:not([class*='size-'])]:size-[18px]",
        medium: 'px-5 py-2 text-sm leading-[1.75]',
        large:
          "px-6 py-[11px] text-[15px] leading-[1.75] [&_svg:not([class*='size-'])]:size-[22px]",
        'icon-mui': 'size-10 rounded-[8px] p-2 text-ink hover:bg-ink/5',
        'icon-mui-sm': 'size-8 rounded-[8px] p-1 text-ink hover:bg-ink/5',
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-xs': "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-8',
        'icon-lg': 'size-10'
      }
    },
    compoundVariants: muiCompound,
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  tone,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({
          variant,
          size,
          tone:
            tone ??
            (variant === 'contained' ||
            variant === 'outlined' ||
            variant === 'text'
              ? 'primary'
              : undefined),
          className
        })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
