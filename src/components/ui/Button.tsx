import React from 'react';
import { Icon } from '@iconify/react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'white' | 'gold';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  icon?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', href, icon, children, ...props }, ref) => {
    
    // Unified Base styles: Sharp corners, bold, uppercase, tracking-wider, flex layout
    const baseStyles = 'group relative inline-flex items-center justify-center font-heading font-bold uppercase tracking-[0.15em] transition-all duration-500 overflow-hidden';
    
    // Sizing
    const sizeStyles = {
      sm: 'px-6 py-3 text-xs',
      md: 'px-8 py-4 text-sm',
      lg: 'px-10 py-5 text-base',
    };

    // Variants (based on brand colors)
    const variantStyles = {
      primary: 'bg-[#C0392B] text-white hover:shadow-[0_10px_40px_rgba(192,57,43,0.4)]',
      secondary: 'bg-[#2A2522] text-white border border-white/10 hover:border-white/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]',
      outline: 'bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5',
      ghost: 'bg-transparent text-white hover:bg-white/10',
      dark: 'bg-[#1A1A1A] text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]',
      white: 'bg-white text-black hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]',
      gold: 'bg-[#C5A059] text-white hover:shadow-[0_10px_40px_rgba(197,160,89,0.4)]'
    };

    const content = (
      <>
        {/* Shine effect on hover */}
        <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
        
        <span className="relative z-10 flex items-center gap-3">
          {children}
          {icon && (
            <Icon icon={icon} className="text-xl group-hover:translate-x-1.5 transition-transform duration-300" />
          )}
        </span>
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
