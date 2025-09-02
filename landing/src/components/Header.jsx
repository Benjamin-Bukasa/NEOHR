import React from 'react';
import Logo from '../components/ui/Logo';
import Navbar from './Navbar';
import Button from '../components/ui/Button';

const Header = () => {
  return (
    <header className='z-50 w-[70%] md:fixed md:top-5 md:flex md:justify-between md:items-center md:px-4 md:py-2 md:bg-white/80 md:border md:border-zinc-200 md:m-auto md:rounded-full md:shadow-sm md:shadow-pink-100 md:backdrop-blur-sm md:backdrop-filter md:backdrop-saturate-150'>
      <Logo/>
      <Navbar/>
      <Button className='text-white font-semibold rounded-full bg-gradient-to-r from-blue-700 to-purple-400 hover:from-blue-800 hover:to-purple-500 transition duration-300'>Se connecter</Button>
    </header>
  );
}

export default Header;
