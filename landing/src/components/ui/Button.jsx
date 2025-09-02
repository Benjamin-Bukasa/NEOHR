import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    
    <button
      
      className={`px-4 py-3 hover:scale-105 transition duration-300 cursor-pointer text-[16px] font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
