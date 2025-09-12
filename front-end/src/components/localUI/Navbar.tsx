import React from 'react';
// import { children } from 'react';

const Navbar = ({children,className}) => {
  return (
    <nav className='w-full flex justify-between items-center px-2'>
      {children}
    </nav>
  );
}

export default Navbar;
