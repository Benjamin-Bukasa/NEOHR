import React from 'react';
import { Link } from 'react-router-dom';

import { Play } from 'lucide-react';

const Logo = () => {
  return (
    <div className='font-semibold text-accent text-2xl'>
      <Link to="/home" className='bg-gradient-to-r from-purple-700 to-red-400 bg-clip-text text-transparent'>NeoHR</Link>
    </div>
  );
}

export default Logo;
