import React from 'react';

const Badge = ({ children, className = '', ...props }) => {
  return (
    <div className={`px-8 py-2 transition duration-200 ${className}`}
      {...props}>
      {children}
    </div>
  );
}

export default Badge;
