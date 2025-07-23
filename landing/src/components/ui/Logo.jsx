import React from 'react';
import { Link } from 'react-router-dom';

import { Play } from 'lucide-react';

const Logo = () => {
  return (
    <div className='font-bold text-accent text-2xl'>
      <Link to="/home" className='flex items-center gap-0'>NeoHR <Play strokeWidth={3}/></Link>
    </div>
  );
}

export default Logo;
