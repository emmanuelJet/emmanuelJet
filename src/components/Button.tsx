'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size = 'md',
  variant = 'primary',
  disabled = false,
  ...rest
}) => {
  const baseStyles = 'cursor-pointer text-xs rounded w-full justify-center sm:w-auto transition-colors';

  let variantStyles: string;
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-primary-500 hover:bg-primary-600 text-white';
      break;

    case 'outline':
      variantStyles = 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500';
      break;

    default:
      variantStyles = ''
      break;
  }

  let sizeStyles: string;
  switch (size) {
    case 'sm':
      sizeStyles = 'py-1 px-3';
      break;
    case 'md':
      sizeStyles = 'py-2 px-4';
      break;
    case 'lg':
      sizeStyles = 'py-3 px-6 text-base';
      break;
    default:
      sizeStyles = 'py-2 px-4';
      break;
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const classes = `${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${className || ''}`.trim();

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
