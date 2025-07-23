import React from 'react';
import { Link } from 'react-router-dom';
import Navlist from '../features/Navlist';

const Navbar = () => {
  return (
    <nav className='Z-50 md:flex md:justify-between md:items-center md:gap-4'>
      <Navlist/>
    </nav>
  );
}

export default Navbar;
