import React from 'react';
import Logo from '../components/ui/Logo';
import Navbar from './Navbar';
import Button from '../components/ui/Button';

const Header = () => {
  return (
    <header className='Z-50 w-[65%] md:fixed md:top-5 md:flex md:justify-between md:items-center md:px-4 md:py-2 md:bg-white md:border md:border-pink-100 md:m-auto md:rounded-full md:shadow-sm md:shadow-pink-100'>
      <Logo/>
      <Navbar/>
      <Button className='text-white font-semibold rounded-full bg-gradient-to-r from-red-700 to-red-400 hover:from-red-800 hover:to-red-500 transition duration-300'>Se connecter</Button>
    </header>
  );
}

export default Header;
