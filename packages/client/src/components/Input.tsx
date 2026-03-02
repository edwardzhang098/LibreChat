import * as React from 'react';
import { cn } from '~/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, title, 'aria-label': ariaLabel, ...props }, ref) => {
    const computedAriaLabel =
      ariaLabel ?? (typeof placeholder === 'string' ? placeholder : undefined) ?? title;

  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className ?? '',
      )}
      ref={ref}
        aria-label={computedAriaLabel}
      {...props}
    />
  );
  },
);
Input.displayName = 'Input';

export { Input };
