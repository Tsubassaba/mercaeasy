import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'large';
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary', type = 'button' }) => {
  const baseClasses = 'font-bold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl py-3 px-8',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 py-3 px-8',
    large: 'bg-blue-600 text-white hover:bg-blue-700 shadow-2xl hover:shadow-blue-500/50 py-4 px-12 text-lg',
  };

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;