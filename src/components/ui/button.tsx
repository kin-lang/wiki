import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
}

const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    { variant = 'primary', size = 'medium', className, children, ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors';
    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-primary-dark',
      secondary: 'bg-secondary text-black hover:bg-secondary-dark border',
      ghost: 'bg-transparent text-primary hover:bg-primary/10 border',
    };

    const sizeStyles = {
      small: 'px-3 py-1 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
