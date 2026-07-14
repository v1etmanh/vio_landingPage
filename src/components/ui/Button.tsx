import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    
    // Base styles: clear layout, standardized transition for snappy but smooth feel. No excessive box-shadows.
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    // Sizing
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm rounded-md',
      md: 'px-8 py-3 text-base rounded-lg',
      lg: 'px-12 py-4 text-xl rounded-xl',
    };

    // Variants (based on brand colors: primary = #8C7853, darkmode = #2A2522)
    const variantStyles = {
      primary: 'bg-[#8C7853] text-white hover:bg-[#736344] focus:ring-[#8C7853]/50',
      secondary: 'bg-white text-[#2A2522] border border-gray-200 hover:bg-gray-50 focus:ring-gray-200',
      outline: 'bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-[#2A2522] focus:ring-white/50',
      ghost: 'bg-transparent text-white hover:bg-white/10 focus:ring-white/50',
      dark: 'bg-[#2A2522] text-white hover:bg-black focus:ring-[#2A2522]/50',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
