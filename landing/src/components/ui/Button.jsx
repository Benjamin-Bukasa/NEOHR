import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-4 py-2 transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
