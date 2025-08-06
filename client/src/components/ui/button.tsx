import type { ReactNode, MouseEvent } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  variant: '1' | '2';
};

export const Button = ({
  children,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  variant,
}: ButtonProps) => {
  const baseStyles =
    'p-4 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer shadow-md hover:shadow-lg';

  const variantStyles = {
    '1': 'bg-primary text-onPrimary focus:ring-primary',
    '2': 'bg-onPrimary text-primary focus:ring-secondary',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};
