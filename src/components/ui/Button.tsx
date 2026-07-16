import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'white';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    
    // Unified Base styles: Sharp corners, bold, uppercase, tracking-wider, flex layout
    const baseStyles = 'inline-flex items-center justify-center gap-3 font-heading font-bold uppercase tracking-wider transition-all duration-300 ease-out focus:outline-none hover:-translate-y-0.5 active:translate-y-0';
    
    // Sizing
    const sizeStyles = {
      sm: 'px-6 py-3 text-xs',
      md: 'px-8 py-4 text-sm',
      lg: 'px-10 py-5 text-base',
    };

    // Variants (based on brand colors)
    const variantStyles = {
      primary: 'bg-[#C0392B] text-white hover:bg-[#E74C3C] hover:shadow-[0_0_20px_rgba(192,57,43,0.5)] border border-transparent',
      secondary: 'bg-[#8C7853] text-white hover:bg-[#A69068] hover:shadow-[0_0_20px_rgba(140,120,83,0.5)] border border-transparent',
      outline: 'bg-transparent text-white border-2 border-white/25 hover:border-white/80 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]',
      ghost: 'bg-transparent text-white hover:bg-white/10 hover:shadow-sm border border-transparent',
      dark: 'bg-[#2A2522] text-white hover:bg-[#3E3733] hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-transparent',
      white: 'bg-white text-[#2A2522] hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] border border-transparent'
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
